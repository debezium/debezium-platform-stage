"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxPadding = void 0;
const maxPadding = (padding) => {
    if (typeof padding === 'number') {
        return +padding;
    }
    if (Array.isArray(padding)) {
        return padding.reduce((max, p) => Math.max(max, p), 0);
    }
    return 0;
};
exports.maxPadding = maxPadding;
//# sourceMappingURL=geom-utils.js.map