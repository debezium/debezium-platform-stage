import { __rest } from "tslib";
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector.mjs';
import { DualListSelectorListItem } from './DualListSelectorListItem';
import * as React from 'react';
import { DualListSelectorListContext } from './DualListSelectorContext';
export const DualListSelectorList = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const { isTree, ariaLabelledBy, focusedOption, displayOption, selectedOptions, id, options, isDisabled } = React.useContext(DualListSelectorListContext);
    const hasOptions = () => options.length !== 0 || (children !== undefined && children.length !== 0);
    return (React.createElement("ul", Object.assign({ className: css(styles.dualListSelectorList) }, (hasOptions() && {
        role: isTree ? 'tree' : 'listbox',
        'aria-multiselectable': true,
        'aria-labelledby': ariaLabelledBy,
        'aria-activedescendant': focusedOption
    }), { "aria-disabled": isDisabled ? 'true' : undefined }, props), options.length === 0
        ? children
        : options.map((option, index) => {
            if (displayOption(option)) {
                return (React.createElement(DualListSelectorListItem, { key: index, isSelected: selectedOptions.indexOf(index) !== -1, id: `${id}-option-${index}`, orderIndex: index, isDisabled: isDisabled }, option));
            }
            return;
        })));
};
DualListSelectorList.displayName = 'DualListSelectorList';
//# sourceMappingURL=DualListSelectorList.js.map