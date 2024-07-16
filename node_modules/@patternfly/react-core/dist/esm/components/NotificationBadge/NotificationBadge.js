import { __rest } from "tslib";
import * as React from 'react';
import { Button, ButtonVariant } from '../Button';
import AttentionBellIcon from '@patternfly/react-icons/dist/esm/icons/attention-bell-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
export var NotificationBadgeVariant;
(function (NotificationBadgeVariant) {
    NotificationBadgeVariant["read"] = "read";
    NotificationBadgeVariant["unread"] = "unread";
    NotificationBadgeVariant["attention"] = "attention";
})(NotificationBadgeVariant || (NotificationBadgeVariant = {}));
export const NotificationBadge = (_a) => {
    var { children, variant = NotificationBadgeVariant.read, count = 0, attentionIcon = React.createElement(AttentionBellIcon, null), icon = React.createElement(BellIcon, null), className, isExpanded = false } = _a, props = __rest(_a, ["children", "variant", "count", "attentionIcon", "icon", "className", "isExpanded"]);
    const hasCount = count > 0;
    const hasChildren = children !== undefined;
    const isAttention = variant === NotificationBadgeVariant.attention;
    const notificationIcon = isAttention ? attentionIcon : icon;
    const notificationContent = hasChildren ? children : notificationIcon;
    const [iconProp, notificationChild] = hasCount ? [notificationContent, count] : [undefined, notificationContent];
    return (React.createElement(Button, Object.assign({ variant: ButtonVariant.stateful, className: className, "aria-expanded": isExpanded, state: variant, isClicked: isExpanded, icon: iconProp }, props), notificationChild));
};
NotificationBadge.displayName = 'NotificationBadge';
//# sourceMappingURL=NotificationBadge.js.map