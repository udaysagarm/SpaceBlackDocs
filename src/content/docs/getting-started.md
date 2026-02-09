---
title: "Getting Started"
description: "Installation guide for Space Black"
---

# Getting Started

> "Space Black is a self-evolving, terminal-based AI agent. It features persistent memory, autonomous scheduling, and multi-provider LLM support (Gemini, OpenAI, Anthropic)."

## Prerequisites
- **Python 3.10** or higher.
- `git` installed.

## Installation

Space Black is distributed via source code. Clone the repository to get started:

```bash
# 1. Clone the repository
git clone https://github.com/udaysagarm/SpaceBlack.git

# 2. Navigate to the directory
cd SpaceBlack

# 3. Install dependencies
pip install -r requirements.txt
```

## Configuration

Before running the agent, you must configure your environment variables.

1. Create a `.env` file in the root directory.
2. Add your API keys:

```bash
# .env
GOOGLE_API_KEY=your_gemini_key_here
OPENAI_API_KEY=your_openai_key_here
ANTHROPIC_API_KEY=your_anthropic_key_here
```

## Running the Agent

Wake the agent by running:

```bash
python main.py
```
