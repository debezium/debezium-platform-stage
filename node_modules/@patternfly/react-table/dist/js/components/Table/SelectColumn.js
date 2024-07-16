"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectColumn = exports.RowSelectVariant = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const Tooltip_1 = require('@patternfly/react-core/dist/js/components/Tooltip');
var RowSelectVariant;
(function (RowSelectVariant) {
    RowSelectVariant["radio"] = "radio";
    RowSelectVariant["checkbox"] = "checkbox";
})(RowSelectVariant || (exports.RowSelectVariant = RowSelectVariant = {}));
const SelectColumn = (_a) => {
    var { children = null, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    className, onSelect = null, selectVariant, tooltip, tooltipProps } = _a, props = tslib_1.__rest(_a, ["children", "className", "onSelect", "selectVariant", "tooltip", "tooltipProps"]);
    const inputRef = React.createRef();
    const content = (React.createElement(React.Fragment, null,
        React.createElement("label", null,
            React.createElement("input", Object.assign({}, props, { ref: inputRef, type: selectVariant, onChange: onSelect }))),
        children));
    return tooltip ? (React.createElement(Tooltip_1.Tooltip, Object.assign({ triggerRef: inputRef, content: tooltip }, tooltipProps), content)) : (content);
};
exports.SelectColumn = SelectColumn;
exports.SelectColumn.displayName = 'SelectColumn';
//# sourceMappingURL=SelectColumn.js.map