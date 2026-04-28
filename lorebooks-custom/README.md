# Custom Lorebooks

These are custom scripts meant to be used on janitorai. They should be compatible as of their addition date, but changes to jai's functionality might break them.

- [quest-selector.js](quest-selector.js): A script that adds a prompt to the scenario based deterministically on the user's first persona ID (e.g. the persona used to start the chat). Intended to be used to give a quest that persists throughout the chat, but is different between different RPs.
- [stable-substitutions.js](stable-substitutions.js): A script which enables stable substitutions for macros in character personalities. This is useful if you want something like `{{user}}` that does not change when the user switches personas in a multi-persona chat. For example, if you want the user persona to be the character's roommate, this will enable them to swap to new personas as they wish to introduce new characters to the story without the bot getting confused about who the roommate is.
