import useVisualizationController from './useVisualizationController';
import { ScaleDetailsLevel } from '../types';
const useDetailsLevel = () => {
    const controller = useVisualizationController();
    if (!controller) {
        return ScaleDetailsLevel.high;
    }
    return controller.getGraph().getDetailsLevel();
};
export default useDetailsLevel;
//# sourceMappingURL=useDetailsLevel.js.map