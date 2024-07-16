"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraggableCell = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const grip_vertical_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/grip-vertical-icon'));
const Button_1 = require('@patternfly/react-core/dist/js/components/Button');
const DraggableCell = (_a) => {
    var { className, onClick, 'aria-label': ariaLabel, id } = _a, props = tslib_1.__rest(_a, ["className", "onClick", 'aria-label', "id"]);
    return (React.createElement(Button_1.Button, Object.assign({ id: id, variant: "plain", className: className, type: "button", "aria-label": ariaLabel || `Draggable row draggable button`, onClick: onClick }, props, { icon: React.createElement(grip_vertical_icon_1.default, { "aria-hidden": true }) })));
};
exports.DraggableCell = DraggableCell;
exports.DraggableCell.displayName = 'DraggableCell';
//# sourceMappingURL=DraggableCell.js.map