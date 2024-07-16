"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawerPanelContent = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const drawer_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Drawer/drawer"));
const react_styles_1 = require("@patternfly/react-styles");
const Drawer_1 = require("./Drawer");
const util_1 = require("../../helpers/util");
const GenerateId_1 = require("../../helpers/GenerateId/GenerateId");
const FocusTrap_1 = require("../../helpers/FocusTrap/FocusTrap");
const c_drawer__panel_md_FlexBasis_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/c_drawer__panel_md_FlexBasis'));
const c_drawer__panel_md_FlexBasis_min_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/c_drawer__panel_md_FlexBasis_min'));
const c_drawer__panel_md_FlexBasis_max_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/c_drawer__panel_md_FlexBasis_max'));
let isResizing = null;
let newSize = 0;
const DrawerPanelContent = (_a) => {
    var { className, id, children, hasNoBorder = false, isResizable = false, onResize, minSize, defaultSize, maxSize, increment = 5, resizeAriaLabel = 'Resize', widths, colorVariant = Drawer_1.DrawerColorVariant.default, focusTrap } = _a, props = tslib_1.__rest(_a, ["className", "id", "children", "hasNoBorder", "isResizable", "onResize", "minSize", "defaultSize", "maxSize", "increment", "resizeAriaLabel", "widths", "colorVariant", "focusTrap"]);
    const panel = React.useRef();
    const splitterRef = React.useRef();
    const [separatorValue, setSeparatorValue] = React.useState(0);
    const { position, isExpanded, isStatic, onExpand, drawerRef, drawerContentRef, isInline } = React.useContext(Drawer_1.DrawerContext);
    const hidden = isStatic ? false : !isExpanded;
    const [isExpandedInternal, setIsExpandedInternal] = React.useState(!hidden);
    const [isFocusTrapActive, setIsFocusTrapActive] = React.useState(false);
    const previouslyFocusedElement = React.useRef(null);
    let currWidth = 0;
    let panelRect;
    let end;
    let start;
    let bottom;
    let setInitialVals = true;
    if (isStatic && (focusTrap === null || focusTrap === void 0 ? void 0 : focusTrap.enabled)) {
        // eslint-disable-next-line no-console
        console.warn(`DrawerPanelContent: The focusTrap.enabled prop cannot be true if the Drawer's isStatic prop is true. This will cause a permanent focus trap.`);
    }
    React.useEffect(() => {
        if (!isStatic && isExpanded) {
            setIsExpandedInternal(isExpanded);
        }
    }, [isStatic, isExpanded]);
    const calcValueNow = () => {
        let splitterPos;
        let drawerSize;
        const isRTL = (0, util_1.getLanguageDirection)(panel.current) === 'rtl';
        if (isInline && (position === 'end' || position === 'right')) {
            if (isRTL) {
                splitterPos = panel.current.getBoundingClientRect().left - splitterRef.current.getBoundingClientRect().right;
                drawerSize = drawerRef.current.getBoundingClientRect().left - drawerRef.current.getBoundingClientRect().right;
            }
            else {
                splitterPos = panel.current.getBoundingClientRect().right - splitterRef.current.getBoundingClientRect().left;
                drawerSize = drawerRef.current.getBoundingClientRect().right - drawerRef.current.getBoundingClientRect().left;
            }
        }
        else if (isInline && (position === 'start' || position === 'left')) {
            if (isRTL) {
                splitterPos = splitterRef.current.getBoundingClientRect().left - panel.current.getBoundingClientRect().right;
                drawerSize = drawerRef.current.getBoundingClientRect().left - drawerRef.current.getBoundingClientRect().right;
            }
            else {
                splitterPos = splitterRef.current.getBoundingClientRect().right - panel.current.getBoundingClientRect().left;
                drawerSize = drawerRef.current.getBoundingClientRect().right - drawerRef.current.getBoundingClientRect().left;
            }
        }
        else if (position === 'end' || position === 'right') {
            if (isRTL) {
                splitterPos =
                    drawerContentRef.current.getBoundingClientRect().left - splitterRef.current.getBoundingClientRect().right;
                drawerSize =
                    drawerContentRef.current.getBoundingClientRect().left -
                        drawerContentRef.current.getBoundingClientRect().right;
            }
            else {
                splitterPos =
                    drawerContentRef.current.getBoundingClientRect().right - splitterRef.current.getBoundingClientRect().left;
                drawerSize =
                    drawerContentRef.current.getBoundingClientRect().right -
                        drawerContentRef.current.getBoundingClientRect().left;
            }
        }
        else if (position === 'start' || position === 'left') {
            if (isRTL) {
                splitterPos =
                    splitterRef.current.getBoundingClientRect().left - drawerContentRef.current.getBoundingClientRect().right;
                drawerSize =
                    drawerContentRef.current.getBoundingClientRect().left -
                        drawerContentRef.current.getBoundingClientRect().right;
            }
            else {
                splitterPos =
                    splitterRef.current.getBoundingClientRect().right - drawerContentRef.current.getBoundingClientRect().left;
                drawerSize =
                    drawerContentRef.current.getBoundingClientRect().right -
                        drawerContentRef.current.getBoundingClientRect().left;
            }
        }
        else if (position === 'bottom') {
            splitterPos =
                drawerContentRef.current.getBoundingClientRect().bottom - splitterRef.current.getBoundingClientRect().top;
            drawerSize =
                drawerContentRef.current.getBoundingClientRect().bottom - drawerContentRef.current.getBoundingClientRect().top;
        }
        const newSplitterPos = (splitterPos / drawerSize) * 100;
        return Math.round((newSplitterPos + Number.EPSILON) * 100) / 100;
    };
    const handleTouchStart = (e) => {
        e.stopPropagation();
        document.addEventListener('touchmove', callbackTouchMove, { passive: false });
        document.addEventListener('touchend', callbackTouchEnd);
        isResizing = true;
    };
    const handleMousedown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        document.addEventListener('mousemove', callbackMouseMove);
        document.addEventListener('mouseup', callbackMouseUp);
        drawerRef.current.classList.add((0, react_styles_1.css)(drawer_1.default.modifiers.resizing));
        isResizing = true;
        setInitialVals = true;
    };
    const handleMouseMove = (e) => {
        const mousePos = position === 'bottom' ? e.clientY : e.clientX;
        handleControlMove(e, mousePos);
    };
    const handleTouchMove = (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        const touchPos = position === 'bottom' ? e.touches[0].clientY : e.touches[0].clientX;
        handleControlMove(e, touchPos);
    };
    const handleControlMove = (e, controlPosition) => {
        const isRTL = (0, util_1.getLanguageDirection)(panel.current) === 'rtl';
        e.stopPropagation();
        if (!isResizing) {
            return;
        }
        if (setInitialVals) {
            panelRect = panel.current.getBoundingClientRect();
            if (isRTL) {
                start = panelRect.right;
                end = panelRect.left;
            }
            else {
                end = panelRect.right;
                start = panelRect.left;
            }
            bottom = panelRect.bottom;
            setInitialVals = false;
        }
        const mousePos = controlPosition;
        let newSize = 0;
        if (position === 'end' || position === 'right') {
            newSize = isRTL ? mousePos - end : end - mousePos;
        }
        else if (position === 'start' || position === 'left') {
            newSize = isRTL ? start - mousePos : mousePos - start;
        }
        else {
            newSize = bottom - mousePos;
        }
        if (position === 'bottom') {
            panel.current.style.overflowAnchor = 'none';
        }
        panel.current.style.setProperty(c_drawer__panel_md_FlexBasis_1.default.name, newSize + 'px');
        currWidth = newSize;
        setSeparatorValue(calcValueNow());
    };
    const handleMouseup = (e) => {
        if (!isResizing) {
            return;
        }
        drawerRef.current.classList.remove((0, react_styles_1.css)(drawer_1.default.modifiers.resizing));
        isResizing = false;
        onResize && onResize(e, currWidth, id);
        setInitialVals = true;
        document.removeEventListener('mousemove', callbackMouseMove);
        document.removeEventListener('mouseup', callbackMouseUp);
    };
    const handleTouchEnd = (e) => {
        e.stopPropagation();
        if (!isResizing) {
            return;
        }
        isResizing = false;
        onResize && onResize(e, currWidth, id);
        document.removeEventListener('touchmove', callbackTouchMove);
        document.removeEventListener('touchend', callbackTouchEnd);
    };
    const callbackMouseMove = React.useCallback(handleMouseMove, []);
    const callbackTouchEnd = React.useCallback(handleTouchEnd, []);
    const callbackTouchMove = React.useCallback(handleTouchMove, []);
    const callbackMouseUp = React.useCallback(handleMouseup, []);
    const handleKeys = (e) => {
        const isRTL = (0, util_1.getLanguageDirection)(panel.current) === 'rtl';
        const key = e.key;
        if (key !== 'Escape' &&
            key !== 'Enter' &&
            key !== 'ArrowUp' &&
            key !== 'ArrowDown' &&
            key !== 'ArrowLeft' &&
            key !== 'ArrowRight') {
            if (isResizing) {
                e.preventDefault();
            }
            return;
        }
        e.preventDefault();
        if (key === 'Escape' || key === 'Enter') {
            onResize && onResize(e, currWidth, id);
        }
        const panelRect = panel.current.getBoundingClientRect();
        newSize = position === 'bottom' ? panelRect.height : panelRect.width;
        let delta = 0;
        if (key === 'ArrowRight') {
            if (isRTL) {
                delta = position === 'left' || position === 'start' ? -increment : increment;
            }
            else {
                delta = position === 'left' || position === 'start' ? increment : -increment;
            }
        }
        else if (key === 'ArrowLeft') {
            if (isRTL) {
                delta = position === 'left' || position === 'start' ? increment : -increment;
            }
            else {
                delta = position === 'left' || position === 'start' ? -increment : increment;
            }
        }
        else if (key === 'ArrowUp') {
            delta = increment;
        }
        else if (key === 'ArrowDown') {
            delta = -increment;
        }
        newSize = newSize + delta;
        if (position === 'bottom') {
            panel.current.style.overflowAnchor = 'none';
        }
        panel.current.style.setProperty(c_drawer__panel_md_FlexBasis_1.default.name, newSize + 'px');
        currWidth = newSize;
        setSeparatorValue(calcValueNow());
    };
    const boundaryCssVars = {};
    if (defaultSize) {
        boundaryCssVars[c_drawer__panel_md_FlexBasis_1.default.name] = defaultSize;
    }
    if (minSize) {
        boundaryCssVars[c_drawer__panel_md_FlexBasis_min_1.default.name] = minSize;
    }
    if (maxSize) {
        boundaryCssVars[c_drawer__panel_md_FlexBasis_max_1.default.name] = maxSize;
    }
    const isValidFocusTrap = (focusTrap === null || focusTrap === void 0 ? void 0 : focusTrap.enabled) && !isStatic;
    const Component = isValidFocusTrap ? FocusTrap_1.FocusTrap : 'div';
    return (React.createElement(GenerateId_1.GenerateId, { prefix: "pf-drawer-panel-" }, (panelId) => {
        const focusTrapProps = {
            tabIndex: -1,
            'aria-modal': true,
            role: 'dialog',
            active: isFocusTrapActive,
            'aria-labelledby': (focusTrap === null || focusTrap === void 0 ? void 0 : focusTrap['aria-labelledby']) || id || panelId,
            focusTrapOptions: {
                fallbackFocus: () => panel.current,
                onActivate: () => {
                    if (previouslyFocusedElement.current !== document.activeElement) {
                        previouslyFocusedElement.current = document.activeElement;
                    }
                },
                onDeactivate: () => {
                    previouslyFocusedElement.current &&
                        previouslyFocusedElement.current.focus &&
                        previouslyFocusedElement.current.focus();
                },
                clickOutsideDeactivates: true,
                returnFocusOnDeactivate: false,
                // FocusTrap's initialFocus can accept false as a value to prevent initial focus.
                // We want to prevent this in case false is ever passed in.
                initialFocus: (focusTrap === null || focusTrap === void 0 ? void 0 : focusTrap.elementToFocusOnExpand) || undefined,
                escapeDeactivates: false
            }
        };
        return (React.createElement(Component, Object.assign({}, (isValidFocusTrap && focusTrapProps), { id: id || panelId, className: (0, react_styles_1.css)(drawer_1.default.drawerPanel, isResizable && drawer_1.default.modifiers.resizable, hasNoBorder && drawer_1.default.modifiers.noBorder, (0, util_1.formatBreakpointMods)(widths, drawer_1.default), colorVariant === Drawer_1.DrawerColorVariant.noBackground && drawer_1.default.modifiers.noBackground, colorVariant === Drawer_1.DrawerColorVariant.secondary && drawer_1.default.modifiers.secondary, className), onTransitionEnd: (ev) => {
                if (ev.target === panel.current) {
                    if (!hidden && ev.nativeEvent.propertyName === 'transform') {
                        onExpand(ev);
                    }
                    setIsExpandedInternal(!hidden);
                    if (isValidFocusTrap && ev.nativeEvent.propertyName === 'transform') {
                        setIsFocusTrapActive((prevIsFocusTrapActive) => !prevIsFocusTrapActive);
                    }
                }
            }, hidden: hidden }, ((defaultSize || minSize || maxSize) && {
            style: boundaryCssVars
        }), props, { ref: panel }), isExpandedInternal && (React.createElement(React.Fragment, null,
            isResizable && (React.createElement(React.Fragment, null,
                React.createElement("div", { className: (0, react_styles_1.css)(drawer_1.default.drawerSplitter, position !== 'bottom' && drawer_1.default.modifiers.vertical), role: "separator", tabIndex: 0, "aria-orientation": position === 'bottom' ? 'horizontal' : 'vertical', "aria-label": resizeAriaLabel, "aria-valuenow": separatorValue, "aria-valuemin": 0, "aria-valuemax": 100, "aria-controls": id || panelId, onMouseDown: handleMousedown, onKeyDown: handleKeys, onTouchStart: handleTouchStart, ref: splitterRef },
                    React.createElement("div", { className: (0, react_styles_1.css)(drawer_1.default.drawerSplitterHandle), "aria-hidden": true })),
                React.createElement("div", { className: (0, react_styles_1.css)(drawer_1.default.drawerPanelMain) }, children))),
            !isResizable && children))));
    }));
};
exports.DrawerPanelContent = DrawerPanelContent;
exports.DrawerPanelContent.displayName = 'DrawerPanelContent';
//# sourceMappingURL=DrawerPanelContent.js.map