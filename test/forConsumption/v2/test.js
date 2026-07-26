import path from "path";
import { fileURLToPath } from "url";

import index from "../../../index.js";

import extractRegex from './extractRegex.js';

import rulesJson from './rules.json' with {type: 'json'};

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "routes.js");

function runTests() {
    const output = index({
        jsFilePath: appJsPath,
        rulesJson,
        extractRegex, 
        showLog: {
            keysOnly: false,
            withValues: false
        },
        showLogStep1: {
            keysOnly: false,
            withValues: false
        },
        showLogStep2: {
            keysOnly: false,
            withValues: false
        },
        showLogStep3: {
            keysOnly: false,
            withValues: false
        }
    });

    // console.log("output : ", output);
};

runTests();
