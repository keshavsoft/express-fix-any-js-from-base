import getStory from "pattern-collector-anyjs";

import readFile from "../readFile.js";
import checkDuplicate from "./checkDuplicate.js";
import findInsertIndex from "./findInsertIndex/index.js";
import writeFile from "../writeFile.js";
import getLineStory from "./toInsertLineStory.js";
import atStart from "./showLogs/atStart.js";
import atEnd from "./showLogs/atEnd.js";

import packageJson from '../../../../../package.json' with {type: 'json'};

const alterFile = ({
    jsFilePath, rulesJson, extractRegex,
    showLog = false, showLogStep1, showLogStep2, showLogStep3
}) => {

    atStart({ jsFilePath, rulesJson, packageJson, showLog, searchRegex: extractRegex });

    const toInsertLine = rulesJson.toInsertLine;

    const content = readFile(jsFilePath);

    // "keyNeeded": "importRegex.parseRegex"
    const parseRegex = rulesJson?.regexNeeded?.keyNeeded
        .split(".")
        .reduce((obj, key) => obj?.[key], extractRegex);

    const lineStory = getLineStory({
        toInsertLine, parseRegex, showLog
    });

    if (showLog?.withValues) console.log(`${packageJson.name}-lineStory : `, lineStory);

    const fromPatternCollector = getStory({
        fileContent: content,
        extractRegex,
        showLog: showLogStep1,
        showLogStep1: showLogStep2, showLogStep2: showLogStep3
    });

    // console.log(`-fromPatternCollector : `, fromPatternCollector.importLines);

    if (showLog?.withValues) console.log(`${packageJson.name}------------ : `, fromPatternCollector);

    const duplicateInfo = checkDuplicate({
        inSearchText: lineStory.raka,
        inFileContentAsStory: fromPatternCollector[rulesJson?.toCheckLinesName]
    });

    console.log(`------- : `, duplicateInfo);

    if (duplicateInfo.found) {
        if (showLog) {
            console.log(
                `Duplicate found at line ${duplicateInfo.lineNumber}`
            );
        };

        return duplicateInfo;
    };

    const toInsertIndex = findInsertIndex({
        inAllLinesStory: fromPatternCollector.allLinesStory,
        inSummary: fromPatternCollector?.summary,
        rulesJson: rulesJson?.aboutInsertIndex
    });

    writeFile({
        inJsFilePath: jsFilePath,
        inInsertLineIndex: toInsertIndex.index,
        toInsertLine, emptyBefore: toInsertIndex.emptyBefore,
        emptyAfter: toInsertIndex.emptyAfter
    });

    atEnd({ duplicateInfo, packageJson, showLog });

    return {
        inserted: true,
        found: false,
        filePath: jsFilePath,
        lineNumber: null
    };
};

export default alterFile;