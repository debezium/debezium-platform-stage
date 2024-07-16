import { ModelKind } from '../types';
import BaseEdge from './BaseEdge';
import BaseGraph from './BaseGraph';
import BaseNode from './BaseNode';
const defaultElementFactory = (kind) => {
    switch (kind) {
        case ModelKind.graph:
            return new BaseGraph();
        case ModelKind.node:
            return new BaseNode();
        case ModelKind.edge:
            return new BaseEdge();
        default:
            return undefined;
    }
};
export default defaultElementFactory;
//# sourceMappingURL=defaultElementFactory.js.map