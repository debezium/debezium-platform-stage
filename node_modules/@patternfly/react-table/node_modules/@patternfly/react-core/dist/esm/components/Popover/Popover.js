import { __rest } from "tslib";
/* eslint-disable no-console */
import * as React from 'react';
import { KeyTypes } from '../../helpers/constants';
import styles from '@patternfly/react-styles/css/components/Popover/popover.mjs';
import { css } from '@patternfly/react-styles';
import { PopoverContext } from './PopoverContext';
import { PopoverContent } from './PopoverContent';
import { PopoverBody } from './PopoverBody';
import { PopoverHeader } from './PopoverHeader';
import { PopoverFooter } from './PopoverFooter';
import { PopoverCloseButton } from './PopoverCloseButton';
import { PopoverArrow } from './PopoverArrow';
import popoverMaxWidth from '@patternfly/react-tokens/dist/esm/c_popover_MaxWidth';
import popoverMinWidth from '@patternfly/react-tokens/dist/esm/c_popover_MinWidth';
import { FocusTrap } from '../../helpers';
import { Popper } from '../../helpers/Popper/Popper';
import { getUniqueId } from '../../helpers/util';
export var PopoverPosition;
(function (PopoverPosition) {
    PopoverPosition["auto"] = "auto";
    PopoverPosition["top"] = "top";
    PopoverPosition["bottom"] = "bottom";
    PopoverPosition["left"] = "left";
    PopoverPosition["right"] = "right";
    PopoverPosition["topStart"] = "top-start";
    PopoverPosition["topEnd"] = "top-end";
    PopoverPosition["bottomStart"] = "bottom-start";
    PopoverPosition["bottomEnd"] = "bottom-end";
    PopoverPosition["leftStart"] = "left-start";
    PopoverPosition["leftEnd"] = "left-end";
    PopoverPosition["rightStart"] = "right-start";
    PopoverPosition["rightEnd"] = "right-end";
})(PopoverPosition || (PopoverPosition = {}));
const alertStyle = {
    custom: styles.modifiers.custom,
    info: styles.modifiers.info,
    success: styles.modifiers.success,
    warning: styles.modifiers.warning,
    danger: styles.modifiers.danger
};
export const Popover = (_a) => {
    var { children, position = 'top', enableFlip = true, className = '', isVisible = null, shouldClose = () => null, shouldOpen = () => null, 'aria-label': ariaLabel = '', bodyContent, headerContent = null, headerComponent = 'h6', headerIcon = null, alertSeverityVariant, alertSeverityScreenReaderText, footerContent = null, appendTo = () => document.body, hideOnOutsideClick = true, onHide = () => null, onHidden = () => null, onShow = () => null, onShown = () => null, onMount = () => null, zIndex = 9999, triggerAction = 'click', minWidth = popoverMinWidth && popoverMinWidth.value, maxWidth = popoverMaxWidth && popoverMaxWidth.value, closeBtnAriaLabel = 'Close', showClose = true, distance = 25, flipBehavior = [
        'top',
        'bottom',
        'left',
        'right',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
        'right-start',
        'right-end'
    ], animationDuration = 300, id, withFocusTrap: propWithFocusTrap, triggerRef, hasNoPadding = false, hasAutoWidth = false, elementToFocus } = _a, rest = __rest(_a, ["children", "position", "enableFlip", "className", "isVisible", "shouldClose", "shouldOpen", 'aria-label', "bodyContent", "headerContent", "headerComponent", "headerIcon", "alertSeverityVariant", "alertSeverityScreenReaderText", "footerContent", "appendTo", "hideOnOutsideClick", "onHide", "onHidden", "onShow", "onShown", "onMount", "zIndex", "triggerAction", "minWidth", "maxWidth", "closeBtnAriaLabel", "showClose", "distance", "flipBehavior", "animationDuration", "id", "withFocusTrap", "triggerRef", "hasNoPadding", "hasAutoWidth", "elementToFocus"]);
    // could make this a prop in the future (true | false | 'toggle')
    // const hideOnClick = true;
    const uniqueId = id || getUniqueId();
    const triggerManually = isVisible !== null;
    const [visible, setVisible] = React.useState(false);
    const [focusTrapActive, setFocusTrapActive] = React.useState(Boolean(propWithFocusTrap));
    const popoverRef = React.useRef(null);
    React.useEffect(() => {
        onMount();
    }, []);
    React.useEffect(() => {
        if (triggerManually) {
            if (isVisible) {
                show(undefined, true);
            }
            else {
                hide();
            }
        }
    }, [isVisible, triggerManually]);
    const show = (event, withFocusTrap) => {
        event && onShow(event);
        setVisible(true);
        propWithFocusTrap !== false && withFocusTrap && setFocusTrapActive(true);
    };
    const hide = (event) => {
        event && onHide(event);
        setVisible(false);
    };
    const positionModifiers = {
        top: styles.modifiers.top,
        bottom: styles.modifiers.bottom,
        left: styles.modifiers.left,
        right: styles.modifiers.right,
        'top-start': styles.modifiers.topLeft,
        'top-end': styles.modifiers.topRight,
        'bottom-start': styles.modifiers.bottomLeft,
        'bottom-end': styles.modifiers.bottomRight,
        'left-start': styles.modifiers.leftTop,
        'left-end': styles.modifiers.leftBottom,
        'right-start': styles.modifiers.rightTop,
        'right-end': styles.modifiers.rightBottom
    };
    const hasCustomMinWidth = minWidth !== popoverMinWidth.value;
    const hasCustomMaxWidth = maxWidth !== popoverMaxWidth.value;
    const onDocumentKeyDown = (event) => {
        if (event.key === KeyTypes.Escape && visible) {
            if (triggerManually) {
                shouldClose(event, hide);
            }
            else {
                hide(event);
            }
        }
    };
    const onDocumentClick = (event, triggerElement, popperElement) => {
        if (hideOnOutsideClick && visible) {
            const isFromChild = popperElement && popperElement.contains(event.target);
            const isFromTrigger = triggerElement && triggerElement.contains(event.target);
            if (isFromChild || isFromTrigger) {
                // if clicked within the popper or on the trigger, ignore this event
                return;
            }
            if (triggerManually) {
                shouldClose(event, hide);
            }
            else {
                hide(event);
            }
        }
    };
    const onTriggerClick = (event) => {
        if (triggerManually) {
            if (visible) {
                shouldClose(event, hide);
            }
            else {
                shouldOpen(event, show);
            }
        }
        else {
            if (visible) {
                hide(event);
            }
            else {
                show(event, true);
            }
        }
    };
    const onContentMouseDown = () => {
        if (focusTrapActive) {
            setFocusTrapActive(false);
        }
    };
    const onMouseEnter = (event) => {
        if (triggerManually) {
            shouldOpen(event, show);
        }
        else {
            show(event, false);
        }
    };
    const onMouseLeave = (event) => {
        if (triggerManually) {
            shouldClose(event, hide);
        }
        else {
            hide(event);
        }
    };
    const onFocus = (event) => {
        if (triggerManually) {
            shouldOpen(event, show);
        }
        else {
            show(event, false);
        }
    };
    const onBlur = (event) => {
        if (triggerManually) {
            shouldClose(event, hide);
        }
        else {
            hide(event);
        }
    };
    const closePopover = (event) => {
        event.stopPropagation();
        if (triggerManually) {
            shouldClose(event, hide);
        }
        else {
            hide(event);
        }
    };
    const content = (React.createElement(FocusTrap, Object.assign({ ref: popoverRef, active: focusTrapActive, focusTrapOptions: {
            returnFocusOnDeactivate: propWithFocusTrap !== false,
            clickOutsideDeactivates: true,
            // FocusTrap's initialFocus can accept false as a value to prevent initial focus.
            // We want to prevent this in case false is ever passed in.
            initialFocus: elementToFocus || undefined,
            checkCanFocusTrap: (containers) => new Promise((resolve) => {
                const interval = setInterval(() => {
                    if (containers.every((container) => getComputedStyle(container).visibility !== 'hidden')) {
                        resolve();
                        clearInterval(interval);
                    }
                }, 10);
            }),
            tabbableOptions: { displayCheck: 'none' },
            fallbackFocus: () => {
                // If the popover's trigger is focused but scrolled out of view,
                // FocusTrap will throw an error when the Enter button is used on the trigger.
                // That is because the Popover is hidden when its trigger is out of view.
                // Provide a fallback in that case.
                let node = null;
                if (document && document.activeElement) {
                    node = document.activeElement;
                }
                return node;
            }
        }, preventScrollOnDeactivate: true, className: css(styles.popover, alertSeverityVariant && alertStyle[alertSeverityVariant], hasNoPadding && styles.modifiers.noPadding, hasAutoWidth && styles.modifiers.widthAuto, className), role: "dialog", "aria-modal": "true", "aria-label": headerContent ? undefined : ariaLabel, "aria-labelledby": headerContent ? `popover-${uniqueId}-header` : undefined, "aria-describedby": `popover-${uniqueId}-body`, onMouseDown: onContentMouseDown, style: {
            minWidth: hasCustomMinWidth ? minWidth : null,
            maxWidth: hasCustomMaxWidth ? maxWidth : null
        } }, rest),
        React.createElement(PopoverArrow, null),
        React.createElement(PopoverContent, null,
            showClose && triggerAction === 'click' && (React.createElement(PopoverCloseButton, { onClose: closePopover, "aria-label": closeBtnAriaLabel })),
            headerContent && (React.createElement(PopoverHeader, { id: `popover-${uniqueId}-header`, icon: headerIcon, alertSeverityVariant: alertSeverityVariant, alertSeverityScreenReaderText: alertSeverityScreenReaderText || `${alertSeverityVariant} alert:`, titleHeadingLevel: headerComponent }, typeof headerContent === 'function' ? headerContent(hide) : headerContent)),
            React.createElement(PopoverBody, { id: `popover-${uniqueId}-body` }, typeof bodyContent === 'function' ? bodyContent(hide) : bodyContent),
            footerContent && (React.createElement(PopoverFooter, { id: `popover-${uniqueId}-footer` }, typeof footerContent === 'function' ? footerContent(hide) : footerContent)))));
    return (React.createElement(PopoverContext.Provider, { value: { headerComponent } },
        React.createElement(Popper, { trigger: children, triggerRef: triggerRef, popper: content, popperRef: popoverRef, minWidth: minWidth, appendTo: appendTo, isVisible: visible, onMouseEnter: triggerAction === 'hover' && onMouseEnter, onMouseLeave: triggerAction === 'hover' && onMouseLeave, onPopperMouseEnter: triggerAction === 'hover' && onMouseEnter, onPopperMouseLeave: triggerAction === 'hover' && onMouseLeave, onFocus: triggerAction === 'hover' && onFocus, onBlur: triggerAction === 'hover' && onBlur, positionModifiers: positionModifiers, distance: distance, placement: position, onTriggerClick: triggerAction === 'click' && onTriggerClick, onDocumentClick: onDocumentClick, onDocumentKeyDown: onDocumentKeyDown, enableFlip: enableFlip, zIndex: zIndex, flipBehavior: flipBehavior, animationDuration: animationDuration, onHidden: onHidden, onShown: onShown, onHide: () => setFocusTrapActive(false) })));
};
Popover.displayName = 'Popover';
//# sourceMappingURL=Popover.js.map