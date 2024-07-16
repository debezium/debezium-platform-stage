import * as React from 'react';
import useVisualizationController from './useVisualizationController';
const useEventListener = (type, listener) => {
    const controller = useVisualizationController();
    React.useEffect(() => {
        controller.addEventListener(type, listener);
        return () => {
            controller.removeEventListener(type, listener);
        };
    }, [controller, type, listener]);
};
export default useEventListener;
//# sourceMappingURL=useEventListener.js.map