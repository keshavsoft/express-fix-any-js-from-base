const startFunc = ({
    duplicateInfo, packageJson, showLog
}) => {

    if (showLog?.keysOnly) console.log(`${packageJson.name}-end`);
    if (showLog?.withValues) console.log(`${packageJson.name}-outputs : `, duplicateInfo);

};

export default startFunc;