// server/server.js
const express = require("express");
const cors = require("cors");
const { translateText } = require("./utils/translation");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post("/translate", (req, res) => {
  const { text } = req.body;
  const translatedText = translateText(text);
  res.json({ translatedText });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
