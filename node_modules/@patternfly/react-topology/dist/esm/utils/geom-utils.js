export const maxPadding = (padding) => {
    if (typeof padding === 'number') {
        return +padding;
    }
    if (Array.isArray(padding)) {
        return padding.reduce((max, p) => Math.max(max, p), 0);
    }
    return 0;
};
//# sourceMappingURL=geom-utils.js.map