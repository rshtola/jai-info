# Custom prompts

These are the custom prompts that I use with various models. None of these are completely originally mine, but all have been modified. I owe a lot to [Elise's work](https://elises-aps.gitbook.io/elises-aps-docs). My prompts are provided here solely for your reference.

- [kimi-k2-gcot.md](kimi-k2-gcot.md) - A modified version of Elise's Guided Chain-of-thought prompt, fine-tuned for Kimi K2.5. Significantly reworks the guided chain-of-thought to enhance adherence to the character definition, while also allowing the character to grow and change throughout the story. The definition adherence in this prompt is quite strong, so you may need to be more aggressive in your prompting to get character evolution than with other models.
- [modified-elise-glm.md](modified-elise-glm.md) - a modified version of Elise's GLM 4.7 prompt. Modifications exist primarily to tailor it to my preferred style of writing and pacing.
- [deepseek-v4-pro.md](deepseek-v4-pro.md) - my modification of that prompt for deepseek v4 pro, adding a section to turn off [in-character thinking](https://github.com/victorchen96/deepseek_v4_rolepaly_instruct/blob/main/README_EN.md)
- [deepseek-v3.md](deepseek-v3.md) - my deepseek v3 prompt, focusing on encouraging it to maintain consistency with character definitions, while remaining low-token.


# Reminder prompts

Some recent models, such as DS v4, GLM 5.x, and Kimi K2.x, respond better to recent reminders than they do to the system prompt. Accordingly, I've begun adding part of my custom prompt as a reminder to the *end* of the chat history, instead of having it all in the system prompt (at the beginning). On janitor, you can do this by using the [Lorebary](https://lorebary.com/) as an intermediary proxy, and then adding these to your custom prompt:

```
<SHOWTHINKING><PLUGIN=DAZQMK57><OOCINJECTIONOFF>
```

Note that the Lorebary will also do some *additional* prompt injection that can't be turned off, so I recommend only doing this if you have to.

- [depth-0-reminder.md](depth-0-reminder.md) - If you're on a platform that supports it (like SillyTavern, for example), instead of relying on the lorebary you can just use this reminder prompt, injected at the end of chat history.
