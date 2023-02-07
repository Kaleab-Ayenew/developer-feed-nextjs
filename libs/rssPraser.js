import { parse } from "node-html-parser";

let Parser = require("rss-parser");
let parser = new Parser();

export async function getFeeds() {
  let feed = await parser.parseURL("https://medium.com/feed/tag/programming");
  feed.items = feed.items.map((item) => {
    let img = parse(item.content).getElementsByTagName("img")[0];
    let imgLink =
      img !== undefined ? img.getAttribute("src") : "/assets/medium.png";
    let newItem = { ...item, imgLink };
    return newItem;
  });
  return feed.items;
}
