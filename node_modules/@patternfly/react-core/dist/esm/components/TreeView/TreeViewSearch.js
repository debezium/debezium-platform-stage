import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/TreeView/tree-view.mjs';
import formStyles from '@patternfly/react-styles/css/components/FormControl/form-control.mjs';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
export const TreeViewSearch = (_a) => {
    var { className, onSearch, id, name, 'aria-label': ariaLabel } = _a, props = __rest(_a, ["className", "onSearch", "id", "name", 'aria-label']);
    return (React.createElement("div", { className: css(styles.treeViewSearch, className) },
        React.createElement("div", { className: css(formStyles.formControl, formStyles.modifiers.icon) },
            React.createElement("input", Object.assign({ onChange: onSearch, id: id, name: name, "aria-label": ariaLabel, type: "search" }, props)),
            React.createElement("div", { className: css(formStyles.formControlUtilities) },
                React.createElement("div", { className: css(formStyles.formControlIcon) },
                    React.createElement(SearchIcon, null))))));
};
TreeViewSearch.displayName = 'TreeViewSearch';
//# sourceMappingURL=TreeViewSearch.js.map