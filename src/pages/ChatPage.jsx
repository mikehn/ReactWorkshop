import React, { useState } from "react";
import ChatList from "../components/ChatList";
import { Search } from "../components/Input";
import ChatHeader from "../components/Header";
import ChatMessages from "../components/ChatMessages";
import ChatBoardHeader from "../components/ChatBoardHeader";
import ChatInput from "../components/ChatInput";

const CHAT_GROUP_LIST = [
  { id: "11", name: "Michael Hasin", lastSeen: 1618224765444 },
  { id: "12", name: "Nir Parisian", lastSeen: 1612130400000 },
  { id: "13", name: "Cohen Family", lastSeen: 1620778800000 },
  { id: "23", name: "Amzaleg Family", lastSeen: new Date().getTime() },
];

function useSearchResults(defaultIds) {
  const [activeChatIds, setActiveChatIds] = useState(defaultIds);

  let onSearchChange = (searchText) => {
    let filteredChats = [];
    if (!searchText) filteredChats = CHAT_GROUP_LIST;
    else
      filteredChats = CHAT_GROUP_LIST.filter(({ name }) =>
        name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
      );
    setActiveChatIds(filteredChats.map(({ id }) => id));
  };
  return [activeChatIds, onSearchChange];
}

export default function ChatPage() {
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [serachIds, onSearchChange] = useSearchResults(
    CHAT_GROUP_LIST.map(({ id }) => id)
  );
  return (
    <div className="main-content-pane">
      <section className="chat-list-section">
        <ChatHeader />
        <Search onChange={(e) => onSearchChange(e.target.value)} />
        <ChatList
          chatGroup={CHAT_GROUP_LIST.filter(({ id }) => serachIds.includes(id))}
          onRowClick={setSelectedRowId}
          selected={selectedRowId}
        />
      </section>

      <section className="chat-board-section">
        <ChatBoardHeader
          title="person/group name"
          subtitle="last seen/members"
        />
        <ChatMessages />
        <ChatInput />
      </section>
    </div>
  );
}
