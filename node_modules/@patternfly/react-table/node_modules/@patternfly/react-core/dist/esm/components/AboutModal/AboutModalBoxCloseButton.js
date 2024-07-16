import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AboutModalBox/about-modal-box.mjs';
import { Button } from '../Button';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
export const AboutModalBoxCloseButton = (_a) => {
    var { onClose = (_e) => undefined, 'aria-label': ariaLabel = 'Close Dialog' } = _a, props = __rest(_a, ["onClose", 'aria-label']);
    return (React.createElement("div", Object.assign({ className: css(styles.aboutModalBoxClose) }, props),
        React.createElement(Button, { variant: "plain", onClick: onClose, "aria-label": ariaLabel, icon: React.createElement(TimesIcon, null) })));
};
AboutModalBoxCloseButton.displayName = 'AboutModalBoxCloseButton';
//# sourceMappingURL=AboutModalBoxCloseButton.js.map