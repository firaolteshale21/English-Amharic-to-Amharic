// server/utils/translation.js

const englishToAmharic = {
  a: "አ",
  b: "በ",
  c: "ቸ",
  d: "ደ",
  e: "እ",
  f: "ፈ",
  g: "ገ",
  h: "ሀ",
  i: "ኢ",
  j: "ጀ",
  k: "ከ",
  l: "ለ",
  m: "መ",
  n: "ነ",
  o: "ኦ",
  p: "ፐ",
  q: "ቀ",
  r: "ረ",
  s: "ሰ",
  t: "ተ",
  u: "ኡ",
  v: "ቨ",
  w: "ወ",
  x: "ኸ",
  y: "የ",
  z: "ዘ",
  hu: "ሁ",
  hi: "ሂ",
  ha: "ሃ",
  he: "ሄ",
  ho: "ሆ",
  ga: "ጋ",
  ge: "ጌ",
  go: "ጎ",
  gi: "ጊ",
  gu: "ጉ",
  ka: "ካ",
  ke: "ኬ",
  ki: "ኪ",
  ko: "ኮ",
  ku: "ኩ",
  la: "ላ",
  le: "ሌ",
  li: "ሊ",
  lo: "ሎ",
  lu: "ሉ",
  ma: "ማ",
  me: "ሜ",
  mi: "ሚ",
  mo: "ሞ",
  mu: "ሙ",
  na: "ና",
  ne: "ኔ",
  ni: "ኒ",
  no: "ኖ",
  nu: "ኑ",
  pa: "ፓ",
  pe: "ፔ",
  pi: "ፒ",
  po: "ፖ",
  pu: "ፑ",
  ra: "ራ",
  re: "ሬ",
  ri: "ሪ",
  ro: "ሮ",
  ru: "ሩ",
  sa: "ሳ",
  se: "ሴ",
  si: "ሲ",
  so: "ሶ",
  su: "ሱ",
  ta: "ታ",
  te: "ቴ",
  ti: "ቲ",
  to: "ቶ",
  tu: "ቱ",
  wa: "ዋ",
  we: "ዌ",
  wi: "ዊ",
  wo: "ዎ",
  wu: "ዉ",
  ya: "ያ",
  ye: "ዬ",
  yi: "ዪ",
  yo: "ዮ",
  yu: "ዩ",
  za: "ዛ",
  ze: "ዜ",
  zi: "ዚ",
  zo: "ዞ",
  zu: "ዙ",
  sha: "ሻ",
  she: "ሼ",
  shi: "ሺ",
  sho: "ሾ",
  shu: "ሹ",
  tsa: "ፃ",
  tse: "ፄ",
  tsi: "ፅ",
  tso: "ፆ",
  tsu: "ፅ",
  cha: "ቻ",
  che: "ቼ",
  chi: "ቺ",
  cho: "ቾ",
  chu: "ቹ",
  // Add any other necessary mappings
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
