import { stringBuffer } from "./escposPrinting/iteration3/stringBuffer";

export const convertToHtml = (str: string) => {
  // Combine the strings and remove the "+" signs
  str = str.replace(/\+/g, '');

  // Replace HEX and ASCII patterns with HTML
  str = str.replace(/\x1D!\x01/g, '<div class="line"><p class="one-two">');
  str = str.replace(/\x1BE\x01/g, '<b>');
  str = str.replace(/\x1Ba1/g, '<div style="text-align: center">');
  str = str.replace(/\x1D!\x00/g, '<div class="line"><p class="one">');
  str = str.replace(/\x1BE\x00/g, '</b>');
  str = str.replace(/\x1Bd\x00/g, '<br/>');
  str = str.replace(/\x1Ba0/g, '<div style="text-align: left">');
  str = str.replace(/\x1D!\x10/g, '<div class="line"><p class="two-one">');
  str = str.replace(/\x1DVB2/g, '<div><p>!paper-cut</p></div>');

  return str;
};

const htmlResult = convertToHtml(stringBuffer);
console.log(htmlResult);
