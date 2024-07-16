import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard.mjs';
import { css } from '@patternfly/react-styles';
import { Button } from '../../../components/Button';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
export const WizardHeader = ({ onClose = () => undefined, title, description, hideClose, closeButtonAriaLabel, titleId, descriptionComponent: Component = 'div', descriptionId }) => (React.createElement("div", { className: css(styles.wizardHeader) },
    !hideClose && (React.createElement("div", { className: css(styles.wizardClose) },
        React.createElement(Button, { variant: "plain", "aria-label": closeButtonAriaLabel, onClick: onClose, icon: React.createElement(TimesIcon, { "aria-hidden": "true" }) }))),
    React.createElement("div", { className: css(styles.wizardTitle) },
        React.createElement("h2", { className: css(styles.wizardTitleText), id: titleId }, title || React.createElement(React.Fragment, null, "\u00A0"))),
    description && (React.createElement(Component, { className: css(styles.wizardDescription), id: descriptionId }, description))));
WizardHeader.displayName = 'WizardHeader';
//# sourceMappingURL=WizardHeader.js.map