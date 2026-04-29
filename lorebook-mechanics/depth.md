# Lorebook depth

Depth is the parameter on lorebook entries that controls how far back in the chat history the script will look when searching for activation keywords/conditions. Per the UI, the maximum depth is 10.

- Depth counts both user and bot messages. So a depth of 10 include the most recent ten messages, *regardless of who sent them*. Normally this will mean five user messages and five bot messages.
- The UI enforces the limit of 10, and so does the backend. While you can go into json edit and set the value to something higher than 10, it isn't respected.
- You can also go into the json and set it to a negative number if you want, that just means that the lorebook entry will never activate.
