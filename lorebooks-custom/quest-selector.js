/**
 * Quest Randomizer
 *
 * A custom lorebook to assign a (persistent) quest based on persona ID.
 */

function get_template(char, user) {
  // This is where you put the instruction that contextualizes the quest.
  return `The below quest definition is the secret quest given by ${char}. ${char} will try to carry out the quest, with ${user}'s help.`
}

// Put your quests here, as many as you like.
const quests = [
  "Example quest 1",
  "Example quest 2",
  "Example quest 3"
]


// -----------------------------------------------
// You shouldn't need to touch anything below here
// -----------------------------------------------

// helper function to convert a string to an int.
// using this in case they fuck with the ID format and we can't rely on it being a hex number
function hashStringToUnsignedInt(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
    }
    return hash >>> 0; // unsigned 32-bit integer
}

// verify we have access to the bits of the context we need, with
// sensible fallbacks. Please don't mess with these.
const char = context.character.chat_name || "{char}"
const user = context.chat.persona_name || "{user}"
// We use the profile ID of the first profile because context.chat.conversation_id doesn't actually exist. If it did, we'd use that.
const current_id = hashStringToUnsignedInt(context.chat.profiles[0].id) || 0

// Log some useful info.
  console.log(`Initial persona ${context.chat.profiles[0].name} has id ${context.chat.profiles[0].id}, which hashes to ${current_id}`)

// We take the unique ID of the first character (the only thing I'm certain)
// won't change over the course of a long chat, and use it to select a quest
// from the list. That quest is appended to the end of the scenario
context.character.scenario += `\n${get_template(char, user)}\n<Quest>${quests[current_id % quests.length]}</Quest>\n`
