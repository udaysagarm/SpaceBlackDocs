# Memory System

Space Black uses a file-based memory architecture to ensure transparency, portability, and privacy. All memory logs and identity files are stored in the `brain/` directory.

## Core Files

### SOUL.md (`brain/SOUL.md`)
Defines the agent's personality, core instructions, and existential directives. This is effectively the "System Prompt" loaded at the start of every conversation. The agent can evolve this file over time using the `reflect_and_evolve` tool.

### USER.md (`brain/USER.md`)
Contains structured information about you, the user.
-   Name
-   Preferences
-   Tech Stack
-   Communication Style

The agent updates this file autonomously as it learns more about you.

### AGENTS.md (`brain/AGENTS.md`)
Stores high-level system rules and the "Constitution" that governs the agent's behavior. This file is generally static and manually edited by the user to set hard boundaries.

## Logs (`brain/memory/`)
Daily conversation logs are stored in `brain/memory/YYYY-MM-DD.md`.
-   **Format**: Markdown.
-   **Retention**: Infinite by default. You can manually delete old files to reset context.
-   **Context Loading**: The agent reads recent logs to maintain conversational continuity.

## Scheduler (`brain/SCHEDULE.json`)
A JSON file containing the queue of pending tasks.
-   **Structure**: List of objects with `task` and `time` keys.
-   **Process**: The system checks this file every minute. Executed tasks are removed automatically.
