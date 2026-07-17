# System Prompt Info

This folder contains information about how Janitor AI assembles its system prompt. This information was obtained by using a custom proxy connection to a locally-hosted LLM and inspecting the requests made by Janitor's backend. It's possible that they do something different for JLLM, or for the built-in connections to Anthropic or OpenAI.

Currently contains these pages:

- [prompt-format.md](prompt-format.md) describes the system prompt format presently used on janitorai.
- [multi-persona.md](multi-persona.md) describes the changes made to this prompt when a user changes personas mid-chat.
- [forbidden-words.md](forbidden-words.md) describes the way Janitor handles the "forbidden words or phrases" configuration option.
