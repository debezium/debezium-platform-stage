import * as React from 'react';
import useVisualizationController from './useVisualizationController';
const useElementFactory = (factory) => {
    const controller = useVisualizationController();
    React.useEffect(() => {
        controller.registerElementFactory(factory);
        // TODO support unregister?
    }, [controller, factory]);
};
export default useElementFactory;
//# sourceMappingURL=useElementFactory.js.map