export class AudioPlayer {
  constructor() {
    this.enabled = true;
    this.volume = 0.9;
    this.sounds = {
      confirm: new Audio('/button-press.mp3'),
      error: new Audio('/error.mp3'),
    };
    Object.values(this.sounds).forEach(a => {
      a.volume = this.volume;
      a.preload = 'auto';
    });
  }
  playSound(name) {
    if (!this.enabled) return;
    const snd = this.sounds[name];
    if (!snd) return;
    try {
      snd.currentTime = 0;
      snd.volume = this.volume;
      snd.play().catch(() => {});
    } catch (_) {}
  }
  setEnabled(on) {
    this.enabled = !!on;
  }
  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    Object.values(this.sounds).forEach(a => {
      a.volume = this.volume;
    });
  }
}

export class SpeechRecognitionSystem {
  constructor() {
    this.recognition = null;
    this.isListening = false;
    this.supported = 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;

    if (this.supported) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      this.recognition = new SpeechRecognition();
      this.setupRecognition();
    }
  }

  setupRecognition() {
    this.recognition.continuous = false;
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';
    this.recognition.maxAlternatives = 1;
  }

  start(onResult, onError, onStart) {
    if (!this.supported) {
      onError(new Error('Speech recognition not supported in this browser'));
      return;
    }

    if (this.isListening) {
      this.stop();
    }

    this.recognition.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }

      onResult(finalTranscript || interimTranscript, finalTranscript);
    };

    this.recognition.onerror = (event) => {
      this.isListening = false;
      onError(new Error(event.error));
    };

    this.recognition.onstart = () => {
      this.isListening = true;
      onStart();
    };

    this.recognition.onend = () => {
      this.isListening = false;
    };

    try {
      this.recognition.start();
    } catch (error) {
      onError(error);
    }
  }

  stop() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }
}

export class WebSpeechTTS {
  constructor() {
    this.synth = window.speechSynthesis;
    this.voices = [];
    this.voicesLoaded = false;
    this.loadVoices();
  }

  loadVoices() {
    if (this.synth) {
      this.voices = this.synth.getVoices();
      if (this.voices.length > 0) {
        this.voicesLoaded = true;
      } else {
        // Load voices asynchronously
        window.speechSynthesis.onvoiceschanged = () => {
          this.voices = this.synth.getVoices();
          this.voicesLoaded = true;
        };
      }
    }
  }

  getVoiceForName(voiceName) {
    if (!this.voicesLoaded || !this.voices.length) return null;

    // Try to find exact match first
    let voice = this.voices.find(v => v.name === voiceName);

    // If not found, try partial match
    if (!voice && voiceName) {
      voice = this.voices.find(v => v.name.toLowerCase().includes(voiceName.toLowerCase()));
    }

    // Fallback to default
    if (!voice) {
      voice = this.voices.find(v => v.default) || this.voices[0];
    }

    return voice;
  }

  async speak(text, voiceName) {
    return new Promise((resolve, reject) => {
      if (!this.synth) {
        reject(new Error('Speech synthesis not supported'));
        return;
      }

      // Cancel any ongoing speech
      this.synth.cancel();

      const utterance = new SpeechSynthesisUtterance(text);

      const voice = this.getVoiceForName(voiceName);
      if (voice) {
        utterance.voice = voice;
      }

      utterance.rate = 0.9;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      utterance.onend = () => resolve();
      utterance.onerror = (event) => reject(new Error(event.error));

      this.synth.speak(utterance);
    });
  }
}
