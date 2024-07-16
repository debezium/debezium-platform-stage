"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownItem = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const Menu_1 = require("../Menu");
const helpers_1 = require("../../helpers");
const DropdownItemBase = (_a) => {
    var { children, className, description, isDisabled, isAriaDisabled, value, onClick, ouiaId, ouiaSafe, innerRef, tooltipProps } = _a, props = tslib_1.__rest(_a, ["children", "className", "description", "isDisabled", "isAriaDisabled", "value", "onClick", "ouiaId", "ouiaSafe", "innerRef", "tooltipProps"]);
    const ouiaProps = (0, helpers_1.useOUIAProps)(exports.DropdownItem.displayName, ouiaId, ouiaSafe);
    return (react_1.default.createElement(Menu_1.MenuItem, Object.assign({ className: (0, react_styles_1.css)(className), description: description, isDisabled: isDisabled, isAriaDisabled: isAriaDisabled, itemId: value, onClick: onClick, tooltipProps: tooltipProps, ref: innerRef }, ouiaProps, props), children));
};
exports.DropdownItem = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(DropdownItemBase, Object.assign({}, props, { innerRef: ref }))));
exports.DropdownItem.displayName = 'DropdownItem';
//# sourceMappingURL=DropdownItem.js.map