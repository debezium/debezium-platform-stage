import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard.mjs';
import { Button, ButtonVariant } from '../../../components/Button';
import { ActionList, ActionListGroup, ActionListItem } from '../../../components/ActionList';
export const WizardFooterInternal = ({ onNext, onBack, onClose, isValid, firstStep, activeStep, nextButtonText, backButtonText, cancelButtonText }) => (React.createElement("footer", { className: css(styles.wizardFooter) },
    React.createElement(ActionList, null,
        React.createElement(ActionListGroup, null,
            !activeStep.hideBackButton && (React.createElement(ActionListItem, null,
                React.createElement(Button, { variant: ButtonVariant.secondary, onClick: onBack, isDisabled: firstStep }, backButtonText))),
            React.createElement(ActionListItem, null,
                React.createElement(Button, { variant: ButtonVariant.primary, type: "submit", onClick: onNext, isDisabled: !isValid }, nextButtonText))),
        !activeStep.hideCancelButton && (React.createElement(ActionListGroup, null,
            React.createElement(ActionListItem, null,
                React.createElement(Button, { variant: ButtonVariant.link, onClick: onClose }, cancelButtonText)))))));
WizardFooterInternal.displayName = 'WizardFooterInternal';
//# sourceMappingURL=WizardFooterInternal.js.map