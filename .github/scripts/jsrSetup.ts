
import { readFileSync, writeFileSync } from "fs";

const pkgPath = new URL("../../package.json", import.meta.url).pathname;
const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
const version = pkg.version;

const jsrPath = new URL("../../jsr.json", import.meta.url).pathname;
const jsr = JSON.parse(readFileSync(jsrPath, "utf-8"));
jsr.version = version;

writeFileSync(jsr, JSON.stringify(pkg, null, 2) + "\n");