import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar.mjs';
import { css } from '@patternfly/react-styles';
import { ToolbarGroup } from './ToolbarGroup';
import { ToolbarItem } from './ToolbarItem';
import { Button } from '../Button';
import { ToolbarContext } from './ToolbarUtils';
class ToolbarExpandableContent extends React.Component {
    render() {
        const _a = this.props, { children, className, expandableContentRef, labelContainerRef, isExpanded, clearAllFilters, clearFiltersButtonText, showClearFiltersButton } = _a, props = __rest(_a, ["children", "className", "expandableContentRef", "labelContainerRef", "isExpanded", "clearAllFilters", "clearFiltersButtonText", "showClearFiltersButton"]);
        const { numberOfFilters, customLabelGroupContent } = this.context;
        const clearLabelGroups = () => {
            clearAllFilters();
        };
        return (React.createElement("div", Object.assign({ className: css(styles.toolbarExpandableContent, isExpanded && styles.modifiers.expanded, className), ref: expandableContentRef }, props),
            React.createElement(ToolbarGroup, null, children),
            numberOfFilters > 0 && (React.createElement(ToolbarGroup, null,
                React.createElement(ToolbarGroup, { ref: labelContainerRef }),
                showClearFiltersButton && !customLabelGroupContent && (React.createElement(ToolbarItem, null,
                    React.createElement(Button, { variant: "link", onClick: clearLabelGroups, isInline: true }, clearFiltersButtonText))),
                customLabelGroupContent && customLabelGroupContent))));
    }
}
ToolbarExpandableContent.displayName = 'ToolbarExpandableContent';
ToolbarExpandableContent.contextType = ToolbarContext;
ToolbarExpandableContent.defaultProps = {
    isExpanded: false,
    clearFiltersButtonText: 'Clear all filters'
};
export { ToolbarExpandableContent };
//# sourceMappingURL=ToolbarExpandableContent.js.map