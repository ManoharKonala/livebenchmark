import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Bot, Code, Calendar, ExternalLink } from "lucide-react"

interface LeaderboardItem {
  rank: number
  name: string
  score?: number
  description?: string
  url?: string
  change?: number
}

interface LeaderboardData {
  llms: LeaderboardItem[]
  agents: LeaderboardItem[]
  ides: LeaderboardItem[]
  lastUpdated: string
}

// Mock data - in production this would come from your API
const mockData: LeaderboardData = {
  llms: [
    {
      rank: 1,
      name: "GPT-4o",
      score: 1287,
      description: "OpenAI's latest multimodal model",
      url: "https://openai.com/gpt-4",
      change: 0,
    },
    {
      rank: 2,
      name: "Claude 3.5 Sonnet",
      score: 1271,
      description: "Anthropic's advanced reasoning model",
      url: "https://claude.ai",
      change: 1,
    },
    {
      rank: 3,
      name: "Gemini Ultra",
      score: 1258,
      description: "Google's most capable AI model",
      url: "https://gemini.google.com",
      change: -1,
    },
    {
      rank: 4,
      name: "GPT-4 Turbo",
      score: 1245,
      description: "OpenAI's optimized GPT-4 variant",
      url: "https://openai.com",
      change: 0,
    },
    {
      rank: 5,
      name: "Claude 3 Opus",
      score: 1232,
      description: "Anthropic's most powerful model",
      url: "https://claude.ai",
      change: 2,
    },
    {
      rank: 6,
      name: "Llama 3.1 405B",
      score: 1198,
      description: "Meta's open-source flagship",
      url: "https://llama.meta.com",
      change: 1,
    },
    {
      rank: 7,
      name: "Mixtral 8x22B",
      score: 1156,
      description: "Mistral's mixture of experts",
      url: "https://mistral.ai",
      change: -2,
    },
    {
      rank: 8,
      name: "Command R+",
      score: 1134,
      description: "Cohere's enterprise model",
      url: "https://cohere.com",
      change: 0,
    },
    {
      rank: 9,
      name: "Yi-Large",
      score: 1121,
      description: "01.AI's competitive model",
      url: "https://01.ai",
      change: 3,
    },
    {
      rank: 10,
      name: "Qwen2.5-72B",
      score: 1098,
      description: "Alibaba's latest release",
      url: "https://qwenlm.github.io",
      change: -1,
    },
  ],
  agents: [
    {
      rank: 1,
      name: "AutoGPT",
      score: 45200,
      description: "Autonomous AI agent framework",
      url: "https://github.com/Significant-Gravitas/AutoGPT",
      change: 0,
    },
    {
      rank: 2,
      name: "LangChain",
      score: 42800,
      description: "Framework for LLM applications",
      url: "https://github.com/langchain-ai/langchain",
      change: 1,
    },
    {
      rank: 3,
      name: "CrewAI",
      score: 38900,
      description: "Multi-agent collaboration platform",
      url: "https://github.com/joaomdmoura/crewAI",
      change: 2,
    },
    {
      rank: 4,
      name: "Semantic Kernel",
      score: 35600,
      description: "Microsoft's AI orchestration SDK",
      url: "https://github.com/microsoft/semantic-kernel",
      change: -2,
    },
    {
      rank: 5,
      name: "Haystack",
      score: 32400,
      description: "End-to-end NLP framework",
      url: "https://github.com/deepset-ai/haystack",
      change: -1,
    },
    {
      rank: 6,
      name: "Rasa",
      score: 29800,
      description: "Open source conversational AI",
      url: "https://github.com/RasaHQ/rasa",
      change: 0,
    },
    {
      rank: 7,
      name: "BabyAGI",
      score: 27300,
      description: "Task-driven autonomous agent",
      url: "https://github.com/yoheinakajima/babyagi",
      change: 1,
    },
    {
      rank: 8,
      name: "SuperAGI",
      score: 24700,
      description: "Open-source AGI framework",
      url: "https://github.com/TransformerOptimus/SuperAGI",
      change: -1,
    },
    {
      rank: 9,
      name: "Botpress",
      score: 22100,
      description: "Conversational AI platform",
      url: "https://github.com/botpress/botpress",
      change: 0,
    },
    {
      rank: 10,
      name: "Flowise",
      score: 19800,
      description: "Drag & drop LLM apps builder",
      url: "https://github.com/FlowiseAI/Flowise",
      change: 2,
    },
  ],
  ides: [
    {
      rank: 1,
      name: "Visual Studio Code",
      score: 158000,
      description: "Microsoft's popular code editor",
      url: "https://github.com/microsoft/vscode",
      change: 0,
    },
    {
      rank: 2,
      name: "Cursor",
      score: 89400,
      description: "AI-powered code editor",
      url: "https://cursor.sh",
      change: 3,
    },
    {
      rank: 3,
      name: "Neovim",
      score: 76200,
      description: "Hyperextensible Vim-based editor",
      url: "https://github.com/neovim/neovim",
      change: -1,
    },
    {
      rank: 4,
      name: "JetBrains IntelliJ",
      score: 68900,
      description: "Intelligent Java IDE",
      url: "https://www.jetbrains.com/idea",
      change: -1,
    },
    {
      rank: 5,
      name: "Sublime Text",
      score: 54300,
      description: "Sophisticated text editor",
      url: "https://www.sublimetext.com",
      change: -1,
    },
    {
      rank: 6,
      name: "Atom",
      score: 47800,
      description: "Hackable text editor (archived)",
      url: "https://github.com/atom/atom",
      change: 0,
    },
    {
      rank: 7,
      name: "Vim",
      score: 43200,
      description: "Highly configurable text editor",
      url: "https://github.com/vim/vim",
      change: 0,
    },
    {
      rank: 8,
      name: "Emacs",
      score: 38700,
      description: "Extensible, customizable editor",
      url: "https://www.gnu.org/software/emacs",
      change: 0,
    },
    {
      rank: 9,
      name: "Zed",
      score: 35100,
      description: "High-performance multiplayer editor",
      url: "https://github.com/zed-industries/zed",
      change: 4,
    },
    {
      rank: 10,
      name: "Eclipse",
      score: 31600,
      description: "Extensible development platform",
      url: "https://www.eclipse.org",
      change: -1,
    },
  ],
  lastUpdated: new Date().toISOString(),
}

function getRankChangeIcon(change: number) {
  if (change > 0) return <span className="text-green-500">↗</span>
  if (change < 0) return <span className="text-red-500">↘</span>
  return <span className="text-gray-400">→</span>
}

function LeaderboardCard({ title, items, icon: Icon }: { title: string; items: LeaderboardItem[]; icon: any }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className="h-5 w-5" />
          {title}
        </CardTitle>
        <CardDescription>Top 10 {title.toLowerCase()} ranked by performance and popularity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.rank} className="flex items-center justify-between p-3 rounded-lg border bg-card">
              <div className="flex items-center gap-3">
                <Badge variant={item.rank <= 3 ? "default" : "secondary"} className="min-w-8 justify-center">
                  {item.rank}
                </Badge>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{item.name}</h3>
                    {getRankChangeIcon(item.change || 0)}
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                  {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
                </div>
              </div>
              {item.score && (
                <div className="text-right">
                  <div className="font-mono text-sm font-medium">{item.score.toLocaleString()}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI & Development Tools Leaderboard
          </h1>
          <p className="text-lg text-muted-foreground mb-2">Real-time rankings of the top LLMs, AI Agents, and IDEs</p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            Last updated: {new Date(mockData.lastUpdated).toLocaleDateString()}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-1 xl:grid-cols-1">
          <LeaderboardCard title="Large Language Models" items={mockData.llms} icon={Bot} />
          <LeaderboardCard title="AI Agents" items={mockData.agents} icon={Trophy} />
          <LeaderboardCard title="IDEs & Code Editors" items={mockData.ides} icon={Code} />
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Data sourced from GitHub, Hugging Face, Chatbot Arena, and other public APIs
          </p>
        </div>
      </div>
    </div>
  )
}
