import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard.mjs';
import { css } from '@patternfly/react-styles';
export const WizardNav = (_a) => {
    var { children, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, isExpanded = false, isInnerList = false, className } = _a, props = __rest(_a, ["children", 'aria-label', 'aria-labelledby', "isExpanded", "isInnerList", "className"]);
    if (isInnerList) {
        return (React.createElement("ol", Object.assign({ className: css(styles.wizardNavList, className), role: "list" }, props), children));
    }
    return (React.createElement("nav", Object.assign({ className: css(styles.wizardNav, isExpanded && styles.modifiers.expanded, className), "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy }, props),
        React.createElement("ol", { className: css(styles.wizardNavList), role: "list" }, children)));
};
WizardNav.displayName = 'WizardNav';
//# sourceMappingURL=WizardNav.js.map