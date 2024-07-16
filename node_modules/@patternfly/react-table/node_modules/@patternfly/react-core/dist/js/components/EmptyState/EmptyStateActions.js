"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyStateActions = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const empty_state_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/EmptyState/empty-state"));
const EmptyStateActions = (_a) => {
    var { children, className } = _a, props = tslib_1.__rest(_a, ["children", "className"]);
    return (React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(empty_state_1.default.emptyStateActions, className) }, props), children));
};
exports.EmptyStateActions = EmptyStateActions;
exports.EmptyStateActions.displayName = 'EmptyStateActions';
//# sourceMappingURL=EmptyStateActions.js.map