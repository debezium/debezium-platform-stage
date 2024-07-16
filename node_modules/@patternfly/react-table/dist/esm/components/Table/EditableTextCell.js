import * as React from 'react';
import { TextInput } from '@patternfly/react-core/dist/esm/components/TextInput';
import inlineStyles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit.mjs';
import formStyles from '@patternfly/react-styles/css/components/Form/form.mjs';
import { css } from '@patternfly/react-styles';
export const EditableTextCell = ({ value, rowIndex, cellIndex, props, handleTextInputChange, inputAriaLabel, isDisabled = false }) => (React.createElement(React.Fragment, null,
    React.createElement("div", { className: inlineStyles.inlineEditValue }, value),
    React.createElement("div", { className: inlineStyles.inlineEditInput },
        React.createElement(TextInput, { isDisabled: isDisabled, value: props.editableValue !== undefined ? props.editableValue : value, validated: props.isValid !== false ? 'default' : 'error', type: "text", onChange: (event, newValue) => {
                handleTextInputChange(newValue, event, rowIndex, cellIndex);
            }, "aria-label": inputAriaLabel }),
        React.createElement("div", { className: css(formStyles.formHelperText), "aria-live": "polite" }, props.errorText))));
EditableTextCell.displayName = 'EditableTextCell';
//# sourceMappingURL=EditableTextCell.js.map