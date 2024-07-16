import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Form/form.mjs';
import { ASTERISK } from '../../helpers/htmlConstants';
import { css } from '@patternfly/react-styles';
import { GenerateId } from '../../helpers/GenerateId/GenerateId';
export const FormGroup = (_a) => {
    var { children = null, className = '', label, labelInfo, labelHelp, isRequired = false, isInline = false, hasNoPaddingTop = false, isStack = false, fieldId, role } = _a, props = __rest(_a, ["children", "className", "label", "labelInfo", "labelHelp", "isRequired", "isInline", "hasNoPaddingTop", "isStack", "fieldId", "role"]);
    const isGroupOrRadioGroup = role === 'group' || role === 'radiogroup';
    const LabelComponent = isGroupOrRadioGroup ? 'span' : 'label';
    const labelContent = (React.createElement(React.Fragment, null,
        React.createElement(LabelComponent, Object.assign({ className: css(styles.formLabel) }, (!isGroupOrRadioGroup && { htmlFor: fieldId })),
            React.createElement("span", { className: css(styles.formLabelText) }, label),
            isRequired && (React.createElement("span", { className: css(styles.formLabelRequired), "aria-hidden": "true" },
                ' ',
                ASTERISK))),
        React.createElement(React.Fragment, null, "\u00A0\u00A0"),
        React.isValidElement(labelHelp) && React.createElement("span", { className: styles.formGroupLabelHelp }, labelHelp)));
    return (React.createElement(GenerateId, null, (randomId) => (React.createElement("div", Object.assign({ className: css(styles.formGroup, className) }, (role && { role }), (isGroupOrRadioGroup && { 'aria-labelledby': `${fieldId || randomId}-legend` }), props),
        label && (React.createElement("div", Object.assign({ className: css(styles.formGroupLabel, labelInfo && styles.modifiers.info, hasNoPaddingTop && styles.modifiers.noPaddingTop) }, (isGroupOrRadioGroup && { id: `${fieldId || randomId}-legend` })),
            labelInfo && (React.createElement(React.Fragment, null,
                React.createElement("div", { className: css(styles.formGroupLabelMain) }, labelContent),
                React.createElement("div", { className: css(styles.formGroupLabelInfo) }, labelInfo))),
            !labelInfo && labelContent)),
        React.createElement("div", { className: css(styles.formGroupControl, isInline && styles.modifiers.inline, isStack && styles.modifiers.stack) }, children)))));
};
FormGroup.displayName = 'FormGroup';
//# sourceMappingURL=FormGroup.js.map