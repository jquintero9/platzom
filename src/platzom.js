export default function platzom(str) {
  const MAX_LENGTH = 10;
  let translation = str;

  let reversed = (word) => word.split("").reverse().join("");

  // Rule 4
  if (str === reversed(str)) {
    let capitalize = true,
        newWord = "";

    for (let i = 0; i < str.length; i++) {
      newWord += capitalize ? str.charAt(i).toUpperCase(): str.charAt(i).toLowerCase();
      capitalize = !capitalize;
    }

    return newWord;
  }
  // Regla 1
  if (str.toLowerCase().endsWith("ar")) {
    translation = str.slice(0, -2);
  }
  // Rule 2
  if (translation.toLowerCase().startsWith("z")) {
    translation = translation.concat("pe");
  }
  // Rule3
  if (translation.length >= MAX_LENGTH) {
    const HALF_STRING = Math.round((translation.length-1) / 2);
    const firstPart = translation.substring(0, HALF_STRING);
    const lastPart = translation.substring(HALF_STRING);

    translation = firstPart.concat("-", lastPart);
  }

  return translation;
}