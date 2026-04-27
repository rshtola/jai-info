# System Prompt Formatting

This page documents the system prompt formatting observed in use by janitorai when using a proxy as of April 2026. It's possible that this will change without notice or warning, as this is generally considered an internal implementation detail.

# The system prompt

The system prompt, on janitorai (and most other similar roleplaying platforms) will contain a number of things:

- The custom user prompt
- The character definition
- Lorebook or world entries (if there are any)
- The chat summary

The order of things is relevant because of something that I call the "lost middle" effect. Essentially, when presented with many instructions, especially instructions that conflict, LLMs try to prioritize the ones given first (because the model's training data contains many examples of texts where important things are said first) and the ones given last (because they are the most "recent" things fed into the model).

## The system prompt format

The format, derived from inspecting requests made by janitorai, is as follows:

```
%%CUSTOMPROMPT%%
<%%CHARNAME%%'s Persona>%%CHARACTERPERSONA%%</%%CHARNAME%%'s Persona>
<Scenario>%%SCENARIO%%</Scenario>
<UserPersona>%%USERPERSONA%%</UserPersona>
<example_dialogs>%%DIALOGUES%%</example_dialogs>
<summary>%%SUMMARY%%</summary>
%%LOREBOOKENTRIES%%
```

Anything between double-percent signs (`%%`) is replaced by the actual provided text, but note that the html-like tags are literal (e.g. the prompt will actually contain `<summary>` at that point). (Yes the inconsistency in casing and format for the faux-html tags is that way in the site, I don't know why some things are CamelCase, others are snake_case, and still others use Title Case with spaces, nor why Scenario is capitalized but summary is not.)

Sections that are left blank are omitted entirely, so if you don't put anything in the `scenario` in your character definition (for example), that section will be omitted.

The `%%LOREBOOKENTRIES%%` shown here is the default location; it's possible to configure lorebook entries to be elsewhere, earlier in the prompt, if you wish. This is controlled in the lorebook editor.

Of these sections, three are controlled by the user:
- The custom prompt (which is first, and therefore has the most primacy)
- The user persona
- The chat summary

The other sections are controlled by the bot creator:
- The scenario
- The character persona
- The example dialogues
- The currently active lorebook entries

In other words, this means that the user has control of the "first-instruction" prioritized instructions, but the bot creator has control of the "recent-instruction" prioritized instructions (via lorebooks). I speculate that this is why some creators have had greater success including parts of the character definition in lorebooks, rather than in the normal definition.

### A note on tags

The faux-HTML tags are a technique recommended by LLM developers to organize information and encapsulate it for the LLM. Janitorai puts tags around the character definition, scenario, example dialogues, user persona, and chat summary, but it notably does *not* put any tags around the lorebook entries or the user's custom prompt. You can add tags to your lorebook entries if you would like, it might help to keep the LLM on-task, but I haven't experimented with that much. I personally tend to just write lorebook entries in `Label: Description goes here` format, so that they are fairly self-contained without needing the extra tokens brought in by HTML-like tags.
