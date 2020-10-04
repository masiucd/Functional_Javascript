function isPalindrome(str: string): boolean {
  if (str.length <= 1) return true;
  // @ts-ignore
  const [first, ...rest] = str;
  const last = rest.pop();
  return first === last
    ? isPalindrome(str.substring(1, str.length - 1))
    : false;
}
