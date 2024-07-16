"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caption = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const table_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Table/table"));
const react_styles_1 = require("@patternfly/react-styles");
const Caption = (_a) => {
    var { children, className } = _a, props = tslib_1.__rest(_a, ["children", "className"]);
    return (React.createElement("caption", Object.assign({ className: (0, react_styles_1.css)(table_1.default.tableCaption, className) }, props), children));
};
exports.Caption = Caption;
exports.Caption.displayName = 'Caption';
//# sourceMappingURL=Caption.js.map