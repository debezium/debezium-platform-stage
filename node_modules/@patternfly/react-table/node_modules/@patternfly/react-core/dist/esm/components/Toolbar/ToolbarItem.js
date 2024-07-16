import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar.mjs';
import { css } from '@patternfly/react-styles';
import { formatBreakpointMods, toCamel } from '../../helpers/util';
import { Divider } from '../Divider';
import { PageContext } from '../Page/PageContext';
export var ToolbarItemVariant;
(function (ToolbarItemVariant) {
    ToolbarItemVariant["separator"] = "separator";
    ToolbarItemVariant["pagination"] = "pagination";
    ToolbarItemVariant["label"] = "label";
    ToolbarItemVariant["label-group"] = "label-group";
    ToolbarItemVariant["expand-all"] = "expand-all";
})(ToolbarItemVariant || (ToolbarItemVariant = {}));
export const ToolbarItem = (_a) => {
    var { className, variant, visibility, gap, columnGap, rowGap, align, alignSelf, alignItems, id, children, isAllExpanded, isOverflowContainer } = _a, props = __rest(_a, ["className", "variant", "visibility", "gap", "columnGap", "rowGap", "align", "alignSelf", "alignItems", "id", "children", "isAllExpanded", "isOverflowContainer"]);
    if (variant === ToolbarItemVariant.separator) {
        return React.createElement(Divider, Object.assign({ className: css(className), orientation: { default: 'vertical' } }, props));
    }
    return (React.createElement(PageContext.Consumer, null, ({ width, getBreakpoint }) => (React.createElement("div", Object.assign({ className: css(styles.toolbarItem, variant && styles.modifiers[toCamel(variant)], variant === ToolbarItemVariant['label-group'] && styles.modifiers.labelGroup, isAllExpanded && styles.modifiers.expanded, isOverflowContainer && styles.modifiers.overflowContainer, formatBreakpointMods(visibility, styles, '', getBreakpoint(width)), formatBreakpointMods(align, styles, '', getBreakpoint(width)), formatBreakpointMods(gap, styles, '', getBreakpoint(width)), formatBreakpointMods(columnGap, styles, '', getBreakpoint(width)), formatBreakpointMods(rowGap, styles, '', getBreakpoint(width)), alignItems === 'start' && styles.modifiers.alignItemsStart, alignItems === 'center' && styles.modifiers.alignItemsCenter, alignItems === 'baseline' && styles.modifiers.alignItemsBaseline, alignSelf === 'start' && styles.modifiers.alignSelfStart, alignSelf === 'center' && styles.modifiers.alignSelfCenter, alignSelf === 'baseline' && styles.modifiers.alignSelfBaseline, className) }, (variant === 'label' && { 'aria-hidden': true }), { id: id }, props), children))));
};
ToolbarItem.displayName = 'ToolbarItem';
//# sourceMappingURL=ToolbarItem.js.map