import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { Divider } from '../Divider';
import styles from '@patternfly/react-styles/css/components/TreeView/tree-view.mjs';
export const TreeViewList = (_a) => {
    var { isNested = false, isMultiSelectable = false, toolbar, children, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby } = _a, props = __rest(_a, ["isNested", "isMultiSelectable", "toolbar", "children", 'aria-label', 'aria-labelledby']);
    return (React.createElement(React.Fragment, null,
        toolbar && (React.createElement(React.Fragment, null,
            toolbar,
            React.createElement(Divider, null))),
        React.createElement("ul", Object.assign({ className: css(`${styles.treeView}__list`), role: isNested ? 'group' : 'tree', "aria-multiselectable": isNested ? undefined : isMultiSelectable, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby }, props), children)));
};
TreeViewList.displayName = 'TreeViewList';
//# sourceMappingURL=TreeViewList.js.map