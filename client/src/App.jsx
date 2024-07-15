import { useState, useEffect } from "react";
import axios from "axios";
import TextBox from "./components/TextBox";
import AmharicDisplay from "./components/AmharicDisplay";
import "./App.css";

const App = () => {
  const [englishText, setEnglishText] = useState("");
  const [amharicText, setAmharicText] = useState("");

  useEffect(() => {
    const translate = async () => {
      if (englishText) {
        const response = await axios.post("http://localhost:5000/translate", {
          text: englishText,
        });
        setAmharicText(response.data.translatedText);
      } else {
        setAmharicText("");
      }
    };
    translate();
  }, [englishText]);

  return (
    <div className="app-container">
      <header>
        <h1>English Letters to Amharic</h1>
      </header>
      <main>
        <TextBox onChange={setEnglishText} />
        <AmharicDisplay text={amharicText} />
      </main>
    </div>
  );
};

export default App;
