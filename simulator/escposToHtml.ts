import { stringBuffer } from "./escposPrinting/iteration3/stringBuffer";
import { hexBuffer } from './escposPrinting/iteration3/stringBuffer';
import * as fs from "fs";

export const convertBufferToHtml = (str: string) => {

  str = str.replace(/\+/g, "");
  str = '<?xml version="1.0" encoding="UTF-8"?><document>' + str;

  // Replace HEX and ASCII patterns with HTML
  str = str.replace(/\x1C\(C\x02\x000\x02/g, '<div class="utf-8-encoding"></div>');
  str = str.replace(/\x1D!\x01/g, '<div class="line"><p class="one-two">');
  str = str.replace(/\x1BE\x01/g, "<b>");
  str = str.replace(/\x1Ba1/g, '<div style="text-align: center">');
  str = str.replace(/\x1D!\x00/g, '<div class="line"><p class="one">');
  str = str.replace(/\x1BE\x00/g, "</b>");
  str = str.replace(/\x1Bd\x00/g, "<br/>");
  str = str.replace(/\x1Ba0/g, '<div style="text-align: left">');
  str = str.replace(/\x1D!\x10/g, '<div class="line"><p class="two-one">');
  str = str.replace(/\x1D!\x11/g, '<div class="line"><p class="two-two">');
  str = str.replace(/\x1DVB2/g, "<div class='paper-cut'><br/></div>");
  str = str.replace(
    /\x1D\(k\x04\x001A2\x00\x1D\(k\x03\x001C\x05\x1D\(k\x03\x001E0\x1D\(kW\x001P0/g,
    '<div class="line"><p>start qr</p></div>'
  );
  str = str.replace(
    /\x1D\(k\x03\x001Q0/g,
    '<div class="line"><p>end qr</p></div>'
  );

  const cutoffPosition = str.indexOf("<div class='paper-cut'><br/></div>");

  if (cutoffPosition !== -1) {
    str = str.substring(
      0,
      cutoffPosition + "<div class='paper-cut'><br/></div>".length
    );
  }

  str += "</document>";

  return str;
};

const htmlResult = convertBufferToHtml(stringBuffer);
console.log(htmlResult);

fs.writeFile("file.html", htmlResult, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
