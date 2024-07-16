import * as React from 'react';
import ControllerContext from '../utils/ControllerContext';
import { Visualization } from '../Visualization';
const VisualizationProvider = ({ controller, children }) => {
    const controllerRef = React.useRef();
    if (controller && controllerRef.current !== controller) {
        controllerRef.current = controller;
    }
    else if (!controllerRef.current) {
        controllerRef.current = new Visualization();
    }
    return React.createElement(ControllerContext.Provider, { value: controllerRef.current }, children);
};
export default VisualizationProvider;
//# sourceMappingURL=VisualizationProvider.js.map