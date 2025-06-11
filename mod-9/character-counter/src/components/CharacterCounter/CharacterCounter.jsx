import { useState } from "react";
import StatsDisplay from "../StatsDisplay/StatsDisplay";
import TextInput from "../TextInput/TextInput";

function CharacterCounter() {
  // State variables for the input text
  const [text, setText] = useState("");

  // State variable for the stats object
  const [stats, setStats] = useState({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
  });

  // Handle the text change from the input
  const handleTextChange = (newText) => {
    setText(newText);
    setStats((prevStats) => {
      return {
        ...prevStats,
        characterCount: newText.length,
      };
    });
  };

  return (
    <div>
      <h1>Character Counter</h1>

      <TextInput onTextChange={handleTextChange} />
      <StatsDisplay stats={stats} />
    </div>
  );
}

export default CharacterCounter;
