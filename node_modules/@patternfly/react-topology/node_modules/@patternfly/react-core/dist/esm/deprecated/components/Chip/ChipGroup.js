import { __rest } from "tslib";
import * as React from 'react';
import { LabelGroup } from '../../../components/Label';
import { getOUIAProps } from '../../../helpers';
class ChipGroup extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const _a = this.props, { categoryName, children, className, isClosable, closeBtnAriaLabel, 'aria-label': ariaLabel, onClick, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onOverflowChipClick, numChips, expandedText, collapsedText, ouiaId, defaultIsOpen, tooltipPosition } = _a, props = __rest(_a, ["categoryName", "children", "className", "isClosable", "closeBtnAriaLabel", 'aria-label', "onClick", "onOverflowChipClick", "numChips", "expandedText", "collapsedText", "ouiaId", "defaultIsOpen", "tooltipPosition"]);
        return (React.createElement(LabelGroup, Object.assign({ className: className, categoryName: categoryName, numLabels: numChips, isClosable: isClosable, closeBtnAriaLabel: closeBtnAriaLabel, "aria-label": ariaLabel, onClick: onClick, expandedText: expandedText, collapsedText: collapsedText, defaultIsOpen: defaultIsOpen, tooltipPosition: tooltipPosition }, getOUIAProps(ChipGroup.displayName, ouiaId), props), children));
    }
}
ChipGroup.displayName = 'ChipGroup';
ChipGroup.defaultProps = {
    expandedText: 'Show Less',
    collapsedText: '${remaining} more',
    categoryName: '',
    defaultIsOpen: false,
    numChips: 3,
    isClosable: false,
    closeBtnAriaLabel: 'Close chip group',
    tooltipPosition: 'top',
    'aria-label': 'Chip group category'
};
export { ChipGroup };
//# sourceMappingURL=ChipGroup.js.map