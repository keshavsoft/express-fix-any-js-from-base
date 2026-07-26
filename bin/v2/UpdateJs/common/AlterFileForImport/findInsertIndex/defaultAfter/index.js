import getFromStory from "./story.js";
import getFromSummary from "./modulat.js";

const findInsertIndex = ({ toInsertIndex,
    inAllLinesStory, inSummary
}) => {

    const storyIndex = getFromStory(inAllLinesStory);

    if (storyIndex !== null) {
        toInsertIndex = storyIndex;
    };

    const summaryIndex = getFromSummary(inSummary);

    if (summaryIndex !== null) {
        toInsertIndex = summaryIndex;
    };

    return toInsertIndex;
};

export default findInsertIndex;
