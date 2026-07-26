import defaultAfter from "./defaultAfter/index.js";
import defaultBefore from "./defaultBefore/index.js";

const startFunc = ({
    inAllLinesStory, rulesJson, inSummary
}) => {
    let toInsertIndex = 3;

    if (rulesJson.toInsertRule === "defaultAfter") toInsertIndex = defaultAfter({ toInsertIndex, inAllLinesStory, inSummary });

    if (rulesJson.toInsertRule === "defaultBefore") toInsertIndex = defaultBefore({
        toInsertIndex,
        inAllLinesStory, inSummary, inKeyInSummary: rulesJson.inKeyInSummary
    });
    // console.log("aaaaaaaa--------- : ", toInsertIndex);
    return toInsertIndex;
};

export default startFunc;
