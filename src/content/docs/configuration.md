# Configuration

Space Black is highly configurable via `config.yaml` or environment variables.

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `SPACEBLACK_API_KEY` | Your semantic core API key | - |
| `SPACEBLACK_THEME` | Terminal theme (dark/light) | dark |
| `SPACEBLACK_MEMORY_PATH` | Path to persistent memory | `~/.spaceblack/memory` |

## Config File

```yaml
core:
  name: "Space Black"
  personality: "adaptive"

plugins:
  - name: "web-search"
    enabled: true
  - name: "code-interpreter"
    enabled: true
```
