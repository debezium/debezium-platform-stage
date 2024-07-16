const DEFAULT_OPTIONS = {
    length: 20,
    truncateEnd: false,
    omission: '\u2026',
    minTruncateChars: 3
};
// Truncates a string down to `maxLength` characters when the length
// is greater than the `maxLength` + `minTruncateChars` values.
// By default the middle is truncated, set the options.truncateEnd to true to truncate at the end.
// Truncated text is replaced with the provided omission option (ellipsis character by default);
export const truncateMiddle = (text, options = {}) => {
    const { length, truncateEnd, omission, minTruncateChars } = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
    if (!text) {
        return text;
    }
    // Do not truncate less than the minimum truncate characters
    if (text.length <= length + minTruncateChars) {
        return text;
    }
    if (length <= omission.length) {
        return omission;
    }
    if (truncateEnd) {
        return `${text.substr(0, length - 1)}${omission}`;
    }
    const startLength = Math.ceil((length - omission.length) / 2);
    const endLength = length - startLength - omission.length;
    const startFragment = text.substr(0, startLength);
    const endFragment = text.substr(text.length - endLength);
    return `${startFragment}${omission}${endFragment}`;
};
export const shouldTruncate = (text, options = {}) => {
    const { length, minTruncateChars } = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
    return text.length > length + minTruncateChars;
};
//# sourceMappingURL=truncate-middle.js.map