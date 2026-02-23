export const initWebsimShim = () => {
    // Enhanced websim shim with 11 Labs TTS
    const websim = (window.websim = window.websim || {
      chat: {
        completions: {
          create: async ({ json }) => ({
            content: json ? JSON.stringify({
              name: "Glitch Entity",
              origin: "Corrupted Sector",
              crisis: "I exist only as a placeholder.",
              image_prompt: "glitch art abstract portrait"
            }) : "This is a placeholder response."
          })
        }
      },
      imageGen: async () => ({ url: null }),
      // Removed recursive override; use native window.websim.textToSpeech if available
      upload: async (file) => {
        // Fallback: create a local blob URL so mobile uploads work without websim backend
        return URL.createObjectURL(file);
      },
    });
    return websim;
};
