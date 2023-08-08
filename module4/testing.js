// using JEST

function concactStrings(strA, strB) {
  return strA + strB;
}

// expected: abcdef
expect(concactStrings("abc", "def")).toBe("abcdef");
expect(concactStrings("123", "456")).toBe("123456");
