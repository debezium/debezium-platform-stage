"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputGroup = exports.InputGroupBase = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const input_group_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/InputGroup/input-group"));
const react_styles_1 = require("@patternfly/react-styles");
const InputGroupBase = (_a) => {
    var { className, children, innerRef } = _a, props = tslib_1.__rest(_a, ["className", "children", "innerRef"]);
    const ref = React.useRef(null);
    const inputGroupRef = innerRef || ref;
    return (React.createElement("div", Object.assign({ ref: inputGroupRef, className: (0, react_styles_1.css)(input_group_1.default.inputGroup, className) }, props), children));
};
exports.InputGroupBase = InputGroupBase;
exports.InputGroupBase.displayName = 'InputGroupBase';
exports.InputGroup = React.forwardRef((props, ref) => (React.createElement(exports.InputGroupBase, Object.assign({ innerRef: ref }, props))));
exports.InputGroup.displayName = 'InputGroup';
//# sourceMappingURL=InputGroup.js.map