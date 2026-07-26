const startFunc = ({ inSummary, inKeyInSummary }) => {
    let index = null;
    let emptyBefore = false;

    if (inSummary.importSummary?.lineCount === 0) {

        if (inSummary.importFromNpmSummary?.lineCount === 0) {
            index = 1;
        } else {
            emptyBefore = true;
            index = inSummary.importFromNpmSummary?.maxLineNumber + 1;
        };

    } else {
        index = inSummary.importSummary?.minLineNumber;
    };

    return {
        emptyBefore,
        index
    };
};

export default startFunc;
