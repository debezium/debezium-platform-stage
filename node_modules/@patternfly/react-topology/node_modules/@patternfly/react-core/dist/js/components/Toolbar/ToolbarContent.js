"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolbarContent = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const toolbar_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Toolbar/toolbar"));
const react_styles_1 = require("@patternfly/react-styles");
const ToolbarUtils_1 = require("./ToolbarUtils");
const util_1 = require("../../helpers/util");
const PageContext_1 = require("../Page/PageContext");
class ToolbarContent extends React.Component {
    constructor() {
        super(...arguments);
        this.expandableContentRef = React.createRef();
        this.chipContainerRef = React.createRef();
    }
    render() {
        const _a = this.props, { className, children, isExpanded, toolbarId, visibility, alignItems, clearAllFilters, showClearFiltersButton, clearFiltersButtonText, alignSelf } = _a, props = tslib_1.__rest(_a, ["className", "children", "isExpanded", "toolbarId", "visibility", "alignItems", "clearAllFilters", "showClearFiltersButton", "clearFiltersButtonText", "alignSelf"]);
        return (React.createElement(PageContext_1.PageContext.Consumer, null, ({ width, getBreakpoint }) => (React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(toolbar_1.default.toolbarContent, (0, util_1.formatBreakpointMods)(visibility, toolbar_1.default, '', getBreakpoint(width)), className), ref: this.expandableContentRef }, props),
            React.createElement(ToolbarUtils_1.ToolbarContext.Consumer, null, ({ clearAllFilters: clearAllFiltersContext, clearFiltersButtonText: clearFiltersButtonContext, showClearFiltersButton: showClearFiltersButtonContext, isExpanded: isExpandedContext, toolbarId: toolbarIdContext }) => {
                const expandableContentId = `${toolbarId || toolbarIdContext}-expandable-content-${ToolbarContent.currentId++}`;
                return (React.createElement(ToolbarUtils_1.ToolbarContentContext.Provider, { value: {
                        expandableContentRef: this.expandableContentRef,
                        expandableContentId,
                        chipContainerRef: this.chipContainerRef,
                        isExpanded: isExpanded || isExpandedContext,
                        clearAllFilters: clearAllFilters || clearAllFiltersContext,
                        clearFiltersButtonText: clearFiltersButtonText || clearFiltersButtonContext,
                        showClearFiltersButton: showClearFiltersButton || showClearFiltersButtonContext
                    } },
                    React.createElement("div", { className: (0, react_styles_1.css)(toolbar_1.default.toolbarContentSection, alignItems === 'center' && toolbar_1.default.modifiers.alignItemsCenter, alignItems === 'start' && toolbar_1.default.modifiers.alignItemsStart, alignItems === 'baseline' && toolbar_1.default.modifiers.alignItemsBaseline, alignSelf === 'center' && toolbar_1.default.modifiers.alignSelfCenter, alignSelf === 'start' && toolbar_1.default.modifiers.alignSelfStart, alignSelf === 'baseline' && toolbar_1.default.modifiers.alignSelfBaseline) }, children)));
            })))));
    }
}
exports.ToolbarContent = ToolbarContent;
ToolbarContent.displayName = 'ToolbarContent';
ToolbarContent.currentId = 0;
ToolbarContent.defaultProps = {
    isExpanded: false,
    showClearFiltersButton: false
};
//# sourceMappingURL=ToolbarContent.js.map