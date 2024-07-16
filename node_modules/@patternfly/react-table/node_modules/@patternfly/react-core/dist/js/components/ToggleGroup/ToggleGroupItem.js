"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleGroupItem = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const toggle_group_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/ToggleGroup/toggle-group"));
const ToggleGroupItemElement_1 = require("./ToggleGroupItemElement");
const ToggleGroupItem = (_a) => {
    var { text, icon, iconPosition = 'start', className, isDisabled = false, isSelected = false, 'aria-label': ariaLabel, onChange = () => { }, buttonId } = _a, props = tslib_1.__rest(_a, ["text", "icon", "iconPosition", "className", "isDisabled", "isSelected", 'aria-label', "onChange", "buttonId"]);
    const handleChange = (event) => {
        onChange(event, !isSelected);
    };
    if (!ariaLabel && icon && !text) {
        /* eslint-disable no-console */
        console.warn('An accessible aria-label is required when using the toggle group item icon variant.');
    }
    const toggleGroupIcon = React.createElement(ToggleGroupItemElement_1.ToggleGroupItemElement, { variant: ToggleGroupItemElement_1.ToggleGroupItemVariant.icon }, icon);
    return (React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(toggle_group_1.default.toggleGroupItem, className) }, props),
        React.createElement("button", { type: "button", className: (0, react_styles_1.css)(toggle_group_1.default.toggleGroupButton, isSelected && toggle_group_1.default.modifiers.selected), "aria-pressed": isSelected, onClick: handleChange, "aria-label": ariaLabel, disabled: isDisabled, id: buttonId },
            icon && iconPosition === 'start' && toggleGroupIcon,
            text && React.createElement(ToggleGroupItemElement_1.ToggleGroupItemElement, { variant: ToggleGroupItemElement_1.ToggleGroupItemVariant.text }, text),
            icon && iconPosition === 'end' && toggleGroupIcon)));
};
exports.ToggleGroupItem = ToggleGroupItem;
exports.ToggleGroupItem.displayName = 'ToggleGroupItem';
//# sourceMappingURL=ToggleGroupItem.js.map