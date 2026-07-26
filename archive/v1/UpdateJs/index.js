import alterFileForImport from "./common/AlterFileForImport/index.js";

const updateAppJs = (args) => {
    const importResult = alterFileForImport(args);

    return importResult;
};

export default updateAppJs;