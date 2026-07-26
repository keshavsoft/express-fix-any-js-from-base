import fs from "fs";
import readFile from "./readFile.js";

const writeFile = ({ inJsFilePath, inInsertLineIndex, toInsertLine,
    emptyBefore = false, emptyAfter = false
}) => {
    try {
        if (emptyBefore) {
            toInsertLine = "\n".concat(toInsertLine);
        };

        if (emptyAfter) {
            toInsertLine = toInsertLine.concat("\n");
        };

        const content = readFile(inJsFilePath);

        const lines = content.split("\n");

        const updatedLines = lines.toSpliced(inInsertLineIndex - 1, 0, toInsertLine);

        fs.writeFileSync(inJsFilePath, updatedLines.join("\n"));

    } catch (error) {
        return error;
    };
};

export default writeFile;