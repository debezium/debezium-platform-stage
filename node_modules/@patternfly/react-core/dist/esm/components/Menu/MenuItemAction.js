import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu.mjs';
import { css } from '@patternfly/react-styles';
import StarIcon from '@patternfly/react-icons/dist/esm/icons/star-icon';
import { MenuContext, MenuItemContext } from './MenuContext';
import { Button } from '../Button';
const MenuItemActionBase = (_a) => {
    var { className, icon, onClick, 'aria-label': ariaLabel, isFavorited = null, isDisabled, actionId, innerRef } = _a, props = __rest(_a, ["className", "icon", "onClick", 'aria-label', "isFavorited", "isDisabled", "actionId", "innerRef"]);
    return (React.createElement(MenuContext.Consumer, null, ({ onActionClick }) => (React.createElement(MenuItemContext.Consumer, null, ({ itemId, isDisabled: isDisabledContext }) => {
        const onClickButton = (event) => {
            // event specified on the MenuItemAction
            onClick && onClick(event);
            // event specified on the Menu
            onActionClick && onActionClick(event, itemId, actionId);
        };
        return (React.createElement("div", Object.assign({ className: css(styles.menuItemAction, isFavorited !== null && 'pf-m-favorite', isFavorited && styles.modifiers.favorited, className) }, props),
            React.createElement(Button, { "aria-label": ariaLabel, onClick: onClickButton, ref: innerRef, role: "menuitem", variant: "plain", tabIndex: -1, isDisabled: isDisabled || isDisabledContext, icon: icon === 'favorites' || isFavorited !== null ? React.createElement(StarIcon, { "aria-hidden": true }) : icon })));
    }))));
};
export const MenuItemAction = React.forwardRef((props, ref) => (React.createElement(MenuItemActionBase, Object.assign({}, props, { innerRef: ref }))));
MenuItemAction.displayName = 'MenuItemAction';
//# sourceMappingURL=MenuItemAction.js.map