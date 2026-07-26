const getFromStory = (inAllLinesStory) => {
    if (Array.isArray(inAllLinesStory)) {
        return inAllLinesStory.length - 1;
    }
    return null;
};

export default getFromStory;
