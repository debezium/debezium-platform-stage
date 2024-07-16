import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard.mjs';
import { css } from '@patternfly/react-styles';
import { useOUIAProps } from '../../../helpers';
export const WizardNav = ({ children, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, isOpen = false, returnList = false, ouiaId, ouiaSafe = true }) => {
    const ouiaProps = useOUIAProps(WizardNav.displayName, ouiaId, ouiaSafe);
    const innerList = (React.createElement("ol", { className: css(styles.wizardNavList), role: "list" }, children));
    if (returnList) {
        return innerList;
    }
    return (React.createElement("nav", Object.assign({ className: css(styles.wizardNav, isOpen && styles.modifiers.expanded), "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy }, ouiaProps),
        React.createElement("ol", { className: css(styles.wizardNavList), role: "list" }, children)));
};
WizardNav.displayName = 'WizardNav';
//# sourceMappingURL=WizardNav.js.map