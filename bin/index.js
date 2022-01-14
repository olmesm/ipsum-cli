#!/usr/bin/env node
import { readFileSync } from "fs";
import clipboardy from "clipboardy";
import { fileURLToPath } from "url";
import { dirname, sep } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const loremText = JSON.parse(
	readFileSync([__dirname, "lorem.json"].join(sep), "utf-8")
);

const DEFAULT_QTY = 3;

(function main() {
	const qty = parseInt(process.argv[2], 10) || DEFAULT_QTY;
	const text = loremText.slice(0, qty).join("\n");
	clipboardy.writeSync(text);

	console.log("📝 %s Paragraphs were copied to the clipboard", qty);
})();
