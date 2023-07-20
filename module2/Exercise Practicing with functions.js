// task 1
function letterFinder(word, match) {
  // task 2
  for (var i = 0; i < word.length; i++) {
    // task 3
    if (word[i] === match) {
      // task 4
      console.log("Found the", match, "at", i);
    } // task 5
    else {
      console.log("---No match found at", i);
    }
  }
}

letterFinder("test", "t");
