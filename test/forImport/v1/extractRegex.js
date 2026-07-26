export default {
    importNpmRegex: {
        searchRegex: /^[ \t]*import\b.*from\s+['"](?!\.{1,2}\/|\/)[^'"]+['"];/gm
    },
    importRegex: {
        parseRegex: /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/,
        searchRegex: /^[ \t]*import\b.*from\s+['"]\.[^'"]*['"];/gm
    },
    consumptionRegex: {
        parseRegex: /router\.use\s*\(\s*['"`]\/?([^'"`]+)['"`]\s*,\s*(\w+)/,
        searchRegex: /^[ \t]*router\.use\b.*?;/gm
    },
    exportRegex: {
        searchRegex: /export\s*\{\s*(\w+)\s*\}\s*;?/gm
    }
};
