# The Memory

Space Black utilizes a vector-based persistent memory system to recall past interactions and learn from user behavior.

## Memory Types

1. **Short-term**: Context window of the current session.
2. **Long-term**: Vector database (ChromaDB) for archival storage.
3. **Episodic**: Key events and milestones.

## Usage

```python
agent.remember("User prefers Python over JavaScript")
```
