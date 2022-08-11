const REGEX_MULTI_BYTE_CHAR = /[Ａ-Ｚａ-ｚ０-９]/g;
export const toSingleByte = (str: string): string =>
  str.replace(REGEX_MULTI_BYTE_CHAR, (s) =>
    String.fromCharCode(s.charCodeAt(0) - 65248)
  );
