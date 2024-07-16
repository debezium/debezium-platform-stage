import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ToggleGroup/toggle-group.mjs';
import { ToggleGroupItemVariant, ToggleGroupItemElement } from './ToggleGroupItemElement';
export const ToggleGroupItem = (_a) => {
    var { text, icon, iconPosition = 'start', className, isDisabled = false, isSelected = false, 'aria-label': ariaLabel, onChange = () => { }, buttonId } = _a, props = __rest(_a, ["text", "icon", "iconPosition", "className", "isDisabled", "isSelected", 'aria-label', "onChange", "buttonId"]);
    const handleChange = (event) => {
        onChange(event, !isSelected);
    };
    if (!ariaLabel && icon && !text) {
        /* eslint-disable no-console */
        console.warn('An accessible aria-label is required when using the toggle group item icon variant.');
    }
    const toggleGroupIcon = React.createElement(ToggleGroupItemElement, { variant: ToggleGroupItemVariant.icon }, icon);
    return (React.createElement("div", Object.assign({ className: css(styles.toggleGroupItem, className) }, props),
        React.createElement("button", { type: "button", className: css(styles.toggleGroupButton, isSelected && styles.modifiers.selected), "aria-pressed": isSelected, onClick: handleChange, "aria-label": ariaLabel, disabled: isDisabled, id: buttonId },
            icon && iconPosition === 'start' && toggleGroupIcon,
            text && React.createElement(ToggleGroupItemElement, { variant: ToggleGroupItemVariant.text }, text),
            icon && iconPosition === 'end' && toggleGroupIcon)));
};
ToggleGroupItem.displayName = 'ToggleGroupItem';
//# sourceMappingURL=ToggleGroupItem.js.map