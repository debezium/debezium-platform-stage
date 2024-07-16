import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { usePopper } from './thirdparty/react-popper/usePopper';
import { clearTimeouts } from '../util';
import { css } from '@patternfly/react-styles';
import '@patternfly/react-styles/css/components/Popper/Popper.css';
import { getLanguageDirection } from '../util';
const hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom',
    'top-start': 'bottom-end',
    'top-end': 'bottom-start',
    'bottom-start': 'top-end',
    'bottom-end': 'top-start',
    'left-start': 'right-end',
    'left-end': 'right-start',
    'right-start': 'left-end',
    'right-end': 'left-start'
};
const getOppositePlacement = (placement) => placement.replace(/left|right|bottom|top|top-start|top-end|bottom-start|bottom-end|right-start|right-end|left-start|left-end/g, (matched) => hash[matched]);
export const getOpacityTransition = (animationDuration) => `opacity ${animationDuration}ms cubic-bezier(.54, 1.5, .38, 1.11)`;
export const Popper = ({ trigger, popper, direction = 'down', position = 'start', placement, width, minWidth = 'trigger', maxWidth, appendTo = () => document.body, zIndex = 9999, isVisible = true, positionModifiers, distance = 0, onMouseEnter, onMouseLeave, onFocus, onBlur, onDocumentClick, onTriggerClick, onTriggerEnter, onPopperClick, onPopperMouseEnter, onPopperMouseLeave, onDocumentKeyDown, enableFlip = true, flipBehavior = 'flip', triggerRef, popperRef, animationDuration = 0, entryDelay = 0, exitDelay = 0, onHidden = () => { }, onHide = () => { }, onMount = () => { }, onShow = () => { }, onShown = () => { }, preventOverflow = false }) => {
    var _a;
    const [triggerElement, setTriggerElement] = React.useState(null);
    const [refElement, setRefElement] = React.useState(null);
    const [popperElement, setPopperElement] = React.useState(null);
    const [popperContent, setPopperContent] = React.useState(null);
    const [ready, setReady] = React.useState(false);
    const [opacity, setOpacity] = React.useState(0);
    const [internalIsVisible, setInternalIsVisible] = React.useState(isVisible);
    const transitionTimerRef = React.useRef(null);
    const showTimerRef = React.useRef(null);
    const hideTimerRef = React.useRef(null);
    const prevExitDelayRef = React.useRef();
    const refOrTrigger = refElement || triggerElement;
    const showPopper = isVisible || internalIsVisible;
    const triggerParent = (_a = ((triggerRef === null || triggerRef === void 0 ? void 0 : triggerRef.current) || triggerElement)) === null || _a === void 0 ? void 0 : _a.parentElement;
    const languageDirection = getLanguageDirection(triggerParent);
    const internalPosition = React.useMemo(() => {
        const fixedPositions = { left: 'left', right: 'right', center: 'center' };
        const positionMap = {
            ltr: Object.assign({ start: 'left', end: 'right' }, fixedPositions),
            rtl: Object.assign({ start: 'right', end: 'left' }, fixedPositions)
        };
        return positionMap[languageDirection][position];
    }, [position, languageDirection]);
    const onDocumentClickCallback = React.useCallback((event) => onDocumentClick(event, refOrTrigger, popperElement), [showPopper, triggerElement, refElement, popperElement, onDocumentClick]);
    React.useEffect(() => {
        setReady(true);
        onMount();
    }, []);
    // Cancel all timers on unmount
    React.useEffect(() => () => {
        clearTimeouts([transitionTimerRef, hideTimerRef, showTimerRef]);
    }, []);
    React.useEffect(() => {
        if (triggerRef) {
            if (triggerRef.current) {
                setRefElement(triggerRef.current);
            }
            else if (typeof triggerRef === 'function') {
                setRefElement(triggerRef());
            }
        }
    }, [triggerRef, trigger]);
    React.useEffect(() => {
        // When the popperRef is defined or the popper visibility changes, ensure the popper element is up to date
        if (popperRef) {
            if (popperRef.current) {
                setPopperElement(popperRef.current);
            }
            else if (typeof popperRef === 'function') {
                setPopperElement(popperRef());
            }
        }
    }, [showPopper, popperRef]);
    React.useEffect(() => {
        // Trigger a Popper update when content changes.
        const observer = new MutationObserver(() => {
            update && update();
        });
        popperElement && observer.observe(popperElement, { attributes: true, childList: true, subtree: true });
        return () => {
            observer.disconnect();
        };
    }, [popperElement]);
    const addEventListener = (listener, element, event, capture = false) => {
        if (listener && element) {
            element.addEventListener(event, listener, { capture });
        }
    };
    const removeEventListener = (listener, element, event, capture = false) => {
        if (listener && element) {
            element.removeEventListener(event, listener, { capture });
        }
    };
    React.useEffect(() => {
        addEventListener(onMouseEnter, refOrTrigger, 'mouseenter');
        addEventListener(onMouseLeave, refOrTrigger, 'mouseleave');
        addEventListener(onFocus, refOrTrigger, 'focus');
        addEventListener(onBlur, refOrTrigger, 'blur');
        addEventListener(onTriggerClick, refOrTrigger, 'click');
        addEventListener(onTriggerEnter, refOrTrigger, 'keydown');
        addEventListener(onPopperClick, popperElement, 'click');
        addEventListener(onPopperMouseEnter, popperElement, 'mouseenter');
        addEventListener(onPopperMouseLeave, popperElement, 'mouseleave');
        onDocumentClick && addEventListener(onDocumentClickCallback, document, 'click', true);
        addEventListener(onDocumentKeyDown, document, 'keydown', true);
        return () => {
            removeEventListener(onMouseEnter, refOrTrigger, 'mouseenter');
            removeEventListener(onMouseLeave, refOrTrigger, 'mouseleave');
            removeEventListener(onFocus, refOrTrigger, 'focus');
            removeEventListener(onBlur, refOrTrigger, 'blur');
            removeEventListener(onTriggerClick, refOrTrigger, 'click');
            removeEventListener(onTriggerEnter, refOrTrigger, 'keydown');
            removeEventListener(onPopperClick, popperElement, 'click');
            removeEventListener(onPopperMouseEnter, popperElement, 'mouseenter');
            removeEventListener(onPopperMouseLeave, popperElement, 'mouseleave');
            onDocumentClick && removeEventListener(onDocumentClickCallback, document, 'click', true);
            removeEventListener(onDocumentKeyDown, document, 'keydown', true);
        };
    }, [
        triggerElement,
        popperElement,
        onMouseEnter,
        onMouseLeave,
        onFocus,
        onBlur,
        onTriggerClick,
        onTriggerEnter,
        onPopperClick,
        onPopperMouseEnter,
        onPopperMouseLeave,
        onDocumentClick,
        onDocumentKeyDown,
        refElement
    ]);
    const getPlacement = () => {
        if (placement) {
            return placement;
        }
        let convertedPlacement = direction === 'up' ? 'top' : 'bottom';
        if (internalPosition !== 'center') {
            convertedPlacement = `${convertedPlacement}-${internalPosition === 'right' ? 'end' : 'start'}`;
        }
        return convertedPlacement;
    };
    const getPlacementMemo = React.useMemo(getPlacement, [direction, internalPosition, placement]);
    const getOppositePlacementMemo = React.useMemo(() => getOppositePlacement(getPlacement()), [direction, internalPosition, placement]);
    const widthMods = React.useMemo(() => ({
        name: 'widthMods',
        enabled: width !== undefined || minWidth !== undefined || maxWidth !== undefined,
        phase: 'beforeWrite',
        requires: ['computeStyles'],
        fn: ({ state }) => {
            const triggerWidth = state.rects.reference.width;
            if (width) {
                state.styles.popper.width = width === 'trigger' ? `${triggerWidth}px` : width;
            }
            if (minWidth) {
                state.styles.popper.minWidth = minWidth === 'trigger' ? `${triggerWidth}px` : minWidth;
            }
            if (maxWidth) {
                state.styles.popper.maxWidth = maxWidth === 'trigger' ? `${triggerWidth}px` : maxWidth;
            }
        },
        effect: ({ state }) => {
            const triggerWidth = state.elements.reference.offsetWidth;
            if (width) {
                state.elements.popper.style.width = width === 'trigger' ? `${triggerWidth}px` : width;
            }
            if (minWidth) {
                state.elements.popper.style.minWidth = minWidth === 'trigger' ? `${triggerWidth}px` : minWidth;
            }
            if (maxWidth) {
                state.elements.popper.style.maxWidth = maxWidth === 'trigger' ? `${triggerWidth}px` : maxWidth;
            }
            return () => { };
        }
    }), [width, minWidth, maxWidth]);
    const { styles: popperStyles, attributes, update, forceUpdate } = usePopper(refOrTrigger, popperElement, {
        placement: getPlacementMemo,
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, distance]
                }
            },
            {
                name: 'preventOverflow',
                enabled: preventOverflow
            },
            {
                // adds attribute [data-popper-reference-hidden] to the popper element which can be used to hide it using CSS
                name: 'hide',
                enabled: true
            },
            {
                name: 'flip',
                enabled: getPlacementMemo.startsWith('auto') || enableFlip,
                options: {
                    fallbackPlacements: flipBehavior === 'flip' ? [getOppositePlacementMemo] : flipBehavior
                }
            },
            widthMods
        ]
    });
    /** We want to forceUpdate only when a tooltip's content is dynamically updated.
     * TODO: Investigate into 3rd party libraries for a less limited/specific solution
     */
    React.useEffect(() => {
        var _a, _b, _c, _d, _e, _f, _g;
        // currentPopperContent = {tooltip children} || {dropdown children}
        const currentPopperContent = ((_d = (_c = (_b = (_a = popper === null || popper === void 0 ? void 0 : popper.props) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b[1]) === null || _c === void 0 ? void 0 : _c.props) === null || _d === void 0 ? void 0 : _d.children) || ((_g = (_f = (_e = popper === null || popper === void 0 ? void 0 : popper.props) === null || _e === void 0 ? void 0 : _e.children) === null || _f === void 0 ? void 0 : _f.props) === null || _g === void 0 ? void 0 : _g.children);
        setPopperContent(currentPopperContent);
        if (currentPopperContent && popperContent && currentPopperContent !== popperContent) {
            forceUpdate && forceUpdate();
        }
    }, [popper]);
    React.useEffect(() => {
        if (prevExitDelayRef.current < exitDelay) {
            clearTimeouts([transitionTimerRef, hideTimerRef]);
            hideTimerRef.current = setTimeout(() => {
                transitionTimerRef.current = setTimeout(() => {
                    setInternalIsVisible(false);
                }, animationDuration);
            }, exitDelay);
        }
        prevExitDelayRef.current = exitDelay;
    }, [exitDelay]);
    const show = () => {
        onShow();
        clearTimeouts([transitionTimerRef, hideTimerRef]);
        showTimerRef.current = setTimeout(() => {
            setInternalIsVisible(true);
            setOpacity(1);
            onShown();
        }, entryDelay);
    };
    const hide = () => {
        onHide();
        clearTimeouts([showTimerRef]);
        hideTimerRef.current = setTimeout(() => {
            setOpacity(0);
            transitionTimerRef.current = setTimeout(() => {
                setInternalIsVisible(false);
                onHidden();
            }, animationDuration);
        }, exitDelay);
    };
    React.useEffect(() => {
        if (isVisible) {
            show();
        }
        else {
            hide();
        }
    }, [isVisible]);
    // Returns the CSS modifier class in order to place the Popper's arrow properly
    // Depends on the position of the Popper relative to the reference element
    const modifierFromPopperPosition = () => {
        if (attributes && attributes.popper && attributes.popper['data-popper-placement']) {
            const popperPlacement = attributes.popper['data-popper-placement'];
            return positionModifiers[popperPlacement];
        }
        return positionModifiers.top;
    };
    const options = Object.assign({ className: css(popper.props && popper.props.className, positionModifiers && modifierFromPopperPosition()), style: Object.assign(Object.assign(Object.assign({}, ((popper.props && popper.props.style) || {})), popperStyles.popper), { zIndex,
            opacity, transition: getOpacityTransition(animationDuration) }) }, attributes.popper);
    const getMenuWithPopper = () => {
        const localPopper = React.cloneElement(popper, options);
        return popperRef ? (localPopper) : (React.createElement("div", { style: { display: 'contents' }, ref: (node) => setPopperElement(node === null || node === void 0 ? void 0 : node.firstElementChild) }, localPopper));
    };
    const getPopper = () => {
        if (appendTo === 'inline') {
            return getMenuWithPopper();
        }
        else {
            const target = typeof appendTo === 'function' ? appendTo() : appendTo;
            return ReactDOM.createPortal(getMenuWithPopper(), target);
        }
    };
    return (React.createElement(React.Fragment, null,
        !triggerRef && trigger && React.isValidElement(trigger) && (React.createElement("div", { style: { display: 'contents' }, ref: (node) => setTriggerElement(node === null || node === void 0 ? void 0 : node.firstElementChild) }, trigger)),
        triggerRef && trigger && React.isValidElement(trigger) && trigger,
        ready && showPopper && getPopper()));
};
Popper.displayName = 'Popper';
//# sourceMappingURL=Popper.js.map