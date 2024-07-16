import * as React from 'react';
import useVisualizationController from './useVisualizationController';
const useModel = (model) => {
    const controller = useVisualizationController();
    React.useEffect(() => {
        controller.fromModel(model);
    }, [controller, model]);
};
export default useModel;
//# sourceMappingURL=useModel.js.map