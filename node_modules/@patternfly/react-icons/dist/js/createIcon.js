"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIcon = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
let currentId = 0;
/**
 * Factory to create Icon class components for consumers
 */
function createIcon({ name, xOffset = 0, yOffset = 0, width, height, svgPath }) {
    var _a;
    return _a = class SVGIcon extends React.Component {
            constructor() {
                super(...arguments);
                this.id = `icon-title-${currentId++}`;
            }
            render() {
                const _b = this.props, { title, className } = _b, props = tslib_1.__rest(_b, ["title", "className"]);
                const classes = className ? `pf-v6-svg ${className}` : 'pf-v6-svg';
                const hasTitle = Boolean(title);
                const viewBox = [xOffset, yOffset, width, height].join(' ');
                return (React.createElement("svg", Object.assign({ className: classes, viewBox: viewBox, fill: "currentColor", "aria-labelledby": hasTitle ? this.id : null, "aria-hidden": hasTitle ? null : true, role: "img", width: "1em", height: "1em" }, props),
                    hasTitle && React.createElement("title", { id: this.id }, title),
                    React.createElement("path", { d: svgPath })));
            }
        },
        _a.displayName = name,
        _a;
}
exports.createIcon = createIcon;
//# sourceMappingURL=createIcon.js.map