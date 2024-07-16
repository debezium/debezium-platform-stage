"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrappable = exports.truncate = exports.nowrap = exports.fitContent = exports.breakWord = void 0;
const tslib_1 = require("tslib");
const table_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Table/table"));
const breakWord = () => ({
    className: table_1.default.modifiers.breakWord
});
exports.breakWord = breakWord;
const fitContent = () => ({
    className: table_1.default.modifiers.fitContent
});
exports.fitContent = fitContent;
const nowrap = () => ({
    className: table_1.default.modifiers.nowrap
});
exports.nowrap = nowrap;
const truncate = () => ({
    className: table_1.default.modifiers.truncate
});
exports.truncate = truncate;
const wrappable = () => ({
    className: table_1.default.modifiers.wrap
});
exports.wrappable = wrappable;
//# sourceMappingURL=wrappable.js.map