import { __rest } from "tslib";
import { createFocusTrap } from 'focus-trap';
import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { useUnmountEffect } from '../useUnmountEffect';
export const FocusTrap = forwardRef(function FocusTrap(_a, forwardedRef) {
    var { active = true, paused = false, focusTrapOptions = {}, preventScrollOnDeactivate = false } = _a, props = __rest(_a, ["active", "paused", "focusTrapOptions", "preventScrollOnDeactivate"]);
    // Fall back to internal ref if no forwarded ref is provided.
    const ref = useRef(null);
    useImperativeHandle(forwardedRef, () => ref.current);
    // Create focus trap instance after rendering DOM.
    const focusTrapRef = useRef(null);
    useEffect(() => {
        const focusTrap = createFocusTrap(ref.current, Object.assign(Object.assign({}, focusTrapOptions), { returnFocusOnDeactivate: false }));
        focusTrapRef.current = focusTrap;
        // Deactivate focus trap on cleanup.
        return () => {
            focusTrap.deactivate();
        };
    }, []);
    // Handle activation status based on 'active' prop.
    useEffect(() => {
        const focusTrap = focusTrapRef.current;
        active ? focusTrap === null || focusTrap === void 0 ? void 0 : focusTrap.activate() : focusTrap === null || focusTrap === void 0 ? void 0 : focusTrap.deactivate();
    }, [active]);
    // Handle pause status based on 'pause' prop.
    useEffect(() => {
        const focusTrap = focusTrapRef.current;
        paused ? focusTrap === null || focusTrap === void 0 ? void 0 : focusTrap.pause() : focusTrap === null || focusTrap === void 0 ? void 0 : focusTrap.unpause();
    }, [paused]);
    // Store the currently active element to restore focus to later.
    const previousElementRef = useRef(typeof document !== 'undefined' ? document.activeElement : null);
    // Restore focus to the previously active element on unmount.
    useUnmountEffect(() => {
        if (focusTrapOptions.returnFocusOnDeactivate !== false && previousElementRef.current instanceof HTMLElement) {
            previousElementRef.current.focus({
                preventScroll: preventScrollOnDeactivate
            });
        }
    });
    return React.createElement("div", Object.assign({ ref: ref }, props));
});
FocusTrap.displayName = 'FocusTrap';
//# sourceMappingURL=FocusTrap.js.map