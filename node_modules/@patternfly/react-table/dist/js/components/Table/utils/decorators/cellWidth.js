"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cellWidth = void 0;
const tslib_1 = require("tslib");
const react_styles_1 = require("@patternfly/react-styles");
const table_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Table/table"));
const utils_1 = require("../utils");
const cellWidth = (width) => () => ({
    className: (0, react_styles_1.css)(table_1.default.modifiers[typeof width === 'number' ? `width_${width}` : `width${(0, utils_1.capitalize)(width)}`])
});
exports.cellWidth = cellWidth;
//# sourceMappingURL=cellWidth.js.map