import getFromStory from "./story.js";
import getFromSummary from "./modulat.js";

const findInsertIndex = ({ toInsertIndex,
    inAllLinesStory, inSummary, rulesJson
}) => {

    const storyIndex = getFromStory(inAllLinesStory);

    if (storyIndex !== null) {
        toInsertIndex = storyIndex;
    };
    // console.log("aaaaaaaa-- : ", inKeyInSummary);
    const summaryIndex = getFromSummary({
        inSummary,
        inToCheckKey: rulesJson?.toCheckKey,
        inToCheckEmptyKey: rulesJson?.toCheckEmptyKey,
        inConsiderTop: rulesJson?.considerTop,
        inConsiderBottom: rulesJson?.considerBottom,
        inToCheckEmpty2Key: rulesJson?.toCheckEmpty2Key
    })

    if (summaryIndex !== null) {
        toInsertIndex = summaryIndex;
    };

    return toInsertIndex;
};

export default findInsertIndex;
