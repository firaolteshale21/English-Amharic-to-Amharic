// server/utils/translation.js
const englishToAmharic = {
  a: "አ",
  b: "ብ",
  c: "ች",
  d: "ድ",
  e: "እ",
  f: "ፍ",
  g: "ግ",
  h: "ሕ",
  i: "ኢ",
  j: "ጅ",
  k: "ክ",
  l: "ል",
  m: "ም",
  n: "ን",
  o: "ኦ",
  p: "ፕ",
  q: "ቅ",
  r: "ር",
  s: "ስ",
  t: "ት",
  u: "ኡ",
  v: "ቭ",
  w: "ዉ",
  x: "ክስ",
  y: "ይ",
  z: "ዝ",
  // TODO Add multi-letter combinations
 
};

const translateText = (text) => {
  let translatedText = "";
  for (let char of text) {
    translatedText += englishToAmharic[char] || char;
  }
  return translatedText;
};

module.exports = { translateText };
