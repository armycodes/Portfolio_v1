import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "echoa",
    slug: "echoa",
    name: "Echoa",
    tagline: "An AI-powered visual music companion.",
    status: "live",
    technologies: ["React", "Node.js", "Spotify API", "Gemini AI"],
    overview:
      "Echoa listens to what you're playing and generates a living visual companion for it — translating tempo, mood, and lyrical themes into generative visuals in real time.",
    detail: {
      problem:
        "Music streaming is almost entirely audio-only. Listeners who wanted a visual, atmospheric layer to accompany a song had to rely on generic, non-reactive visualizers that ignore the actual content of the track.",
      architecture: [
        "React frontend polls the Spotify Web Playback SDK for the current track and playback position.",
        "A Node.js service enriches track metadata (tempo, key, energy, valence) via Spotify's audio-features endpoint.",
        "Enriched metadata is passed to Gemini to generate a short mood description, which drives a generative visual layer rendered on canvas.",
        "Visual state is cached per track so repeat plays don't re-trigger generation unnecessarily.",
      ],
      challenges: [
        "Keeping visuals in sync with playback position without over-polling the Spotify API and hitting rate limits.",
        "Making AI-generated mood descriptions consistent enough to drive a coherent visual style rather than a jarring one each time.",
      ],
      tradeoffs: [
        "Chose per-track caching over per-listen generation to control both cost and rate-limit exposure, at the expense of visual novelty on repeat plays.",
        "Kept the visual engine on canvas instead of WebGL for faster iteration, accepting a ceiling on visual complexity.",
      ],
      lessons: [
        "Designing around a third-party API's rate limits early saves a painful rewrite later.",
        "AI output needs a deterministic layer on top of it — raw model output is too inconsistent to drive a UI directly.",
      ],
    },
    github: "https://github.com/sirimahalaxmi/echoa",
    demo: "https://echoa.example.com",
  },
  {
    id: "datapulse",
    slug: "datapulse",
    name: "DataPulse",
    tagline: "A production-grade observability platform.",
    status: "live",
    technologies: ["FastAPI", "PostgreSQL", "React", "Gemini AI", "Docker"],
    overview:
      "DataPulse ingests metrics and logs from distributed services and surfaces anomalies through a dashboard and a conversational AI assistant that can answer questions about system health in plain language.",
    detail: {
      problem:
        "Small engineering teams often lack the headcount to build and maintain a full observability stack, and existing tools are either too expensive or too complex for a team that just wants to know: is something wrong, and why?",
      architecture: [
        "FastAPI ingestion service receives metrics and structured logs, writing time-series data to PostgreSQL.",
        "A background worker computes rolling baselines per service and flags statistically significant deviations.",
        "An AI chatbot layer translates flagged anomalies and raw queries into natural-language summaries, backed by Gemini.",
        "React dashboard renders live service health, with drill-down views per anomaly.",
      ],
      challenges: [
        "Defining an anomaly threshold that adapts to each service's normal variance instead of a single global threshold.",
        "Keeping the AI assistant's answers grounded in actual queried data rather than plausible-sounding hallucination.",
      ],
      tradeoffs: [
        "Chose rolling statistical baselines over a full ML anomaly-detection model — simpler to reason about and explain to users, at some cost to detection sensitivity.",
        "Constrained the AI assistant to only answer from retrieved query results, trading some conversational flexibility for reliability.",
      ],
      lessons: [
        "An observability tool that can't explain why it flagged something isn't trusted, even if it's technically correct.",
        "Grounding AI responses in real retrieved data is non-negotiable once the answers inform operational decisions.",
      ],
    },
    github: "https://github.com/sirimahalaxmi/datapulse",
  },
  {
    id: "justice-genie",
    slug: "justice-genie",
    name: "Justice Genie",
    tagline: "An AI legal assistant for plain-language legal questions.",
    status: "live",
    technologies: ["Python", "FastAPI", "Gemini AI", "NLP"],
    overview:
      "Justice Genie helps people understand legal documents and common legal questions in plain language, backed by a retrieval pipeline over verified legal reference material.",
    detail: {
      problem:
        "Legal language is dense and inaccessible to most people, and generic AI chat tools give confident-sounding but ungrounded answers to legal questions — a category of question where being wrong has real consequences.",
      architecture: [
        "Documents and reference material are chunked and embedded into a vector store.",
        "User questions are matched against relevant chunks via similarity search before being passed to Gemini alongside the retrieved context.",
        "FastAPI backend enforces that every answer cites the section of reference material it was grounded in.",
        "Responses include an explicit disclaimer layer distinguishing informational content from legal advice.",
      ],
      challenges: [
        "Balancing plain-language simplification against legal precision — oversimplifying can change the actual meaning of a clause.",
        "Designing a retrieval pipeline that surfaces the right section of a long document rather than a superficially similar one.",
      ],
      tradeoffs: [
        "Prioritized grounded, citation-backed answers over open-ended conversational breadth.",
        "Chose a smaller, curated reference corpus over broad web retrieval to keep answers verifiable.",
      ],
      lessons: [
        "In a high-stakes domain, a system that says 'I don't have enough information' is more valuable than one that always answers.",
        "Retrieval quality matters more than model quality once the domain demands precision.",
      ],
    },
    github: "https://github.com/sirimahalaxmi/justice-genie",
  },
  {
    id: "writer-workspace",
    slug: "writer-workspace",
    name: "Writer Workspace",
    tagline: "A focused writing environment for long-form technical writing.",
    status: "coming-soon",
    technologies: ["React", "TypeScript", "Node.js"],
    overview:
      "A distraction-free workspace built for drafting long-form technical writing, with structural tools for outlining and revision rather than generic word-processor features.",
  },
];
