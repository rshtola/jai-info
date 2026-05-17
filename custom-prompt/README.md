# Custom prompts

These are the custom prompts that I use with various models. None of these are completely originally mine, but all have been modified. I owe a lot to [Elise's work](https://elises-aps.gitbook.io/elises-aps-docs). My prompts are provided here solely for your reference.

- [deepseek-v3.md](deepseek-v3.md) - my deepseek v3 prompt, focusing on encouraging it to maintain consistency with character definitions, while remaining low-token.
- [deepseek-v4-pro.md](deepseek-v4-pro.md) - my modification of that prompt for deepseek v4 pro, adding a section to turn off [in-character thinking](https://github.com/victorchen96/deepseek_v4_rolepaly_instruct/blob/main/README_EN.md)
- [modified-elise-glm.md](modified-elise-glm.md) - a modified version of Elise's GLM prompt. Modifications exist primarily to tailor it to my preferred style of writing and pacing.

# Reminder prompts

Some recent models, such as DS v4, GLM 5.x, and Kimi K2.x, respond better to recent reminders than they do to the system prompt. Accordingly, I've begun adding part of my custom prompt as a reminder to the *end* of the chat history, instead of having it all in the system prompt (at the beginning). 

- [kimi-k2-gcot.md](kimi-k2-gcot.md) - A modified version of Elise's Guided Chain-of-thought prompt, fine-tuned for Kimi K2.5. The primary modifications here are a slight tweak to the NPC instructions (I like my LLM to be a bit more willing to play as NPCs than Elise does), and an addition to moderate K2.5's extreme aggression. I also have some additions at the end which use [Sophia's Lorebrary](https://lorebary.com/) to automate the injection (since jai doesn't support it natively).
- [kimi-k2-gcot-reminder.md](kimi-k2-gcot-reminder.md) - If you're on a platform that supports it (like SillyTavern, for example), instead of relying on the lorebrary you can just use this reminder prompt, injected at the end of chat history. If you do this, remove the Lorebrary instructions (`<SHOWTHINKING><PLUGIN=DAZQMK57>`) from the end of modified-elise-gcot.md, if using it as system prompt.
