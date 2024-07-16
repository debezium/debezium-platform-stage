"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolbarFilter = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const ReactDOM = tslib_1.__importStar(require("react-dom"));
const ToolbarItem_1 = require("./ToolbarItem");
const ToolbarUtils_1 = require("./ToolbarUtils");
const Label_1 = require("../Label");
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
        const _a = this.props, { children, labels, deleteLabelGroup, deleteLabel, labelGroupExpandedText, labelGroupCollapsedText, categoryName, showToolbarItem, isExpanded, expandableLabelContainerRef } = _a, props = tslib_1.__rest(_a, ["children", "labels", "deleteLabelGroup", "deleteLabel", "labelGroupExpandedText", "labelGroupCollapsedText", "categoryName", "showToolbarItem", "isExpanded", "expandableLabelContainerRef"]);
        const { isExpanded: managedIsExpanded, labelGroupContentRef } = this.context;
        const _isExpanded = isExpanded !== undefined ? isExpanded : managedIsExpanded;
        const categoryKey = typeof categoryName !== 'string' && categoryName.hasOwnProperty('key')
            ? categoryName.key
            : categoryName.toString();
        const labelGroup = labels.length ? (React.createElement(ToolbarItem_1.ToolbarItem, { variant: "label-group" },
            React.createElement(Label_1.LabelGroup, { key: categoryKey, categoryName: typeof categoryName === 'string' ? categoryName : categoryName.name, isClosable: deleteLabelGroup !== undefined, onClick: () => deleteLabelGroup(categoryName), collapsedText: labelGroupCollapsedText, expandedText: labelGroupExpandedText }, labels.map((label) => typeof label === 'string' ? (React.createElement(Label_1.Label, { variant: "outline", key: label, onClose: () => deleteLabel(categoryKey, label) }, label)) : (React.createElement(Label_1.Label, { key: label.key, onClose: () => deleteLabel(categoryKey, label) }, label.node)))))) : null;
        if (!_isExpanded && this.state.isMounted) {
            return (React.createElement(React.Fragment, null,
                showToolbarItem && React.createElement(ToolbarItem_1.ToolbarItem, Object.assign({}, props), children),
                ReactDOM.createPortal(labelGroup, labelGroupContentRef.current.firstElementChild)));
        }
        return (React.createElement(ToolbarUtils_1.ToolbarContentContext.Consumer, null, ({ labelContainerRef }) => (React.createElement(React.Fragment, null,
            showToolbarItem && React.createElement(ToolbarItem_1.ToolbarItem, Object.assign({}, props), children),
            labelContainerRef.current && ReactDOM.createPortal(labelGroup, labelContainerRef.current),
            expandableLabelContainerRef &&
                expandableLabelContainerRef.current &&
                ReactDOM.createPortal(labelGroup, expandableLabelContainerRef.current)))));
    }
}
exports.ToolbarFilter = ToolbarFilter;
ToolbarFilter.displayName = 'ToolbarFilter';
ToolbarFilter.contextType = ToolbarUtils_1.ToolbarContext;
ToolbarFilter.defaultProps = {
    labels: [],
    showToolbarItem: true
};
//# sourceMappingURL=ToolbarFilter.js.map