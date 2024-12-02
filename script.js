// Select the elements
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Responses from the bot
const botReplies = {
  hello: "Hi there! How’s your day going? 😊",
  love: "Aww, I love you too! ❤️",
  how: "I'm doing great! What about you? 🥰",
  miss: "I miss you too! Let's talk more. 💕",
  bye: "Goodbye, love! Talk to you soon. 💌",
  default: "I’m not sure what you mean, but I’m here for you! 💖"
};

// Function to add a chat bubble
function addChatBubble(text, sender) {
  const chatBubble = document.createElement('div');
  chatBubble.textContent = text;
  chatBubble.className = `chat ${sender}`;
  chatBox.appendChild(chatBubble);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
}

// Function to handle user message
function handleUserMessage() {
  const userMessage = userInput.value.trim();
  if (!userMessage) return; // Do nothing if input is empty

  // Add user's message to chat
  addChatBubble(userMessage, 'user');

  // Respond with a bot reply
  const botReply = botReplies[userMessage.toLowerCase()] || botReplies.default;
  setTimeout(() => addChatBubble(botReply, 'bot'), 500);

  // Clear the input field
  userInput.value = '';
}

// Add event listeners
sendButton.addEventListener('click', handleUserMessage);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleUserMessage();
});
