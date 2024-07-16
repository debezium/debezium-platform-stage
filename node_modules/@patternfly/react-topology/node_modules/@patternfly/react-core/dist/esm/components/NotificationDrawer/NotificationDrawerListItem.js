import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer.mjs';
export const NotificationDrawerListItem = (_a) => {
    var { children = null, className = '', isHoverable = true, isRead = false, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onClick = (event) => undefined, readStateScreenReaderText, tabIndex = 0, variant = 'custom' } = _a, props = __rest(_a, ["children", "className", "isHoverable", "isRead", "onClick", "readStateScreenReaderText", "tabIndex", "variant"]);
    const onKeyDown = (event) => {
        if (!event.target.parentElement.classList.contains(styles.notificationDrawerListItemAction)) {
            // Accessibility function. Click on the list item when pressing Enter or Space on it.
            if (event.key === 'Enter' || event.key === ' ') {
                event.target.click();
            }
        }
    };
    let readStateSRText;
    if (readStateScreenReaderText) {
        readStateSRText = readStateScreenReaderText;
    }
    else {
        readStateSRText = isRead ? 'read' : 'unread';
    }
    return (React.createElement("li", Object.assign({}, props, { className: css(styles.notificationDrawerListItem, isHoverable && styles.modifiers.hoverable, styles.modifiers[variant], isRead && styles.modifiers.read, className), tabIndex: tabIndex, onClick: (e) => onClick(e), onKeyDown: onKeyDown }),
        React.createElement("span", { className: "pf-v6-screen-reader" }, readStateSRText),
        children));
};
NotificationDrawerListItem.displayName = 'NotificationDrawerListItem';
//# sourceMappingURL=NotificationDrawerListItem.js.map