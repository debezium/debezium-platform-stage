"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const types_1 = require("../types");
const BaseEdge_1 = tslib_1.__importDefault(require("./BaseEdge"));
const BaseGraph_1 = tslib_1.__importDefault(require("./BaseGraph"));
const BaseNode_1 = tslib_1.__importDefault(require("./BaseNode"));
const defaultElementFactory = (kind) => {
    switch (kind) {
        case types_1.ModelKind.graph:
            return new BaseGraph_1.default();
        case types_1.ModelKind.node:
            return new BaseNode_1.default();
        case types_1.ModelKind.edge:
            return new BaseEdge_1.default();
        default:
            return undefined;
    }
};
exports.default = defaultElementFactory;
//# sourceMappingURL=defaultElementFactory.js.map