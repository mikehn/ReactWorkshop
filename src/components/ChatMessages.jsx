export default function ChatMessages({ messages }) {
  return (
    <div className="chat-messages">
      {messages &&
        messages.map((message) => (
          <Message from={message.user} time={message.time}>
            {message.content}
          </Message>
        ))}
    </div>
  );
}

function Message({ from, time, children }) {
  return (
    <div class="message-container">
      <div class="message-from">{from}</div>
      <div class="message-content">{children}</div>
      <div class="message-time">{time}</div>
    </div>
  );
}
