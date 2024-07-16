"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChipGroup = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const Label_1 = require("../../../components/Label");
const helpers_1 = require("../../../helpers");
class ChipGroup extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const _a = this.props, { categoryName, children, className, isClosable, closeBtnAriaLabel, 'aria-label': ariaLabel, onClick, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onOverflowChipClick, numChips, expandedText, collapsedText, ouiaId, defaultIsOpen, tooltipPosition } = _a, props = tslib_1.__rest(_a, ["categoryName", "children", "className", "isClosable", "closeBtnAriaLabel", 'aria-label', "onClick", "onOverflowChipClick", "numChips", "expandedText", "collapsedText", "ouiaId", "defaultIsOpen", "tooltipPosition"]);
        return (React.createElement(Label_1.LabelGroup, Object.assign({ className: className, categoryName: categoryName, numLabels: numChips, isClosable: isClosable, closeBtnAriaLabel: closeBtnAriaLabel, "aria-label": ariaLabel, onClick: onClick, expandedText: expandedText, collapsedText: collapsedText, defaultIsOpen: defaultIsOpen, tooltipPosition: tooltipPosition }, (0, helpers_1.getOUIAProps)(ChipGroup.displayName, ouiaId), props), children));
    }
}
exports.ChipGroup = ChipGroup;
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
//# sourceMappingURL=ChipGroup.js.map