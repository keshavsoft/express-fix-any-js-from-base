const checkUseDuplicate = ({ inSearchText, inFileContentAsStory }) => {

    const found = inFileContentAsStory.find(element => {
        return element.folderName === inSearchText;
    });

    return {
        inserted: false,
        found,
        lineNumber: found ? found.lineNumber : null
    };
};

export default checkUseDuplicate;