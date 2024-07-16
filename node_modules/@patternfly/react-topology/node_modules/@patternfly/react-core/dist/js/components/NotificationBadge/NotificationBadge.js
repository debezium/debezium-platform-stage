"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationBadge = exports.NotificationBadgeVariant = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const Button_1 = require("../Button");
const attention_bell_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/attention-bell-icon'));
const bell_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/bell-icon'));
var NotificationBadgeVariant;
(function (NotificationBadgeVariant) {
    NotificationBadgeVariant["read"] = "read";
    NotificationBadgeVariant["unread"] = "unread";
    NotificationBadgeVariant["attention"] = "attention";
})(NotificationBadgeVariant || (exports.NotificationBadgeVariant = NotificationBadgeVariant = {}));
const NotificationBadge = (_a) => {
    var { children, variant = NotificationBadgeVariant.read, count = 0, attentionIcon = React.createElement(attention_bell_icon_1.default, null), icon = React.createElement(bell_icon_1.default, null), className, isExpanded = false } = _a, props = tslib_1.__rest(_a, ["children", "variant", "count", "attentionIcon", "icon", "className", "isExpanded"]);
    const hasCount = count > 0;
    const hasChildren = children !== undefined;
    const isAttention = variant === NotificationBadgeVariant.attention;
    const notificationIcon = isAttention ? attentionIcon : icon;
    const notificationContent = hasChildren ? children : notificationIcon;
    const [iconProp, notificationChild] = hasCount ? [notificationContent, count] : [undefined, notificationContent];
    return (React.createElement(Button_1.Button, Object.assign({ variant: Button_1.ButtonVariant.stateful, className: className, "aria-expanded": isExpanded, state: variant, isClicked: isExpanded, icon: iconProp }, props), notificationChild));
};
exports.NotificationBadge = NotificationBadge;
exports.NotificationBadge.displayName = 'NotificationBadge';
//# sourceMappingURL=NotificationBadge.js.map