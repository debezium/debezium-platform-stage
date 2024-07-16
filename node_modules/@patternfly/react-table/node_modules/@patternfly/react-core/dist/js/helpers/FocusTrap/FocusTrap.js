"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FocusTrap = void 0;
const tslib_1 = require("tslib");
const focus_trap_1 = require("focus-trap");
const react_1 = tslib_1.__importStar(require("react"));
const useUnmountEffect_1 = require("../useUnmountEffect");
exports.FocusTrap = (0, react_1.forwardRef)(function FocusTrap(_a, forwardedRef) {
    var { active = true, paused = false, focusTrapOptions = {}, preventScrollOnDeactivate = false } = _a, props = tslib_1.__rest(_a, ["active", "paused", "focusTrapOptions", "preventScrollOnDeactivate"]);
    // Fall back to internal ref if no forwarded ref is provided.
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useImperativeHandle)(forwardedRef, () => ref.current);
    // Create focus trap instance after rendering DOM.
    const focusTrapRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const focusTrap = (0, focus_trap_1.createFocusTrap)(ref.current, Object.assign(Object.assign({}, focusTrapOptions), { returnFocusOnDeactivate: false }));
        focusTrapRef.current = focusTrap;
        // Deactivate focus trap on cleanup.
        return () => {
            focusTrap.deactivate();
        };
    }, []);
    // Handle activation status based on 'active' prop.
    (0, react_1.useEffect)(() => {
        const focusTrap = focusTrapRef.current;
        active ? focusTrap === null || focusTrap === void 0 ? void 0 : focusTrap.activate() : focusTrap === null || focusTrap === void 0 ? void 0 : focusTrap.deactivate();
    }, [active]);
    // Handle pause status based on 'pause' prop.
    (0, react_1.useEffect)(() => {
        const focusTrap = focusTrapRef.current;
        paused ? focusTrap === null || focusTrap === void 0 ? void 0 : focusTrap.pause() : focusTrap === null || focusTrap === void 0 ? void 0 : focusTrap.unpause();
    }, [paused]);
    // Store the currently active element to restore focus to later.
    const previousElementRef = (0, react_1.useRef)(typeof document !== 'undefined' ? document.activeElement : null);
    // Restore focus to the previously active element on unmount.
    (0, useUnmountEffect_1.useUnmountEffect)(() => {
        if (focusTrapOptions.returnFocusOnDeactivate !== false && previousElementRef.current instanceof HTMLElement) {
            previousElementRef.current.focus({
                preventScroll: preventScrollOnDeactivate
            });
        }
    });
    return react_1.default.createElement("div", Object.assign({ ref: ref }, props));
});
exports.FocusTrap.displayName = 'FocusTrap';
//# sourceMappingURL=FocusTrap.js.map