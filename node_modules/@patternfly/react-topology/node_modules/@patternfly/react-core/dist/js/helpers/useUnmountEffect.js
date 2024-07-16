"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUnmountEffect = void 0;
const react_1 = require("react");
/**
 * A `useEffect`-like hook that only triggers when a component unmounts. Does not require a dependency list, as the effect callback will always be kept up to date.
 */
function useUnmountEffect(effect) {
    // Always use the latest effect callback so that it can reference the latest props and state.
    const effectRef = (0, react_1.useRef)(effect);
    effectRef.current = effect;
    // Trigger the effect callback when the component unmounts.
    (0, react_1.useEffect)(() => () => {
        effectRef.current();
    }, []);
}
exports.useUnmountEffect = useUnmountEffect;
//# sourceMappingURL=useUnmountEffect.js.map