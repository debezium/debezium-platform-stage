import { __rest } from "tslib";
import * as React from 'react';
import { Tooltip } from '@patternfly/react-core/dist/esm/components/Tooltip';
export var RowSelectVariant;
(function (RowSelectVariant) {
    RowSelectVariant["radio"] = "radio";
    RowSelectVariant["checkbox"] = "checkbox";
})(RowSelectVariant || (RowSelectVariant = {}));
export const SelectColumn = (_a) => {
    var { children = null, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    className, onSelect = null, selectVariant, tooltip, tooltipProps } = _a, props = __rest(_a, ["children", "className", "onSelect", "selectVariant", "tooltip", "tooltipProps"]);
    const inputRef = React.createRef();
    const content = (React.createElement(React.Fragment, null,
        React.createElement("label", null,
            React.createElement("input", Object.assign({}, props, { ref: inputRef, type: selectVariant, onChange: onSelect }))),
        children));
    return tooltip ? (React.createElement(Tooltip, Object.assign({ triggerRef: inputRef, content: tooltip }, tooltipProps), content)) : (content);
};
SelectColumn.displayName = 'SelectColumn';
//# sourceMappingURL=SelectColumn.js.map