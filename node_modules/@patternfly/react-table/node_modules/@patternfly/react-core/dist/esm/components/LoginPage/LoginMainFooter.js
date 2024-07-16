import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Login/login.mjs';
export const LoginMainFooter = (_a) => {
    var { children = null, socialMediaLoginContent = null, signUpForAccountMessage = null, forgotCredentials = null, className = '', socialMediaLoginAriaLabel } = _a, props = __rest(_a, ["children", "socialMediaLoginContent", "signUpForAccountMessage", "forgotCredentials", "className", "socialMediaLoginAriaLabel"]);
    return (React.createElement("div", Object.assign({ className: css(styles.loginMainFooter, className) }, props),
        children,
        socialMediaLoginContent && (React.createElement("ul", { className: css(styles.loginMainFooterLinks), "aria-label": socialMediaLoginAriaLabel, role: "list" }, socialMediaLoginContent)),
        (signUpForAccountMessage || forgotCredentials) && (React.createElement("div", { className: css(styles.loginMainFooterBand) },
            signUpForAccountMessage,
            forgotCredentials))));
};
LoginMainFooter.displayName = 'LoginMainFooter';
//# sourceMappingURL=LoginMainFooter.js.map