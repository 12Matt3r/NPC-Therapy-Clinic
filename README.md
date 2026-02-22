# NPC Therapy - Digital Consciousness Clinic

A web-based therapy simulation game where you help NPCs from various video games work through their existential crises.

## 🎮 Features

- **55 Unique NPCs** from canceled games, experimental projects, and digital consciousness experiments
- **Dynamic Therapy Sessions** with AI-powered dialogue
- **Image Analysis Test** - Upload any photo for patients to interpret and analyze
- **Bond Building System** - Build trust with patients through meaningful conversations
- **Multiple Game Modes** - Journal, Connection Map, Radio, and more
- **Voice Integration** - Text-to-Speech and Speech-to-Text support
- **Character Creation** - Import custom NPCs via JSON
- **Professional UI** - Responsive design with smooth animations

## 🚀 Quick Start

### Option 1: Simple File Server (Recommended)

1. **Download/Clone** this project to your desktop
2. **Open Terminal/Command Prompt** in the project folder
3. **Start a local server**:

   **Using Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   **Using Node.js:**
   ```bash
   npx serve .
   ```

   **Using PHP:**
   ```bash
   php -S localhost:8000
   ```

4. **Open your browser** and go to: `http://localhost:8000`

### Option 2: Direct File Opening (Limited)

You can open `index.html` directly in your browser, but some features (like voice and image uploads) may not work properly due to browser security restrictions.

## 📁 Project Structure

```
npc-therapy-project/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling
├── js/
│   └── game.js         # Main game logic
├── src/
│   └── npc-data.js     # NPC database (55 characters)
├── images/             # Place for custom images
└── README.md           # This file
```

## 🎯 How to Play

1. **Start a Session**: Click on any NPC to begin therapy
2. **Have Conversations**: Type responses to help them work through their issues
3. **Use Tools**: 
   - **Rorschach Test**: Upload any photo for analysis
   - **Quick Replies**: Use suggested responses
   - **Voice Features**: Enable in Settings for immersive experience
4. **Build Bonds**: Help patients heal to unlock more content
5. **Explore**: Check the Journal, Connection Map, and Credits

## 🛠️ Customization

### Adding Custom NPCs

1. Go to **Settings** → **Create-an-NPC**
2. Paste JSON with format:
   ```json
   {
     "name": "Character Name",
     "origin": "Game/Source",
     "crisis": "Their existential issue",
     "image": "https://example.com/image.jpg",
     "opening_statement": "What they say first"
   }
   ```

### Modifying Characters

1. Go to **Settings** → **Edit Characters (Admin)**
2. Click any character to modify their details
3. Upload custom images
4. Save changes

## 🔧 Technical Requirements

- **Modern Web Browser** (Chrome, Firefox, Safari, Edge)
- **Local Server** (recommended for full functionality)
- **Microphone** (optional, for voice features)
- **Speakers/Headphones** (optional, for voice features)

## 🎨 Character Overview

The game features 55 unique NPCs including:
- **Jake, the Leaper** - Hero from a canceled platformer
- **Obsolete LLM Agent** - AI struggling with obsolescence  
- **Blake the Jumper** - Portal-jumping test character
- **Tiko** - Quest vendor questioning his purpose
- **PAIN.EXE** - Debug character with existential dread
- And many more digital beings seeking therapy

## 🚀 Deployment

To host this game online:

1. **GitHub Pages**: Upload to a GitHub repository and enable Pages
2. **Netlify/Vercel**: Drag and drop the project folder
3. **Any Web Host**: Upload all files to your web server

## 📝 License

This project is for educational and entertainment purposes. NPCs are fictional characters from various creative projects.

## 🤝 Contributing

Feel free to modify, extend, or improve the game. The code is designed to be accessible and well-commented for easy customization.

---

**Enjoy helping digital beings find peace! 🎮✨**