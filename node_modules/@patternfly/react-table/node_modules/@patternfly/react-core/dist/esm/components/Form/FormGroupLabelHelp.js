import { __rest } from "tslib";
import React from 'react';
import { Button } from '../Button';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import { KeyTypes } from '../../helpers/constants';
const FormGroupLabelHelpBase = (_a) => {
    var { 'aria-label': ariaLabel, className, innerRef } = _a, props = __rest(_a, ['aria-label', "className", "innerRef"]);
    const ref = React.useRef(null);
    const buttonRef = innerRef || ref;
    const isMutableRef = (ref) => typeof ref === 'object' && ref !== null && 'current' in ref && ref.current !== undefined;
    const handleKeyDown = (event) => {
        if ([KeyTypes.Space, KeyTypes.Enter].includes(event.key) && isMutableRef(buttonRef) && buttonRef.current) {
            event.preventDefault();
            buttonRef.current.click();
        }
    };
    return (React.createElement(Button, Object.assign({ component: "span", isInline: true, ref: buttonRef, onKeyDown: handleKeyDown, "aria-label": ariaLabel, className: className, variant: "plain", hasNoPadding: true }, props, { icon: React.createElement(QuestionCircleIcon, null) })));
};
export const FormGroupLabelHelp = React.forwardRef((props, ref) => (React.createElement(FormGroupLabelHelpBase, Object.assign({ innerRef: ref }, props))));
FormGroupLabelHelp.displayName = 'FormGroupLabelHelp';
//# sourceMappingURL=FormGroupLabelHelp.js.map