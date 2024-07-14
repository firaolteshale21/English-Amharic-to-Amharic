// server/utils/translation.js

const englishToAmharic = {
  ha: "ሀ",
  hu: "ሁ",
  hi: "ሂ",
  ha2: "ሃ",
  he: "ሄ",
  h: "ህ",
  ho: "ሆ",

  la: "ለ",
  lu: "ሉ",
  li: "ሊ",
  la2: "ላ",
  le: "ሌ",
  l: "ል",
  lo: "ሎ",

  ma: "መ",
  mu: "ሙ",
  mi: "ሚ",
  ma2: "ማ",
  me: "ሜ",
  m: "ም",
  mo: "ሞ",

 
SA: "ሠ",
SU: "ሡ",
SI: "ሢ",
SAA: "ሣ",
SE: "ሤ",
S: "ሥ",
SO: "ሦ",

  ra: "ረ",
  ru: "ሩ",
  ri: "ሪ",
  ra2: "ራ",
  re: "ሬ",
  r: "ር",
  ro: "ሮ",

  sha: "ሸ",
  shu: "ሹ",
  shi: "ሺ",
  sha: "ሻ",
  she: "ሼ",
  sh: "ሽ",
  sho: "ሾ",

  qa: "ቀ",
  qu: "ቁ",
  qi: "ቂ",
  qa2: "ቃ",
  qe: "ቄ",
  q: "ቅ",
  qo: "ቆ",

  ba: "በ",
  bu: "ቡ",
  bi: "ቢ",
  ba2: "ባ",
  be: "ቤ",
  b: "ብ",
  bo: "ቦ",

  ta: "ተ",
  tu: "ቱ",
  ti: "ቲ",
  ta2: "ታ",
  te: "ቴ",
  t: "ት",
  to: "ቶ",

  cha: "ቸ",
  chu: "ቹ",
  chi: "ቺ",
  cha2: "ቻ",
  che: "ቼ",
  ch: "ች",
  cho: "ቾ",

  // TODO: Make capital or find another mapping
  ha: "ኀ",
  hu: "ኁ",
  hi: "ኂ",
  ha2: "ኃ",
  he: "ኄ",
  h: "ኅ",
  ho: "ኆ",

  na: "ነ",
  nu: "ኑ",
  ni: "ኒ",
  na2: "ና",
  ne: "ኔ",
  n: "ን",
  no: "ኖ",

  nya: "ኘ",
  nyu: "ኙ",
  nyi: "ኚ",
  nya2: "ኛ",
  nye: "ኜ",
  ny: "ኝ",
  nyo: "ኞ",

  a: "አ",
  u: "ኡ",
  i: "ኢ",
  aa: "ኣ",
  ie: "ኤ",
  e: "እ",
  o: "ኦ",

  ka: "ከ",
  ku: "ኩ",
  ki: "ኪ",
  ka2: "ካ",
  ke: "ኬ",
  k: "ክ",
  ko: "ኮ",

  // TODO: Make capital
  Ha: "ኸ",
  Hu: "ኹ",
  Hi: "ኺ",
  Haa: "ኻ",
  He: "ኼ",
  H: "ኽ",
  Ho: "ኾ",

  wa: "ወ",
  wu: "ዉ",
  wi: "ዊ",
  wa2: "ዋ",
  we: "ዌ",
  w: "ው",
  wo: "ዎ",

  za: "ዘ",
  zu: "ዙ",
  zi: "ዚ",
  za2: "ዛ",
  ze: "ዜ",
  z: "ዝ",
  zo: "ዞ",

  zha: "ዠ",
  zhu: "ዡ",
  zhi: "ዢ",
  zha2: "ዣ",
  zhe: "ዤ",
  zh: "ዥ",
  zho: "ዦ",

  ya: "የ",
  yu: "ዩ",
  yi: "ዪ",
  ya2: "ያ",
  ye: "ዬ",
  y: "ይ",
  yo: "ዮ",

  da: "ደ",
  du: "ዱ",
  di: "ዲ",
  da2: "ዳ",
  de: "ዴ",
  d: "ድ",
  do: "ዶ",

  ja: "ጀ",
  ju: "ጁ",
  ji: "ጂ",
  ja2: "ጃ",
  je: "ጄ",
  j: "ጅ",
  jo: "ጆ",

  ga: "ገ",
  gu: "ጉ",
  gi: "ጊ",
  ga2: "ጋ",
  ge: "ጌ",
  g: "ግ",
  go: "ጎ",

  // TODO: Make capital
  ta: "ጠ",
  tu: "ጡ",
  ti: "ጢ",
  ta: "ጣ",
  te: "ጤ",
  t: "ጥ",
  to: "ጦ",

CA: "ጨ",
CU: "ጩ",
CI: "ጪ",
CAA: "ጫ",
CE: "ጬ",
C: "ጭ",
CO: "ጮ",

  pha: "ጰ",
  phu: "ጱ",
  phi: "ጲ",
  pha: "ጳ",
  phe: "ጴ",
  ph: "ጵ",
  pho: "ጶ",

tsa: "ጸ",
tsu: "ጹ",
tsi: "ጺ",
tsa: "ጻ",
tse: "ጼ",
ts: "ጽ",
tso: "ጾ",

TSA: "ፀ",
TSU: "ፁ",
TSI: "ፂ",
TSA: "ፃ",
TSE: "ፄ",
TS: "ፅ",
TSO: "ፆ",

  fa: "ፈ",
  fu: "ፉ",
  fi: "ፊ",
  fa2: "ፋ",
  fe: "ፌ",
  f: "ፍ",
  fo: "ፎ",

  pa: "ፐ",
  pu: "ፑ",
  pi: "ፒ",
  pa: "ፓ",
  pe: "ፔ",
  p: "ፕ",
  po: "ፖ",
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
