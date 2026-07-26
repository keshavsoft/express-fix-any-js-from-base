const startFunc = ({
    jsFilePath, rulesJson, packageJson, showLog, parseRegex, searchRegex
}) => {

    if (showLog?.keysOnly) console.log(`${packageJson.name}-start`);

    if (showLog?.withValues) console.log(`${packageJson.name}-inputs-jsFilePath : `, jsFilePath);
    if (showLog?.withValues) console.log(`${packageJson.name}-inputs-rulesJson : `, JSON.stringify(rulesJson));
    if (showLog?.withValues) console.log(`${packageJson.name}-inputs-parseRegex : `, JSON.stringify(parseRegex));
    if (showLog?.withValues) console.log(`${packageJson.name}-inputs-searchRegex : `, JSON.stringify(searchRegex));
};

export default startFunc;