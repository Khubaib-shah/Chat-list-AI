import { useState } from "react";
import "./App.css";
import ChatBotApp from "./components/ChatBotApp";
import ChatBotStart from "./components/ChatBotStart";

function App() {
  const [isChatting, setIsChatting] = useState(false);
  const [chats, setChats] = useState([]);

  const handleStartChatting = () => {
    setIsChatting(true);

    // console.log(
    //   new Date().toLocaleDateString("en-GB"),
    //   new Date().toLocaleTimeString()
    // );
    const newChat = {
      id: `chat ${new Date().toLocaleDateString(
        "en-GB"
      )} ${new Date().toLocaleTimeString()}`,
      messages: [],
    };
    setChats([newChat]);
  };
  const handleGoBack = () => {
    setIsChatting(false);
  };
  return (
    <>
      <div className="container">
        {isChatting ? (
          <ChatBotApp
            onGoBack={handleGoBack}
            chats={chats}
            setChats={setChats}
          />
        ) : (
          <ChatBotStart onStartChat={handleStartChatting} />
        )}
      </div>
    </>
  );
}

export default App;
