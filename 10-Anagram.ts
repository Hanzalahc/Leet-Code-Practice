function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const map = new Map();

  for (const element of s) {
    let count = map.get(element);

    if (count === undefined) {
      map.set(element, 1);
    } else {
      map.set(element, ++count);
    }
  }

  for (const element of t) {
    if (!map.has(element)) {
      return false;
    }
    let count = map.get(element);
    if (count === 0) {
      return false;
    }
    map.set(element, --count);
  }
  return true;
}

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

isAnagram("anagram", "nagaram");
