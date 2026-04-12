# Multi-persona chats

When a user switches to a second persona in a chat, the user persona definition section of the system prompt is updated like so:

```
<MultiPersona>The user switches between multiple personas in this conversation: Example persona 1, Example persona 2. Each user message is prefixed with the active persona's name. Treat each persona as a distinct identity with their own appearance and personality.</MultiPersona>
<UserPersona name=\"Example persona 1\">The definition of the first persona</UserPersona>
<UserPersona name=\"Example persona 2\">The definition of the second persona</UserPersona>
```

The list of personas will include any persona who has a message in the chat. If you send a message as a persona, and then later delete that message, and send a new message as a different persona, that deleted persona will not be included (unless they have another message earlier in the history, etc.)

Notably, once the chat is set to "multi-persona" mode, it stays that way even if you delete all messages from other personas and go back to the first one you were using.

It's also worth noting that the `user`-role messages preface each message with the name of the persona active at the time it was sent, like so:

```
{
    "content": "Example persona 1: Example content",
    "role": "user"
}
```

Note that this behavior (prefacing the content with the persona name) is the case *always*, even if the chat is not in multi-persona mode.
