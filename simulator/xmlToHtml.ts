import { kitchenFilledExample } from "./kitchenPrinting/kitchenFilledExample";
import { billFilledExample } from "./billPrinting/billFilledExample";
import fs from "fs";

export const parseXmlToHtml = (xml: string) => {
  let html = xml;

  html = html.replace(
    /<align mode="center">/g,
    '<div style="text-align: center">'
  );
  html = html.replace(/<\/align>/g, "</div>");
  html = html.replace(/<text-line>/g, '<div class="line"><p class="one">');
  html = html.replace(
    /<text-line size="0:0">/g,
    '<div class="line"><p class="one">'
  );
  html = html.replace(
    /<text-line size="0:1">/g,
    '<div class="line"><p class="one-two">'
  );
  html = html.replace(
    /<text-line size="1:0">/g,
    '<div class="line"><p class="two-one">'
  );
  html = html.replace(
    /<text-line size="1:1">/g,
    '<div class="line"><p class="two">'
  );
  html = html.replace(/<\/text-line>/g, "</p></div>");
  html = html.replace(/<bold>/g, "<b>");
  html = html.replace(/<\/bold>/g, "</b>");
  html = html.replace(/<line-feed \/>/g, "<br />");
  html = html.replace(/<paper-cut \/>/g, "<div><p>!paper-cut</p></div>");
  html = html.replace(
    /<open-cash-drawer><\/open-cash-drawer>/g,
    "<div><p>!open-cash-drawer</p></div>"
  );
  html = html.replace(
    /<under-line mode="two-point">/g,
    "<div class='underline'>"
  );
  html = html.replace(/<\/under-line>/g, "</div class='underline'>");
  html = html.replace(/<qrcode.*?>/g, "<div class='qr'");
  html = html.replace(/<\/qrcode>/g, "</div>");
  html = html.replace(/<small>/g, "<div class='small'");
  html = html.replace(/<\/small>/g, "</div>");

  return html;
};

const result = parseXmlToHtml(billFilledExample);
console.log(result);

fs.writeFile("file.html", result, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
