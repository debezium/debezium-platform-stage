"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SVGDefsSetter = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const SVGDefsContext_1 = tslib_1.__importDefault(require("./SVGDefsContext"));
class SVGDefsSetter extends React.Component {
    componentDidMount() {
        const { addDef, id, children } = this.props;
        addDef(id, children);
    }
    componentDidUpdate() {
        const { addDef, id, children } = this.props;
        addDef(id, children);
    }
    componentWillUnmount() {
        const { removeDef, id } = this.props;
        removeDef(id);
    }
    render() {
        return null;
    }
}
exports.SVGDefsSetter = SVGDefsSetter;
SVGDefsSetter.displayName = 'SVGDefsSetter';
SVGDefsSetter.contextType = SVGDefsContext_1.default;
//# sourceMappingURL=SVGDefsSetter.js.map