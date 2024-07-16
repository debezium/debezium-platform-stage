"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputGroupItem = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const input_group_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/InputGroup/input-group"));
const react_styles_1 = require("@patternfly/react-styles");
const InputGroupItem = (_a) => {
    var { className, children, isFill = false, isBox = false, isPlain, isDisabled } = _a, props = tslib_1.__rest(_a, ["className", "children", "isFill", "isBox", "isPlain", "isDisabled"]);
    return (React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(input_group_1.default.inputGroupItem, isFill && input_group_1.default.modifiers.fill, isBox && input_group_1.default.modifiers.box, isPlain && input_group_1.default.modifiers.plain, isDisabled && input_group_1.default.modifiers.disabled, className) }, props), children));
};
exports.InputGroupItem = InputGroupItem;
exports.InputGroupItem.displayName = 'InputGroupItem';
//# sourceMappingURL=InputGroupItem.js.map