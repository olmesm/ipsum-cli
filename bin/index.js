#!/usr/bin/env node

const clipboardy = require("clipboardy");
const loremText = require("./lorem.json");

const DEFAULT_QTY = 3;

(function main() {
	const qty = parseInt(process.argv[2], 10) || DEFAULT_QTY;
	const text = loremText.slice(0, qty).join("\n");
	clipboardy.writeSync(text);

	console.log("📝 %s Paragraphs were copied to the clipboard", qty);
})();
