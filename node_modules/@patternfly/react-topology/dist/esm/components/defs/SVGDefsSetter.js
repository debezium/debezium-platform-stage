import * as React from 'react';
import SVGDefsContext from './SVGDefsContext';
export class SVGDefsSetter extends React.Component {
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
SVGDefsSetter.displayName = 'SVGDefsSetter';
SVGDefsSetter.contextType = SVGDefsContext;
//# sourceMappingURL=SVGDefsSetter.js.map