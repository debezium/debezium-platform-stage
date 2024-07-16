import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Switch/switch.mjs';
import { css } from '@patternfly/react-styles';
import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';
import { getUniqueId } from '../../helpers/util';
import { getOUIAProps, getDefaultOUIAId } from '../../helpers';
class Switch extends React.Component {
    constructor(props) {
        super(props);
        if (!props.label && !props['aria-label'] && !props['aria-labelledby']) {
            // eslint-disable-next-line no-console
            console.error('Switch: Switch requires at least one of label, aria-labelledby, or aria-label props to be specified');
        }
        this.id = props.id || getUniqueId();
        this.state = {
            ouiaStateId: getDefaultOUIAId(Switch.displayName)
        };
    }
    render() {
        const _a = this.props, { 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        id, className, label, isChecked, defaultChecked, hasCheckIcon, isDisabled, onChange, isReversed, ouiaId, ouiaSafe, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy } = _a, props = __rest(_a, ["id", "className", "label", "isChecked", "defaultChecked", "hasCheckIcon", "isDisabled", "onChange", "isReversed", "ouiaId", "ouiaSafe", 'aria-label', 'aria-labelledby']);
        const hasAccessibleName = label || ariaLabel || ariaLabelledBy;
        const isAriaLabelledBy = hasAccessibleName && (!ariaLabel || ariaLabelledBy);
        const useDefaultAriaLabelledBy = !ariaLabelledBy && !ariaLabel;
        const ariaLabelledByIds = ariaLabelledBy !== null && ariaLabelledBy !== void 0 ? ariaLabelledBy : `${this.id}-label`;
        return (React.createElement("label", Object.assign({ className: css(styles.switch, isReversed && styles.modifiers.reverse, className), htmlFor: this.id }, getOUIAProps(Switch.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe)),
            React.createElement("input", Object.assign({ id: this.id, className: css(styles.switchInput), type: "checkbox", role: "switch", onChange: (event) => onChange(event, event.target.checked) }, (defaultChecked !== undefined ? { defaultChecked } : { checked: isChecked }), { disabled: isDisabled, "aria-labelledby": isAriaLabelledBy ? ariaLabelledByIds : null, "aria-label": ariaLabel }, props)),
            label !== undefined ? (React.createElement(React.Fragment, null,
                React.createElement("span", { className: css(styles.switchToggle) }, hasCheckIcon && (React.createElement("span", { className: css(styles.switchToggleIcon), "aria-hidden": "true" },
                    React.createElement(CheckIcon, null)))),
                React.createElement("span", { className: css(styles.switchLabel), id: isAriaLabelledBy && useDefaultAriaLabelledBy ? `${this.id}-label` : null, "aria-hidden": "true" }, label))) : (React.createElement("span", { className: css(styles.switchToggle) },
                React.createElement("div", { className: css(styles.switchToggleIcon), "aria-hidden": "true" },
                    React.createElement(CheckIcon, null))))));
    }
}
Switch.displayName = 'Switch';
Switch.defaultProps = {
    isChecked: true,
    isDisabled: false,
    isReversed: false,
    'aria-label': undefined,
    'aria-labelledby': undefined,
    onChange: () => undefined
};
export { Switch };
//# sourceMappingURL=Switch.js.map