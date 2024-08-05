export const encryptor = () => {
  const dict: { [key: string]: string } = {
    a: "😄",
    e: "😊",
    i: "😉",
    o: "😲",
    u: "😍",
    A: "😄",
    E: "😊",
    I: "😉",
    O: "😲",
    U: "😍",
  };

  const encrypt = (text: string) => {
    return text
      .split("")
      .map((char) => dict[char] || char)
      .join("");
  };

  const decrypt = (text: string) => {
    return text
      .split("")
      .map(
        (char) => Object.keys(dict).find((key) => dict[key] === char) || char
      )
      .join("");
  };

  return {
    encrypt,
    decrypt,
  };
};
