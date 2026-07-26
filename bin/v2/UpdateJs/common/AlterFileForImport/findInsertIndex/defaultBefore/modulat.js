const startFunc = ({ inSummary, inToCheckKey, inToCheckEmptyKey,
    inConsiderTop, inConsiderBottom
}) => {

    let index = null;
    let emptyBefore = false;
    let emptyAfter = false;

    const toCheckKey = inToCheckKey;
    const toCheckEmptyKey = inToCheckEmptyKey;

    const considerTop = inConsiderTop;
    const considerBottom = inConsiderBottom;

    if (inSummary[toCheckKey]?.lineCount === 0) {

        if (considerTop) {
            if (inSummary.importFromNpmSummary?.lineCount === 0) {
                index = 1;
            } else {
                emptyBefore = true;
                index = inSummary.importFromNpmSummary?.maxLineNumber + 1;
            };
        };

        if (considerBottom) {
            if (inSummary[toCheckEmptyKey]?.lineCount === 0) {
                // index = inSummary[toCheckEmptyKey]?.minLineNumber;
                index = 1;
            } else {
                emptyAfter = true;
                index = inSummary[toCheckEmptyKey]?.minLineNumber;
            };
        };

    } else {
        index = inSummary[toCheckKey]?.minLineNumber;
    };

    return {
        emptyBefore,
        emptyAfter,
        index
    };
};

export default startFunc;
