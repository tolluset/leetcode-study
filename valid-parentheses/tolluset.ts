/*
 * TC: O(n)
 * SC: O(n)
 * */
function isValid(s: string): boolean {
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const stack: string[] = [];

  for (const char of s) {
    switch (char) {
      case "(":
      case "[":
      case "{":
        stack.push(map[char]);
        break;
      case ")":
      case "]":
      case "}":
        if (stack.pop() !== char) {
          return false;
        }
        break;
      default:
        return false;
    }
  }

  return stack.length === 0;
}

const tc1 = isValid("()"); //true
console.info("🚀 : tolluset.ts:17: tc1=", tc1);
