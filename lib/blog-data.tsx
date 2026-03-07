export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  tags: string[]
  author: {
    name: string
    avatar: string
    role: string
  }
  featured: boolean
  color: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 2,
    slug: "ai-ad-copy-analysis",
    title: "Using AI to Analyze High-Converting Ad Copy",
    excerpt:
      "How AI models can evaluate marketing copy to identify persuasion patterns, emotional triggers, and clarity issues in advertising campaigns.",
    content: `
## Why Analyze Ad Copy?

Most advertising teams rely on intuition and A/B testing to improve copy.  
But AI models can now analyze thousands of ads and detect patterns that humans often miss.

## Key Signals AI Can Detect

Modern LLMs can evaluate:

- Emotional tone
- Persuasive language
- Clarity and readability
- Call-to-action strength
- Audience targeting cues

## Example Workflow

1. Collect ad copy samples
2. Send them to an LLM for analysis
3. Extract structured metrics
4. Score the ad effectiveness

\`\`\`typescript
const analysis = await openai.responses.create({
  model: "gpt-4.1",
  input: "Analyze this ad copy for persuasion and clarity..."
})
\`\`\`

## Conclusion

AI won't replace marketers—but it can dramatically speed up campaign optimization by surfacing patterns across large ad datasets.
    `,
    date: "Feb 12, 2026",
    readTime: "7 min read",
    category: "ai",
    tags: ["ai", "marketing", "analysis"],
    author: {
      name: "Maфия",
      avatar: "/developer-portrait.png",
      role: "Software Engineer",
    },
    featured: true,
    color: "from-purple-500/20 to-pink-500/20",
  },

  {
    id: 3,
    slug: "building-ai-marketing-dashboards",
    title: "Building AI-Powered Marketing Dashboards",
    excerpt:
      "Designing dashboards that turn AI-generated insights into clear, actionable marketing intelligence.",
    content: `
## The Problem with Analytics Tools

Many dashboards overwhelm users with charts but fail to answer real questions.

AI can help by transforming raw data into **insight summaries**.

## Architecture

Typical system architecture:

1. Data ingestion
2. AI analysis layer
3. Structured insight storage
4. Dashboard visualization

\`\`\`
Data → AI Analysis → Metrics DB → Dashboard
\`\`\`

## Dashboard Metrics

Useful metrics include:

- Brand citation frequency
- Prompt categories
- Competitor mentions
- Sentiment signals

## Conclusion

AI dashboards should focus on **clarity and decision-making**, not just data visualization.
    `,
    date: "Jan 25, 2026",
    readTime: "9 min read",
    category: "ai",
    tags: ["dashboard", "analytics", "ai"],
    author: {
      name: "Maфия",
      avatar: "/developer-portrait.png",
      role: "Software Engineer",
    },
    featured: true,
    color: "from-primary/20 to-emerald-500/20",
  },

  {
    id: 4,
    slug: "video-ad-analysis-pipeline",
    title: "Building a Video Ad Analysis Pipeline",
    excerpt:
      "How to extract frames from video ads and analyze visuals, branding presence, and creative patterns using AI.",
    content: `
## Why Analyze Video Ads?

Video advertising is one of the most effective marketing formats—but it's difficult to analyze at scale.

AI can automate the process.

## Step 1: Extract Frames

We can extract frames every second:

\`\`\`python
import cv2

cap = cv2.VideoCapture("ad.mp4")

fps = cap.get(cv2.CAP_PROP_FPS)
frame_interval = int(fps)

while cap.isOpened():
    ret, frame = cap.read()
\`\`\`

## Step 2: Analyze Frames with AI

Each frame can be analyzed for:

- Brand visibility
- Text overlays
- Visual hierarchy
- Emotional cues

## Step 3: Aggregate Insights

Combine frame insights into a final report.

## Conclusion

Video analysis pipelines make it possible to understand thousands of ad creatives automatically.
    `,
    date: "Dec 15, 2025",
    readTime: "10 min read",
    category: "ai",
    tags: ["video", "ai", "opencv"],
    author: {
      name: "Maфия",
      avatar: "/developer-portrait.png",
      role: "Software Engineer",
    },
    featured: false,
    color: "from-orange-500/20 to-amber-500/20",
  },

  {
    id: 5,
    slug: "ai-brand-monitoring",
    title: "Monitoring Brand Mentions with AI",
    excerpt:
      "How AI systems can track brand mentions across search engines, ads, and AI assistants to measure digital visibility.",
    content: `
## Why Brand Monitoring Matters

Companies want to know **how often they appear in search results, ads, and AI responses.**

AI tools make this possible.

## Key Metrics

Important signals include:

- Brand citation rate
- Direct vs indirect mentions
- Competitor comparisons

## Example Analysis

\`\`\`json
{
  "brand": "ExampleCo",
  "mentions": 42,
  "competitor_mentions": 18,
  "sentiment": "positive"
}
\`\`\`

## Visualization

A dashboard can display:

- Citation charts
- Prompt category insights
- Source breakdowns

## Conclusion

Brand monitoring tools are becoming essential as AI platforms increasingly influence discovery.
    `,
    date: "Nov 28, 2025",
    readTime: "8 min read",
    category: "ai",
    tags: ["brand", "analytics", "ai"],
    author: {
      name: "Maфия",
      avatar: "/developer-portrait.png",
      role: "Software Engineer",
    },
    featured: false,
    color: "from-cyan-500/20 to-blue-500/20",
  },

  {
    id: 6,
    slug: "designing-modern-saas-tools",
    title: "Designing Modern SaaS Tools with AI Features",
    excerpt:
      "How modern SaaS products integrate AI capabilities into their workflows while maintaining simple and intuitive UX.",
    content: `
## The Shift in SaaS

AI is no longer a separate feature—it's becoming part of the core product experience.

## Key Design Principles

1. AI should enhance workflows, not replace them
2. Insights should be easy to understand
3. Users must maintain control

## Example UX Pattern

Instead of raw AI outputs:

❌ Long text explanations

Use:

✔ Structured insights  
✔ Scores  
✔ Recommendations  

## Example Output

\`\`\`
Ad Score: 84/100
Clarity: High
Emotion: Medium
CTA Strength: Strong
\`\`\`

## Conclusion

The best AI SaaS tools feel **simple and human-centered**, even though powerful models operate behind the scenes.
    `,
    date: "Oct 20, 2025",
    readTime: "6 min read",
    category: "frontend",
    tags: ["saas", "ux", "ai"],
    author: {
      name: "Maфия",
      avatar: "/developer-portrait.png",
      role: "Software Engineer",
    },
    featured: false,
    color: "from-indigo-500/20 to-purple-500/20",
  },

  {
    id: 7,
    slug: "future-of-ai-marketing-tools",
    title: "The Future of AI-Powered Marketing Tools",
    excerpt:
      "Exploring how AI is transforming marketing research, campaign optimization, and creative analysis.",
    content: `
## The New Marketing Stack

AI is changing how marketers build and optimize campaigns.

Future marketing tools will include:

- Automated ad analysis
- Predictive campaign insights
- Real-time optimization

## AI Capabilities

AI models can already:

- Evaluate ad creatives
- Predict engagement
- Generate variations
- Analyze competitor ads

## The Next Step

We are moving toward **autonomous marketing systems** where AI continuously improves campaigns.

## Conclusion

Marketing tools are evolving from simple analytics platforms into **intelligent decision systems** powered by AI.
    `,
    date: "Sep 5, 2025",
    readTime: "8 min read",
    category: "ai",
    tags: ["ai", "marketing", "future"],
    author: {
      name: "Maфия",
      avatar: "/developer-portrait.png",
      role: "Software Engineer",
    },
    featured: true,
    color: "from-indigo-500/20 to-blue-500/20",
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug)
  if (!currentPost) return []

  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .filter((post) => post.category === currentPost.category || post.tags.some((tag) => currentPost.tags.includes(tag)))
    .slice(0, limit)
}
