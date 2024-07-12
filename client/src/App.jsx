
import { useState, useEffect } from "react";
import axios from "axios";
import TextBox from "./components/TextBox";
import AmharicDisplay from "./components/AmharicDisplay";

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
    <div>
      <TextBox onChange={setEnglishText} />
      <AmharicDisplay text={amharicText} />
    </div>
  );
};

export default App;
