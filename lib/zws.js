const { randomBytes } = require("crypto");
const zeroWidthCap = "\u200B";
const zeroWidthChars = [zeroWidthCap, "\u200C", "\u200D", "\u2060", "\u180E"];
const zwsGenerator = (size) => {
  return (
    [...randomBytes(size)]
      .map((byte) => zeroWidthChars[+byte % zeroWidthChars.length])
      .join("")
      .slice(1) + zeroWidthCap
  );
};
export default zwsGenerator;
/* credit to @aetheryx for this function, https://github.com/aetheryx/sharex-upload-server/blob/master/src/formats/zws.js */
