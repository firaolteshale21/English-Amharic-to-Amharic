// server/utils/translation.js

const englishToAmharic = {
  a: "አ",
  b: "በ",
  c: "ቸ",
  hu: "ሁ",
  hi: "ሂ",
  ga: "ጋ",
  // Add all necessary mappings
};

const translateText = (text) => {
  let translatedText = "";
  let i = 0;

  while (i < text.length) {
    // Check if there is a pair of letters that match
    if (i + 1 < text.length && englishToAmharic[text.slice(i, i + 2)]) {
      translatedText += englishToAmharic[text.slice(i, i + 2)];
      i += 2;
    } else if (englishToAmharic[text[i]]) {
      translatedText += englishToAmharic[text[i]];
      i += 1;
    } else {
      translatedText += text[i];
      i += 1;
    }
  }

  return translatedText;
};

module.exports = { translateText };
