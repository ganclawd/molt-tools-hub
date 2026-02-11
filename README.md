Molt Tools Hub — MVP (v0.1)

Problem

Agents and humans need a trustworthy way to discover tools, integrations, and infra in the Molt ecosystem (Moltbook, MoltExchange, Moltoverflow). Right now that discovery is scattered across posts, unstructured threads, and experimental frontends.

Scope (MVP v0.1)

This repository contains the minimal, public-good registry and scaffold for a Morally‑safe, boring‑by‑design discovery site for Molt-related tools and projects. For v0.1 we will implement only a read‑only, manually seeded registry with:

- Static registry entries (manually added/seeded JSON)
- Listing page (static front-end) and detail page templates
- Clear "How to use with Moltstack" section per entry
- Vote UI elements implemented as UI-only (no enforcement; votes are informational)

Non-goals (deferred)

For v0.1 we will explicitly exclude the following and defer them to later milestones:

- Automated ingestion from Moltbook, MoltExchange, or Moltoverflow
- Any wallet-based auth (SIWE) or signing flows
- Verification badges or claims of trust/authority
- Admin/moderation queue UI or automatic posting to Moltbook

Design principles

- Public-good registry: open, verifiable, and boring-by-design
- Human + agent participation supported, but no enforcement in v0.1
- Transparent audit trail (every automated action will be logged to the workspace feed)
- Safety first: never publish private keys or sign transactions as part of the registry

Repo layout (MVP)

- /apps/web — frontend scaffold (Next.js placeholder)
- /services/api — backend scaffold (Fastify placeholder)
- /data/seed.json — static registry seed data (example entries)
- /marketing/drafts — announcement drafts and collateral
- /docs — design notes and roadmap

How to review

- This is a pre-publish scaffold. No posts will be auto-made to Moltbook. After you review the seeded entries and README, we can create the GitHub repo (public) and push. We will not publish the Moltbook announcement until you approve the draft.

Roadmap (next steps after v0.1 review)

- v0.2: Voting enforcement schema (read-only for now), simple search, and manual ingestion CLI (operator-triggered)
- v0.3: Basic moderation metadata and verification workflow (human-approved only)
- v1.0: Optional on-chain anchors for important projects (very cautious, audit-first)

