"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const SVGDefsContext_1 = tslib_1.__importDefault(require("./SVGDefsContext"));
const SVGDefsSetter_1 = require("./SVGDefsSetter");
/**
 * Contributes `children` to the parent SVG `<defs>` element.
 * A contribution is assumed to be static in nature in that the children will never change
 * for a given ID. This is because there may be multiple children referencing the same defs contribution.
 * The assumption must be that there is not a single owner but many owners and therefore each
 * owner must be contributing the same def.
 */
class SVGDefs extends React.Component {
    shouldComponentUpdate() {
        return false;
    }
    render() {
        return (React.createElement(SVGDefsContext_1.default.Consumer, null, ({ addDef, removeDef }) => React.createElement(SVGDefsSetter_1.SVGDefsSetter, Object.assign({}, this.props, { addDef: addDef, removeDef: removeDef }))));
    }
}
exports.default = SVGDefs;
//# sourceMappingURL=SVGDefs.js.map