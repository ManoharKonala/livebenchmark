# 🚀 AI & Development Tools Leaderboard

> **Last Updated:** Daily at 00:00 UTC

Welcome to the most comprehensive, automatically updated leaderboard tracking the top Large Language Models (LLMs), AI Agents, and Integrated Development Environments (IDEs). This repository updates daily with the latest rankings based on real-time data from various sources.

## 🎯 Features

- **🔄 Automatic Daily Updates**: GitHub Actions workflow runs daily
- **📊 Real-time Data**: Fetches from multiple authoritative sources
- **🌐 Live Dashboard**: Interactive web interface
- **📱 Responsive Design**: Works on all devices
- **🔗 Direct Links**: Quick access to all tools and platforms
- **📈 Trend Tracking**: Shows ranking changes over time

## 📊 Data Sources

- **LLMs**: Hugging Face Open LLM Leaderboard, Chatbot Arena, Model performance benchmarks
- **AI Agents**: GitHub stars, community adoption, framework popularity  
- **IDEs**: GitHub stars, Stack Overflow surveys, developer usage statistics

## 🚀 Quick Start

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/yourusername/llm-leaderboard-tracker.git
cd llm-leaderboard-tracker
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

### 4. Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🤖 Automation Setup

### GitHub Actions Workflow

The repository includes a pre-configured GitHub Actions workflow that:

1. **Runs Daily**: Scheduled at 00:00 UTC
2. **Fetches Data**: From multiple APIs and sources
3. **Updates README**: Generates new leaderboard tables
4. **Commits Changes**: Automatically pushes updates
5. **Deploys**: Triggers deployment to hosting platform

### Environment Variables

For production deployment, set these environment variables:

\`\`\`env
GITHUB_TOKEN=your_github_token
HUGGINGFACE_API_KEY=your_hf_token (optional)
\`\`\`

## 📈 API Endpoints

### Get All Leaderboards
\`\`\`
GET /api/leaderboards
\`\`\`

Returns JSON with current rankings for LLMs, AI Agents, and IDEs.

### Response Format
\`\`\`json
{
  "llms": [...],
  "agents": [...], 
  "ides": [...],
  "lastUpdated": "2024-01-15T00:00:00.000Z"
}
\`\`\`

## 🛠️ Customization

### Adding New Data Sources

1. Edit \`app/api/leaderboards/route.ts\`
2. Add new fetch functions
3. Update the data aggregation logic
4. Test with \`npm run dev\`

### Modifying Categories

1. Update the interface definitions
2. Modify the UI components in \`app/page.tsx\`
3. Update the README generation script

### Styling Changes

The project uses Tailwind CSS and shadcn/ui components. Customize:

1. \`tailwind.config.ts\` - Theme configuration
2. \`app/globals.css\` - Global styles
3. Component files - Individual styling

## 📊 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

The project works with any Node.js hosting platform:

- Netlify
- Railway
- Render
- DigitalOcean App Platform

## 🤝 Contributing

We welcome contributions! Here's how:

### 1. Fork & Clone
\`\`\`bash
git fork https://github.com/yourusername/llm-leaderboard-tracker.git
git clone https://github.com/yourusername/llm-leaderboard-tracker.git
\`\`\`

### 2. Create Feature Branch
\`\`\`bash
git checkout -b feature/amazing-feature
\`\`\`

### 3. Make Changes
- Add new data sources
- Improve UI/UX
- Fix bugs
- Add tests

### 4. Submit Pull Request
- Describe your changes
- Include screenshots if UI changes
- Ensure tests pass

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Hugging Face for LLM leaderboard data
- GitHub for repository statistics
- All the amazing developers building these tools

## 📞 Support

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/yourusername/llm-leaderboard-tracker/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/yourusername/llm-leaderboard-tracker/discussions)
- 📧 **Contact**: your.email@example.com

---

**⭐ Star this repository to stay updated with the latest AI and development tool trends!**

*Generated automatically by LLM Leaderboard Tracker*
\`\`\`

```md project="LLM Leaderboard Tracker" file="LICENSE" type="markdown"
MIT License

Copyright (c) 2024 LLM Leaderboard Tracker

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
