import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer.mjs';
export const NotificationDrawerList = (_a) => {
    var { children, className = '', isHidden = false, 'aria-label': ariaLabel } = _a, props = __rest(_a, ["children", "className", "isHidden", 'aria-label']);
    return (React.createElement("ul", Object.assign({}, props, { className: css(`${styles.notificationDrawer}__list`, className), hidden: isHidden, role: "list", "aria-label": ariaLabel }), children));
};
NotificationDrawerList.displayName = 'NotificationDrawerList';
//# sourceMappingURL=NotificationDrawerList.js.map