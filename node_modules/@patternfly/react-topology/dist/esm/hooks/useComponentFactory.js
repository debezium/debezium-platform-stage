import * as React from 'react';
import useVisualizationController from './useVisualizationController';
const useComponentFactory = (factory) => {
    const controller = useVisualizationController();
    React.useEffect(() => {
        controller.registerComponentFactory(factory);
        // TODO support unregister?
    }, [controller, factory]);
};
export default useComponentFactory;
//# sourceMappingURL=useComponentFactory.js.map