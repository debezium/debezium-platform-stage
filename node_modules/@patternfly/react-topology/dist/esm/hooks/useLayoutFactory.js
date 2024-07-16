import * as React from 'react';
import useVisualizationController from './useVisualizationController';
const useLayoutFactory = (factory) => {
    const controller = useVisualizationController();
    React.useEffect(() => {
        controller.registerLayoutFactory(factory);
        // TODO support unregister?
    }, [controller, factory]);
};
export default useLayoutFactory;
//# sourceMappingURL=useLayoutFactory.js.map