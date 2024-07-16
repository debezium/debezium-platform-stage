import { __rest } from "tslib";
import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard.mjs';
import { Button, ButtonVariant } from '../Button';
import { isCustomWizardFooter } from './types';
import { ActionList, ActionListGroup, ActionListItem } from '../ActionList';
export const WizardFooterWrapper = (_a) => {
    var { children, className } = _a, props = __rest(_a, ["children", "className"]);
    return (React.createElement("footer", Object.assign({ className: css(styles.wizardFooter, className) }, props), children));
};
export const WizardFooter = (_a) => {
    var { activeStep } = _a, internalProps = __rest(_a, ["activeStep"]);
    const activeStepFooter = !isCustomWizardFooter(activeStep === null || activeStep === void 0 ? void 0 : activeStep.footer) && (activeStep === null || activeStep === void 0 ? void 0 : activeStep.footer);
    return React.createElement(InternalWizardFooter, Object.assign({}, internalProps, activeStepFooter));
};
const InternalWizardFooter = (_a) => {
    var { onNext, onBack, onClose, isNextDisabled, isBackDisabled, isBackHidden, isCancelHidden, nextButtonText = 'Next', backButtonText = 'Back', cancelButtonText = 'Cancel', nextButtonProps, backButtonProps, cancelButtonProps, className } = _a, props = __rest(_a, ["onNext", "onBack", "onClose", "isNextDisabled", "isBackDisabled", "isBackHidden", "isCancelHidden", "nextButtonText", "backButtonText", "cancelButtonText", "nextButtonProps", "backButtonProps", "cancelButtonProps", "className"]);
    return (React.createElement(WizardFooterWrapper, Object.assign({ className: className }, props),
        React.createElement(ActionList, null,
            React.createElement(ActionListGroup, null,
                !isBackHidden && (React.createElement(ActionListItem, null,
                    React.createElement(Button, Object.assign({ variant: ButtonVariant.secondary, onClick: onBack, isDisabled: isBackDisabled }, backButtonProps), backButtonText))),
                React.createElement(ActionListItem, null,
                    React.createElement(Button, Object.assign({ variant: ButtonVariant.primary, type: "submit", onClick: onNext, isDisabled: isNextDisabled }, nextButtonProps), nextButtonText))),
            !isCancelHidden && (React.createElement(ActionListGroup, null,
                React.createElement(ActionListItem, null,
                    React.createElement(Button, Object.assign({ variant: ButtonVariant.link, onClick: onClose }, cancelButtonProps), cancelButtonText)))))));
};
WizardFooterWrapper.displayName = 'WizardFooterWrapper';
WizardFooter.displayName = 'WizardFooter';
//# sourceMappingURL=WizardFooter.js.map