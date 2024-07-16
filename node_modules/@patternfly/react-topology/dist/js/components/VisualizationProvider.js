"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const ControllerContext_1 = tslib_1.__importDefault(require("../utils/ControllerContext"));
const Visualization_1 = require("../Visualization");
const VisualizationProvider = ({ controller, children }) => {
    const controllerRef = React.useRef();
    if (controller && controllerRef.current !== controller) {
        controllerRef.current = controller;
    }
    else if (!controllerRef.current) {
        controllerRef.current = new Visualization_1.Visualization();
    }
    return React.createElement(ControllerContext_1.default.Provider, { value: controllerRef.current }, children);
};
exports.default = VisualizationProvider;
//# sourceMappingURL=VisualizationProvider.js.map