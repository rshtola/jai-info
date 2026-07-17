# Forbidden words and phrases

If you add forbidden words and phrases, Janitor will add this to the *end* of the context, at the end of the final user-mode message:

```

SYSTEM NOTE: Do not include the following words/phrases in your output under any circumstances: "forbidden word or phrase one", "forbidden word or phrase two"
```

Note that no post-processing is done, if the model uses the words anyway (which some of them may, even with the system note in place), Janitor won't do anything about it. Because this is added to the end of the final user-mode message, it's usually a pretty privileged instruction for the model, so it will most often obey. However there is certainly no guarantee.
