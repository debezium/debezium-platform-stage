import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Check/check.mjs';
import { css } from '@patternfly/react-styles';
import { getDefaultOUIAId, getOUIAProps } from '../../helpers';
import { ASTERISK } from '../../helpers/htmlConstants';
// tslint:disable-next-line:no-empty
const defaultOnChange = () => { };
class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = (event) => {
            this.props.onChange(event, event.currentTarget.checked);
        };
        this.state = {
            ouiaStateId: getDefaultOUIAId(Checkbox.displayName)
        };
    }
    render() {
        const _a = this.props, { 'aria-label': ariaLabel, className, inputClassName, onChange, isLabelWrapped, labelPosition = 'end', isValid, isDisabled, isRequired, isChecked, label, checked, defaultChecked, description, body, ouiaId, ouiaSafe, component } = _a, props = __rest(_a, ['aria-label', "className", "inputClassName", "onChange", "isLabelWrapped", "labelPosition", "isValid", "isDisabled", "isRequired", "isChecked", "label", "checked", "defaultChecked", "description", "body", "ouiaId", "ouiaSafe", "component"]);
        if (!props.id) {
            // eslint-disable-next-line no-console
            console.error('Checkbox:', 'id is required to make input accessible');
        }
        const checkedProps = {};
        if ([true, false].includes(checked) || isChecked === true) {
            checkedProps.checked = checked || isChecked;
        }
        if (onChange !== defaultOnChange) {
            checkedProps.checked = isChecked;
        }
        if ([false, true].includes(defaultChecked)) {
            checkedProps.defaultChecked = defaultChecked;
        }
        const inputRendered = (React.createElement("input", Object.assign({}, props, { className: css(styles.checkInput, inputClassName), type: "checkbox", onChange: this.handleChange, "aria-invalid": !isValid, "aria-label": ariaLabel, disabled: isDisabled, required: isRequired, ref: (elem) => elem && (elem.indeterminate = isChecked === null) }, checkedProps, getOUIAProps(Checkbox.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe))));
        const wrapWithLabel = (isLabelWrapped && !component) || component === 'label';
        const Label = wrapWithLabel ? 'span' : 'label';
        const labelRendered = label ? (React.createElement(Label, { className: css(styles.checkLabel, isDisabled && styles.modifiers.disabled), htmlFor: !wrapWithLabel ? props.id : undefined },
            label,
            isRequired && (React.createElement("span", { className: css(styles.checkLabelRequired), "aria-hidden": "true" }, ASTERISK)))) : null;
        const Component = component !== null && component !== void 0 ? component : (wrapWithLabel ? 'label' : 'div');
        checkedProps.checked = checkedProps.checked === null ? false : checkedProps.checked;
        return (React.createElement(Component, { className: css(styles.check, !label && styles.modifiers.standalone, className), htmlFor: wrapWithLabel ? props.id : undefined },
            labelPosition === 'start' ? (React.createElement(React.Fragment, null,
                labelRendered,
                inputRendered)) : (React.createElement(React.Fragment, null,
                inputRendered,
                labelRendered)),
            description && React.createElement("span", { className: css(styles.checkDescription) }, description),
            body && React.createElement("span", { className: css(styles.checkBody) }, body)));
    }
}
Checkbox.displayName = 'Checkbox';
Checkbox.defaultProps = {
    className: '',
    isLabelWrapped: false,
    isValid: true,
    isDisabled: false,
    isRequired: false,
    isChecked: false,
    onChange: defaultOnChange,
    ouiaSafe: true
};
export { Checkbox };
//# sourceMappingURL=Checkbox.js.map