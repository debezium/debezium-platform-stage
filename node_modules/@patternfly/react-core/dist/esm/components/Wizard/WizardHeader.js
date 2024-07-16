import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard.mjs';
import { css } from '@patternfly/react-styles';
import { Button } from '../Button';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
export const WizardHeader = (_a) => {
    var { onClose = () => undefined, title, description, isCloseHidden, closeButtonAriaLabel, titleId, descriptionComponent: Component = 'div', descriptionId, className } = _a, props = __rest(_a, ["onClose", "title", "description", "isCloseHidden", "closeButtonAriaLabel", "titleId", "descriptionComponent", "descriptionId", "className"]);
    return (React.createElement("div", Object.assign({ className: css(styles.wizardHeader, className) }, props),
        !isCloseHidden && (React.createElement("div", { className: css(styles.wizardClose) },
            React.createElement(Button, { variant: "plain", "aria-label": closeButtonAriaLabel, onClick: onClose, icon: React.createElement(TimesIcon, { "aria-hidden": "true" }) }))),
        React.createElement("div", { className: css(styles.wizardTitle) },
            React.createElement("h2", { className: css(styles.wizardTitleText), id: titleId }, title || React.createElement(React.Fragment, null, "\u00A0"))),
        description && (React.createElement(Component, { className: css(styles.wizardDescription), id: descriptionId }, description))));
};
WizardHeader.displayName = 'WizardHeader';
//# sourceMappingURL=WizardHeader.js.map