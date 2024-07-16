"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DualListSelectorListWrapper = exports.DualListSelectorListWrapperBase = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const dual_list_selector_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/DualListSelector/dual-list-selector"));
const react_styles_1 = require("@patternfly/react-styles");
const helpers_1 = require("../../helpers");
const DualListSelectorList_1 = require("./DualListSelectorList");
const DualListSelectorContext_1 = require("./DualListSelectorContext");
const DualListSelectorListWrapperBase = (_a) => {
    var { className, children, 'aria-labelledby': ariaLabelledBy, innerRef, options = [], selectedOptions = [], displayOption, id = (0, helpers_1.getUniqueId)('dual-list-selector-list'), isDisabled = false } = _a, props = tslib_1.__rest(_a, ["className", "children", 'aria-labelledby', "innerRef", "options", "selectedOptions", "displayOption", "id", "isDisabled"]);
    const [focusedOption, setFocusedOption] = React.useState('');
    const ref = React.useRef(null);
    const menuRef = innerRef || ref;
    const { isTree } = React.useContext(DualListSelectorContext_1.DualListSelectorContext);
    // Sets up keyboard focus handling for the dual list selector menu child of the pane.
    const handleKeys = (event) => {
        if (!menuRef.current ||
            (menuRef.current !== event.target.closest(`.${dual_list_selector_1.default.dualListSelectorMenu}`) &&
                !Array.from(menuRef.current.getElementsByClassName(dual_list_selector_1.default.dualListSelectorMenu)).includes(event.target.closest(`.${dual_list_selector_1.default.dualListSelectorMenu}`)))) {
            return;
        }
        event.stopImmediatePropagation();
        const validOptions = isTree
            ? Array.from(menuRef.current.querySelectorAll(`.${dual_list_selector_1.default.dualListSelectorItemToggle}, .${dual_list_selector_1.default.dualListSelectorItemCheck} > input`))
            : Array.from(menuRef.current.getElementsByTagName('LI')).filter((el) => !el.classList.contains('pf-m-disabled'));
        const activeElement = document.activeElement;
        (0, helpers_1.handleArrows)(event, validOptions, (element) => activeElement.contains(element), (element) => {
            if (element.classList.contains(`.${dual_list_selector_1.default.dualListSelectorListItem}`)) {
                setFocusedOption(element.id);
            }
            else {
                setFocusedOption(element.closest(`.${dual_list_selector_1.default.dualListSelectorListItem}`).id);
            }
            return element;
        }, [`.${dual_list_selector_1.default.dualListSelectorItemToggle}`, `.${dual_list_selector_1.default.dualListSelectorItemCheck} > input`], undefined, false, false, false);
    };
    React.useEffect(() => {
        window.addEventListener('keydown', handleKeys);
        return () => {
            window.removeEventListener('keydown', handleKeys);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [menuRef.current]);
    return (React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(dual_list_selector_1.default.dualListSelectorMenu, className), ref: menuRef, tabIndex: 0 }, props),
        React.createElement(DualListSelectorContext_1.DualListSelectorListContext.Provider, { value: {
                setFocusedOption,
                isTree,
                focusedOption,
                ariaLabelledBy,
                displayOption,
                selectedOptions,
                id,
                options,
                isDisabled
            } }, children ? children : React.createElement(DualListSelectorList_1.DualListSelectorList, null))));
};
exports.DualListSelectorListWrapperBase = DualListSelectorListWrapperBase;
exports.DualListSelectorListWrapperBase.displayName = 'DualListSelectorListWrapperBase';
exports.DualListSelectorListWrapper = React.forwardRef((props, ref) => (React.createElement(exports.DualListSelectorListWrapperBase, Object.assign({ innerRef: ref }, props))));
exports.DualListSelectorListWrapper.displayName = 'DualListSelectorListWrapper';
//# sourceMappingURL=DualListSelectorListWrapper.js.map