// server/utils/translation.js
const englishToAmharic = {
  a: "አ",
  b: "በ",
  c: "ቸ",
  // Add all necessary mappings
};

const translateText = (text) => {
  let translatedText = "";
  for (let char of text) {
    translatedText += englishToAmharic[char] || char;
  }
  return translatedText;
};

module.exports = { translateText };
