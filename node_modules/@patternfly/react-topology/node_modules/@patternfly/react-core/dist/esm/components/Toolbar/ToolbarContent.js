import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar.mjs';
import { css } from '@patternfly/react-styles';
import { ToolbarContentContext, ToolbarContext } from './ToolbarUtils';
import { formatBreakpointMods } from '../../helpers/util';
import { PageContext } from '../Page/PageContext';
class ToolbarContent extends React.Component {
    constructor() {
        super(...arguments);
        this.expandableContentRef = React.createRef();
        this.chipContainerRef = React.createRef();
    }
    render() {
        const _a = this.props, { className, children, isExpanded, toolbarId, visibility, alignItems, clearAllFilters, showClearFiltersButton, clearFiltersButtonText, alignSelf } = _a, props = __rest(_a, ["className", "children", "isExpanded", "toolbarId", "visibility", "alignItems", "clearAllFilters", "showClearFiltersButton", "clearFiltersButtonText", "alignSelf"]);
        return (React.createElement(PageContext.Consumer, null, ({ width, getBreakpoint }) => (React.createElement("div", Object.assign({ className: css(styles.toolbarContent, formatBreakpointMods(visibility, styles, '', getBreakpoint(width)), className), ref: this.expandableContentRef }, props),
            React.createElement(ToolbarContext.Consumer, null, ({ clearAllFilters: clearAllFiltersContext, clearFiltersButtonText: clearFiltersButtonContext, showClearFiltersButton: showClearFiltersButtonContext, isExpanded: isExpandedContext, toolbarId: toolbarIdContext }) => {
                const expandableContentId = `${toolbarId || toolbarIdContext}-expandable-content-${ToolbarContent.currentId++}`;
                return (React.createElement(ToolbarContentContext.Provider, { value: {
                        expandableContentRef: this.expandableContentRef,
                        expandableContentId,
                        chipContainerRef: this.chipContainerRef,
                        isExpanded: isExpanded || isExpandedContext,
                        clearAllFilters: clearAllFilters || clearAllFiltersContext,
                        clearFiltersButtonText: clearFiltersButtonText || clearFiltersButtonContext,
                        showClearFiltersButton: showClearFiltersButton || showClearFiltersButtonContext
                    } },
                    React.createElement("div", { className: css(styles.toolbarContentSection, alignItems === 'center' && styles.modifiers.alignItemsCenter, alignItems === 'start' && styles.modifiers.alignItemsStart, alignItems === 'baseline' && styles.modifiers.alignItemsBaseline, alignSelf === 'center' && styles.modifiers.alignSelfCenter, alignSelf === 'start' && styles.modifiers.alignSelfStart, alignSelf === 'baseline' && styles.modifiers.alignSelfBaseline) }, children)));
            })))));
    }
}
ToolbarContent.displayName = 'ToolbarContent';
ToolbarContent.currentId = 0;
ToolbarContent.defaultProps = {
    isExpanded: false,
    showClearFiltersButton: false
};
export { ToolbarContent };
//# sourceMappingURL=ToolbarContent.js.map