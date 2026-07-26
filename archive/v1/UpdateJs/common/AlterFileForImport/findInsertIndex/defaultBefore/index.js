import getFromStory from "./story.js";
import getFromSummary from "./modulat.js";

const findInsertIndex = ({ toInsertIndex,
    inAllLinesStory, inSummary, inKeyInSummary
}) => {

    const storyIndex = getFromStory(inAllLinesStory);

    if (storyIndex !== null) {
        toInsertIndex = storyIndex;
    };
    // console.log("aaaaaaaa-- : ", inKeyInSummary);
    const summaryIndex = getFromSummary({ inSummary, inKeyInSummary });

    if (summaryIndex !== null) {
        toInsertIndex = summaryIndex;
    };

    return toInsertIndex;
};

export default findInsertIndex;
