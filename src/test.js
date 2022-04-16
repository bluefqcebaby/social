function generateHashtag(str) {
  if (!str.trim()) {
    return false;
  }
  let finalWord = `#${str
    .trim()
    .split(" ")
    .filter((e) => e)
    .map((e) => e[0].toUpperCase() + e.slice(1, e.length))
    .join("")}`;
  return finalWord.length > 140 ? false : finalWord;
}

console.log(generateHashtag("Do We have A Hashtag"));
