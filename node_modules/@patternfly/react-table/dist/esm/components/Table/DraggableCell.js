import { __rest } from "tslib";
import * as React from 'react';
import GripVerticalIcon from '@patternfly/react-icons/dist/esm/icons/grip-vertical-icon';
import { Button } from '@patternfly/react-core/dist/esm/components/Button';
export const DraggableCell = (_a) => {
    var { className, onClick, 'aria-label': ariaLabel, id } = _a, props = __rest(_a, ["className", "onClick", 'aria-label', "id"]);
    return (React.createElement(Button, Object.assign({ id: id, variant: "plain", className: className, type: "button", "aria-label": ariaLabel || `Draggable row draggable button`, onClick: onClick }, props, { icon: React.createElement(GripVerticalIcon, { "aria-hidden": true }) })));
};
DraggableCell.displayName = 'DraggableCell';
//# sourceMappingURL=DraggableCell.js.map