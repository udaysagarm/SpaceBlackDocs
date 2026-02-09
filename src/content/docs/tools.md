# Tools

Space Black can be extended with custom tools.

## Built-in Tools

- **File System**: Read/Write files.
- **Terminal**: Execute shell commands.
- **Browser**: Visit websites.

## Creating a Tool

Tools are Python functions decorated with `@tool`:

```python
@tool
def calculate_pi(precision: int):
    """Calculates PI to n decimal places."""
    return ...
```
