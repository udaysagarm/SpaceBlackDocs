# Heartbeat

The **Heartbeat** mechanism ensures the agent remains active and responsive to scheduled events.

## Cron Jobs

You can schedule tasks using natural language:

> "Check my emails every morning at 9 AM."

This registers a heartbeat event.

## System status

The heartbeat runs as a background daemon:
`spaceblack-d` systemd service.
