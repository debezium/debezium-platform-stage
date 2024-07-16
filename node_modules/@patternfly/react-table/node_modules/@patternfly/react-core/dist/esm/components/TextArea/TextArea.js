import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/FormControl/form-control.mjs';
import { css } from '@patternfly/react-styles';
import { capitalize, ValidatedOptions, canUseDOM } from '../../helpers';
import { FormControlIcon } from '../FormControl/FormControlIcon';
export var TextAreResizeOrientation;
(function (TextAreResizeOrientation) {
    TextAreResizeOrientation["horizontal"] = "horizontal";
    TextAreResizeOrientation["vertical"] = "vertical";
    TextAreResizeOrientation["both"] = "both";
})(TextAreResizeOrientation || (TextAreResizeOrientation = {}));
export var TextAreaReadOnlyVariant;
(function (TextAreaReadOnlyVariant) {
    TextAreaReadOnlyVariant["default"] = "default";
    TextAreaReadOnlyVariant["plain"] = "plain";
})(TextAreaReadOnlyVariant || (TextAreaReadOnlyVariant = {}));
class TextAreaBase extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.setAutoHeight = (field) => {
            const parent = field.parentElement;
            parent.style.setProperty('height', 'inherit');
            const computed = window.getComputedStyle(field);
            // Calculate the height
            const height = parseInt(computed.getPropertyValue('border-top-width')) +
                parseInt(computed.getPropertyValue('padding-top')) +
                field.scrollHeight +
                parseInt(computed.getPropertyValue('padding-bottom')) +
                parseInt(computed.getPropertyValue('border-bottom-width'));
            parent.style.setProperty('height', `${height}px`);
        };
        this.handleChange = (event) => {
            // https://gomakethings.com/automatically-expand-a-textarea-as-the-user-types-using-vanilla-javascript/
            const field = event.currentTarget;
            if (this.props.autoResize && canUseDOM) {
                this.setAutoHeight(field);
            }
            if (this.props.onChange) {
                this.props.onChange(event, field.value);
            }
        };
        if (!props.id && !props['aria-label']) {
            // eslint-disable-next-line no-console
            console.error('TextArea: TextArea requires either an id or aria-label to be specified');
        }
    }
    componentDidMount() {
        const inputRef = this.props.innerRef || this.inputRef;
        if (this.props.autoResize && canUseDOM) {
            const field = inputRef.current;
            this.setAutoHeight(field);
        }
    }
    render() {
        const _a = this.props, { className, value, validated, isRequired, isDisabled, readOnlyVariant, resizeOrientation, innerRef, disabled, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        autoResize, onChange, 
        /* eslint-enable @typescript-eslint/no-unused-vars */
        onBlur, onFocus } = _a, props = __rest(_a, ["className", "value", "validated", "isRequired", "isDisabled", "readOnlyVariant", "resizeOrientation", "innerRef", "disabled", "autoResize", "onChange", "onBlur", "onFocus"]);
        const orientation = `resize${capitalize(resizeOrientation)}`;
        const hasStatusIcon = ['success', 'error', 'warning'].includes(validated);
        return (React.createElement("span", { className: css(styles.formControl, readOnlyVariant && styles.modifiers.readonly, readOnlyVariant === 'plain' && styles.modifiers.plain, resizeOrientation && styles.modifiers[orientation], isDisabled && styles.modifiers.disabled, hasStatusIcon && styles.modifiers[validated], className) },
            React.createElement("textarea", Object.assign({ onChange: this.handleChange, onFocus: onFocus, onBlur: onBlur }, (typeof this.props.defaultValue !== 'string' && { value }), { "aria-invalid": validated === ValidatedOptions.error, required: isRequired, disabled: isDisabled || disabled, readOnly: !!readOnlyVariant, ref: innerRef || this.inputRef }, props)),
            hasStatusIcon && (React.createElement("span", { className: css(styles.formControlUtilities) },
                React.createElement(FormControlIcon, { status: validated })))));
    }
}
TextAreaBase.displayName = 'TextArea';
TextAreaBase.defaultProps = {
    innerRef: React.createRef(),
    className: '',
    isRequired: false,
    isDisabled: false,
    validated: 'default',
    resizeOrientation: 'both',
    'aria-label': null
};
export const TextArea = React.forwardRef((props, ref) => (React.createElement(TextAreaBase, Object.assign({}, props, { innerRef: ref }))));
TextArea.displayName = 'TextArea';
//# sourceMappingURL=TextArea.js.map