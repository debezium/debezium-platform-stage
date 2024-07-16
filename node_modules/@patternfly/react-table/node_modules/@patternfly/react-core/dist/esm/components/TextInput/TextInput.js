import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/FormControl/form-control.mjs';
import { css } from '@patternfly/react-styles';
import { ValidatedOptions } from '../../helpers/constants';
import { trimLeft } from '../../helpers/util';
import { getDefaultOUIAId, getOUIAProps } from '../../helpers';
import { getResizeObserver } from '../../helpers/resizeObserver';
import { FormControlIcon } from '../FormControl/FormControlIcon';
export var TextInputTypes;
(function (TextInputTypes) {
    TextInputTypes["text"] = "text";
    TextInputTypes["date"] = "date";
    TextInputTypes["datetimeLocal"] = "datetime-local";
    TextInputTypes["email"] = "email";
    TextInputTypes["month"] = "month";
    TextInputTypes["number"] = "number";
    TextInputTypes["password"] = "password";
    TextInputTypes["search"] = "search";
    TextInputTypes["tel"] = "tel";
    TextInputTypes["time"] = "time";
    TextInputTypes["url"] = "url";
})(TextInputTypes || (TextInputTypes = {}));
export var TextInputReadOnlyVariant;
(function (TextInputReadOnlyVariant) {
    TextInputReadOnlyVariant["default"] = "default";
    TextInputReadOnlyVariant["plain"] = "plain";
})(TextInputReadOnlyVariant || (TextInputReadOnlyVariant = {}));
// eslint-disable-next-line patternfly-react/no-anonymous-functions
export class TextInputBase extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.observer = () => { };
        this.handleChange = (event) => {
            if (this.props.onChange) {
                this.props.onChange(event, event.currentTarget.value);
            }
        };
        this.handleResize = () => {
            const inputRef = this.props.innerRef || this.inputRef;
            if (inputRef && inputRef.current) {
                trimLeft(inputRef.current, String(this.props.value));
            }
        };
        this.restoreText = () => {
            const inputRef = this.props.innerRef || this.inputRef;
            // restore the value
            inputRef.current.value = String(this.props.value);
            // make sure we still see the rightmost value to preserve cursor click position
            inputRef.current.scrollLeft = inputRef.current.scrollWidth;
        };
        this.onFocus = (event) => {
            const { isLeftTruncated, isStartTruncated, onFocus } = this.props;
            if (isLeftTruncated || isStartTruncated) {
                this.restoreText();
            }
            onFocus && onFocus(event);
        };
        this.onBlur = (event) => {
            const { isLeftTruncated, isStartTruncated, onBlur } = this.props;
            if (isLeftTruncated || isStartTruncated) {
                this.handleResize();
            }
            onBlur && onBlur(event);
        };
        this.sanitizeInputValue = (value) => typeof value === 'string' ? value.replace(/\n/g, ' ') : value;
        if (!props.id && !props['aria-label'] && !props['aria-labelledby']) {
            // eslint-disable-next-line no-console
            console.error('Text input:', 'Text input requires either an id or aria-label to be specified');
        }
        this.state = {
            ouiaStateId: getDefaultOUIAId(TextInputBase.displayName)
        };
    }
    componentDidMount() {
        if (this.props.isLeftTruncated || this.props.isStartTruncated) {
            const inputRef = this.props.innerRef || this.inputRef;
            this.observer = getResizeObserver(inputRef.current, this.handleResize, true);
            this.handleResize();
        }
    }
    componentWillUnmount() {
        if (this.props.isLeftTruncated || this.props.isStartTruncated) {
            this.observer();
        }
    }
    render() {
        const _a = this.props, { innerRef, className, type, value, placeholder, validated, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        onChange, onFocus, onBlur, isLeftTruncated, isStartTruncated, isExpanded, expandedProps, readOnly, readOnlyVariant, isRequired, isDisabled, customIcon, ouiaId, ouiaSafe } = _a, props = __rest(_a, ["innerRef", "className", "type", "value", "placeholder", "validated", "onChange", "onFocus", "onBlur", "isLeftTruncated", "isStartTruncated", "isExpanded", "expandedProps", "readOnly", "readOnlyVariant", "isRequired", "isDisabled", "customIcon", "ouiaId", "ouiaSafe"]);
        const hasStatusIcon = ['success', 'error', 'warning'].includes(validated);
        const ariaExpandedProps = expandedProps
            ? { 'aria-expanded': expandedProps === null || expandedProps === void 0 ? void 0 : expandedProps.isExpanded, 'aria-controls': expandedProps === null || expandedProps === void 0 ? void 0 : expandedProps.ariaControls, role: 'combobox' }
            : {};
        return (React.createElement("span", { className: css(styles.formControl, readOnlyVariant && styles.modifiers.readonly, readOnlyVariant === 'plain' && styles.modifiers.plain, isDisabled && styles.modifiers.disabled, (isExpanded || (expandedProps === null || expandedProps === void 0 ? void 0 : expandedProps.isExpanded)) && styles.modifiers.expanded, customIcon && styles.modifiers.icon, hasStatusIcon && styles.modifiers[validated], className) },
            React.createElement("input", Object.assign({}, props, { onFocus: this.onFocus, onBlur: this.onBlur, onChange: this.handleChange, type: type, value: this.sanitizeInputValue(value), "aria-invalid": props['aria-invalid'] ? props['aria-invalid'] : validated === ValidatedOptions.error }, ariaExpandedProps, { required: isRequired, disabled: isDisabled, readOnly: !!readOnlyVariant || readOnly, ref: innerRef || this.inputRef, placeholder: placeholder }, getOUIAProps(TextInput.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe))),
            (customIcon || hasStatusIcon) && (React.createElement("span", { className: css(styles.formControlUtilities) },
                customIcon && React.createElement(FormControlIcon, { customIcon: customIcon }),
                hasStatusIcon && React.createElement(FormControlIcon, { status: validated })))));
    }
}
TextInputBase.displayName = 'TextInputBase';
TextInputBase.defaultProps = {
    'aria-label': null,
    isRequired: false,
    validated: 'default',
    isDisabled: false,
    isExpanded: false,
    type: TextInputTypes.text,
    isLeftTruncated: false,
    isStartTruncated: false,
    onChange: () => undefined,
    ouiaSafe: true
};
export const TextInput = React.forwardRef((props, ref) => (React.createElement(TextInputBase, Object.assign({}, props, { innerRef: ref }))));
TextInput.displayName = 'TextInput';
//# sourceMappingURL=TextInput.js.map