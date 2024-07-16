"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemAction = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const menu_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Menu/menu"));
const react_styles_1 = require("@patternfly/react-styles");
const star_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/star-icon'));
const MenuContext_1 = require("./MenuContext");
const Button_1 = require("../Button");
const MenuItemActionBase = (_a) => {
    var { className, icon, onClick, 'aria-label': ariaLabel, isFavorited = null, isDisabled, actionId, innerRef } = _a, props = tslib_1.__rest(_a, ["className", "icon", "onClick", 'aria-label', "isFavorited", "isDisabled", "actionId", "innerRef"]);
    return (React.createElement(MenuContext_1.MenuContext.Consumer, null, ({ onActionClick }) => (React.createElement(MenuContext_1.MenuItemContext.Consumer, null, ({ itemId, isDisabled: isDisabledContext }) => {
        const onClickButton = (event) => {
            // event specified on the MenuItemAction
            onClick && onClick(event);
            // event specified on the Menu
            onActionClick && onActionClick(event, itemId, actionId);
        };
        return (React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(menu_1.default.menuItemAction, isFavorited !== null && 'pf-m-favorite', isFavorited && menu_1.default.modifiers.favorited, className) }, props),
            React.createElement(Button_1.Button, { "aria-label": ariaLabel, onClick: onClickButton, ref: innerRef, role: "menuitem", variant: "plain", tabIndex: -1, isDisabled: isDisabled || isDisabledContext, icon: icon === 'favorites' || isFavorited !== null ? React.createElement(star_icon_1.default, { "aria-hidden": true }) : icon })));
    }))));
};
exports.MenuItemAction = React.forwardRef((props, ref) => (React.createElement(MenuItemActionBase, Object.assign({}, props, { innerRef: ref }))));
exports.MenuItemAction.displayName = 'MenuItemAction';
//# sourceMappingURL=MenuItemAction.js.map