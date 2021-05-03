import { useState } from "react";

export default function ChatInput({ onMessageSent }) {
  const [msgInput, setMsgInput] = useState();

  const onInputChange = (event) => {
    setMsgInput(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };
  const sendMessage = () => {
    if (!msgInput) {
      return;
    }

    const date = new Date();
    const minutes = date.getMinutes() < 10 ? "0" : "" + date.getMinutes();

    onMessageSent({
      content: msgInput,
      time: `${date.getHours()} : ${minutes}`
    });
    setMsgInput("");
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        onChange={onInputChange}
        value={msgInput}
        onKeyPress={handleKeyPress}
      ></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
