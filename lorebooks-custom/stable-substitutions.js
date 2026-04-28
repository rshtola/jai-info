const original_personality = context.character.personality || ""

// context.chat.profiles[0].name will always be the name of the *first*
// profile used by the user to actually send a message, even if they change 
// profiles later.
const roommate = context.chat.profiles[0].name

// only available IF the current user has switched, can be null if it has always
// been the same persona
const current_user = context.chat.persona_name 

context.character.personality = original_personality.replace(/{{roommate}}/g, roommate).replace(/{{current_user}}/g,current_user)
