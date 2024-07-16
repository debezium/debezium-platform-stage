import { __rest } from "tslib";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ToolbarItem } from './ToolbarItem';
import { ToolbarContentContext, ToolbarContext } from './ToolbarUtils';
import { Label, LabelGroup } from '../Label';
class ToolbarFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMounted: false
        };
    }
    componentDidMount() {
        const { categoryName, labels } = this.props;
        this.context.updateNumberFilters(typeof categoryName !== 'string' && categoryName.hasOwnProperty('key')
            ? categoryName.key
            : categoryName.toString(), labels.length);
        this.setState({ isMounted: true });
    }
    componentDidUpdate() {
        const { categoryName, labels } = this.props;
        this.context.updateNumberFilters(typeof categoryName !== 'string' && categoryName.hasOwnProperty('key')
            ? categoryName.key
            : categoryName.toString(), labels.length);
    }
    render() {
        const _a = this.props, { children, labels, deleteLabelGroup, deleteLabel, labelGroupExpandedText, labelGroupCollapsedText, categoryName, showToolbarItem, isExpanded, expandableLabelContainerRef } = _a, props = __rest(_a, ["children", "labels", "deleteLabelGroup", "deleteLabel", "labelGroupExpandedText", "labelGroupCollapsedText", "categoryName", "showToolbarItem", "isExpanded", "expandableLabelContainerRef"]);
        const { isExpanded: managedIsExpanded, labelGroupContentRef } = this.context;
        const _isExpanded = isExpanded !== undefined ? isExpanded : managedIsExpanded;
        const categoryKey = typeof categoryName !== 'string' && categoryName.hasOwnProperty('key')
            ? categoryName.key
            : categoryName.toString();
        const labelGroup = labels.length ? (React.createElement(ToolbarItem, { variant: "label-group" },
            React.createElement(LabelGroup, { key: categoryKey, categoryName: typeof categoryName === 'string' ? categoryName : categoryName.name, isClosable: deleteLabelGroup !== undefined, onClick: () => deleteLabelGroup(categoryName), collapsedText: labelGroupCollapsedText, expandedText: labelGroupExpandedText }, labels.map((label) => typeof label === 'string' ? (React.createElement(Label, { variant: "outline", key: label, onClose: () => deleteLabel(categoryKey, label) }, label)) : (React.createElement(Label, { key: label.key, onClose: () => deleteLabel(categoryKey, label) }, label.node)))))) : null;
        if (!_isExpanded && this.state.isMounted) {
            return (React.createElement(React.Fragment, null,
                showToolbarItem && React.createElement(ToolbarItem, Object.assign({}, props), children),
                ReactDOM.createPortal(labelGroup, labelGroupContentRef.current.firstElementChild)));
        }
        return (React.createElement(ToolbarContentContext.Consumer, null, ({ labelContainerRef }) => (React.createElement(React.Fragment, null,
            showToolbarItem && React.createElement(ToolbarItem, Object.assign({}, props), children),
            labelContainerRef.current && ReactDOM.createPortal(labelGroup, labelContainerRef.current),
            expandableLabelContainerRef &&
                expandableLabelContainerRef.current &&
                ReactDOM.createPortal(labelGroup, expandableLabelContainerRef.current)))));
    }
}
ToolbarFilter.displayName = 'ToolbarFilter';
ToolbarFilter.contextType = ToolbarContext;
ToolbarFilter.defaultProps = {
    labels: [],
    showToolbarItem: true
};
export { ToolbarFilter };
//# sourceMappingURL=ToolbarFilter.js.map