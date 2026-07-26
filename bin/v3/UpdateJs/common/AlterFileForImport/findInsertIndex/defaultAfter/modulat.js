const getFromSummary = (inSummary) => {
    let index = null;

    if (inSummary?.exportSummary) {
        const minLine = inSummary?.exportSummary?.maxLineNumber;
        if (minLine !== Infinity && minLine !== -Infinity) {
            index = minLine + 1;
        }
    };

    if (inSummary?.consumeSummary) {
        const minLine = inSummary?.consumeSummary?.maxLineNumber;
        if (minLine !== Infinity && minLine !== -Infinity) {
            index = minLine + 1;
        }
    };

    return index;
};

export default getFromSummary;
