import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector.mjs';
import { css } from '@patternfly/react-styles';
import { getUniqueId } from '../../helpers';
import { DualListSelectorListWrapper } from './DualListSelectorListWrapper';
import { DualListSelectorPaneContext } from './DualListSelectorContext';
import { SearchInput } from '../SearchInput';
import cssMenuMinHeight from '@patternfly/react-tokens/dist/esm/c_dual_list_selector__menu_MinHeight';
export const DualListSelectorPane = (_a) => {
    var { isChosen = false, className = '', status = '', actions, searchInput, children, title = '', id = getUniqueId('dual-list-selector-pane'), isDisabled = false, listMinHeight } = _a, props = __rest(_a, ["isChosen", "className", "status", "actions", "searchInput", "children", "title", "id", "isDisabled", "listMinHeight"]);
    return (React.createElement("div", Object.assign({ className: css(styles.dualListSelectorPane, isChosen ? styles.modifiers.chosen : 'pf-m-available', className) }, props),
        title && (React.createElement("div", { className: css(styles.dualListSelectorHeader) },
            React.createElement("div", { className: `${styles.dualListSelector}__title` },
                React.createElement("div", { className: css(styles.dualListSelectorTitleText) }, title)))),
        (actions || searchInput) && (React.createElement("div", { className: css(styles.dualListSelectorTools) },
            searchInput && (React.createElement("div", { className: css(styles.dualListSelectorToolsFilter) }, searchInput ? searchInput : React.createElement(SearchInput, { isDisabled: isDisabled }))),
            actions && React.createElement("div", { className: css(styles.dualListSelectorToolsActions) }, actions))),
        status && (React.createElement("div", { className: css(styles.dualListSelectorStatus) },
            React.createElement("div", { className: css(styles.dualListSelectorStatusText), id: `${id}-status` }, status))),
        React.createElement(DualListSelectorPaneContext.Provider, { value: { isChosen } },
            React.createElement(DualListSelectorListWrapper, Object.assign({ "aria-labelledby": `${id}-status`, id: `${id}-list` }, (listMinHeight && {
                style: { [cssMenuMinHeight.name]: listMinHeight }
            })), children))));
};
DualListSelectorPane.displayName = 'DualListSelectorPane';
//# sourceMappingURL=DualListSelectorPane.js.map