import { useState } from "react";
import "./App.css";
import ChatBotApp from "./components/ChatBotApp";
import ChatBotStart from "./components/ChatBotStart";

function App() {
  const [isChatting, setIsChatting] = useState(false);
  const handleStartChatting = () => {
    setIsChatting(true);
  };
  const handleGoBack = () => {
    setIsChatting(false);
  };
  return (
    <>
      <div className="container">
        {isChatting ? (
          <ChatBotApp onGoBack={handleGoBack} />
        ) : (
          <ChatBotStart onStartChat={handleStartChatting} />
        )}
      </div>
    </>
  );
}

export default App;
