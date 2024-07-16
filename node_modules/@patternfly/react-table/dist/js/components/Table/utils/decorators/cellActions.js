"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cellActions = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const table_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Table/table"));
const ActionsColumn_1 = require("../../ActionsColumn");
const resolveOrDefault = (resolver, defaultValue, rowData, extraData) => (typeof resolver === 'function' ? resolver(rowData, extraData) : defaultValue);
const cellActions = (actions, actionResolver, areActionsDisabled) => (label, { rowData, column, rowIndex, columnIndex, column: { extraParams: { actionsToggle, actionsPopperProps } }, property }) => {
    const extraData = {
        rowIndex,
        columnIndex,
        column,
        property
    };
    const resolvedActions = resolveOrDefault(actionResolver, actions, rowData, extraData);
    const resolvedIsDisabled = resolveOrDefault(areActionsDisabled, rowData && rowData.disableActions, rowData, extraData);
    const renderProps = resolvedActions && resolvedActions.length > 0
        ? {
            children: (React.createElement(ActionsColumn_1.ActionsColumn, { items: resolvedActions, isDisabled: resolvedIsDisabled, rowData: rowData, extraData: extraData, actionsToggle: actionsToggle, popperProps: actionsPopperProps }, label))
        }
        : {};
    return Object.assign({ className: (0, react_styles_1.css)(table_1.default.tableAction), style: { paddingRight: 0 }, isVisible: true }, renderProps);
};
exports.cellActions = cellActions;
//# sourceMappingURL=cellActions.js.map