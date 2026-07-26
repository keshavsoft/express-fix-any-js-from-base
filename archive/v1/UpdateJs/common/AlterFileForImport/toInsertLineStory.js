import baseRegex from "pattern-collector-base-regex";

const startFunc = ({ toInsertLine, parseRegex, showLog = false }) => {

    if (showLog) console.log("toInsertLineStory-inputs : ", parseRegex, toInsertLine);

    const fromPatternCollector = baseRegex({
        matchLine: toInsertLine,
        parseRegex, showLog
    });

    if (showLog) console.log("toInsertLineStory-outputs : ", fromPatternCollector);

    return fromPatternCollector;
};

export default startFunc;