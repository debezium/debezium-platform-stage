"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NODE_SHADOW_FILTER_ID_DANGER = exports.NODE_SHADOW_FILTER_ID_HOVER = exports.NODE_SHADOW_FILTER_ID = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const SvgDropShadowFilter_1 = tslib_1.__importDefault(require("../svg/SvgDropShadowFilter"));
exports.NODE_SHADOW_FILTER_ID = 'NodeShadowsFilterId';
exports.NODE_SHADOW_FILTER_ID_HOVER = 'NodeShadowsFilterId--hover';
exports.NODE_SHADOW_FILTER_ID_DANGER = 'NodeShadowsFilterId--danger';
const NodeShadows = () => (React.createElement(React.Fragment, null,
    React.createElement(SvgDropShadowFilter_1.default, { id: exports.NODE_SHADOW_FILTER_ID }),
    React.createElement(SvgDropShadowFilter_1.default, { id: exports.NODE_SHADOW_FILTER_ID_HOVER, dx: 0, dy: 3, stdDeviation: 2, floodOpacity: 0.2 }),
    React.createElement(SvgDropShadowFilter_1.default, { id: exports.NODE_SHADOW_FILTER_ID_DANGER, dx: 0, dy: 0, stdDeviation: 4, floodColor: "#DB0000", floodOpacity: 0.5 })));
exports.default = NodeShadows;
//# sourceMappingURL=NodeShadows.js.map