import * as React from 'react';
import SVGDefsContext from './SVGDefsContext';
import { SVGDefsSetter } from './SVGDefsSetter';
/**
 * Contributes `children` to the parent SVG `<defs>` element.
 * A contribution is assumed to be static in nature in that the children will never change
 * for a given ID. This is because there may be multiple children referencing the same defs contribution.
 * The assumption must be that there is not a single owner but many owners and therefore each
 * owner must be contributing the same def.
 */
export default class SVGDefs extends React.Component {
    shouldComponentUpdate() {
        return false;
    }
    render() {
        return (React.createElement(SVGDefsContext.Consumer, null, ({ addDef, removeDef }) => React.createElement(SVGDefsSetter, Object.assign({}, this.props, { addDef: addDef, removeDef: removeDef }))));
    }
}
//# sourceMappingURL=SVGDefs.js.map