"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DualListSelectorPane = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const dual_list_selector_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/DualListSelector/dual-list-selector"));
const react_styles_1 = require("@patternfly/react-styles");
const helpers_1 = require("../../helpers");
const DualListSelectorListWrapper_1 = require("./DualListSelectorListWrapper");
const DualListSelectorContext_1 = require("./DualListSelectorContext");
const SearchInput_1 = require("../SearchInput");
const c_dual_list_selector__menu_MinHeight_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/c_dual_list_selector__menu_MinHeight'));
const DualListSelectorPane = (_a) => {
    var { isChosen = false, className = '', status = '', actions, searchInput, children, title = '', id = (0, helpers_1.getUniqueId)('dual-list-selector-pane'), isDisabled = false, listMinHeight } = _a, props = tslib_1.__rest(_a, ["isChosen", "className", "status", "actions", "searchInput", "children", "title", "id", "isDisabled", "listMinHeight"]);
    return (React.createElement("div", Object.assign({ className: (0, react_styles_1.css)(dual_list_selector_1.default.dualListSelectorPane, isChosen ? dual_list_selector_1.default.modifiers.chosen : 'pf-m-available', className) }, props),
        title && (React.createElement("div", { className: (0, react_styles_1.css)(dual_list_selector_1.default.dualListSelectorHeader) },
            React.createElement("div", { className: `${dual_list_selector_1.default.dualListSelector}__title` },
                React.createElement("div", { className: (0, react_styles_1.css)(dual_list_selector_1.default.dualListSelectorTitleText) }, title)))),
        (actions || searchInput) && (React.createElement("div", { className: (0, react_styles_1.css)(dual_list_selector_1.default.dualListSelectorTools) },
            searchInput && (React.createElement("div", { className: (0, react_styles_1.css)(dual_list_selector_1.default.dualListSelectorToolsFilter) }, searchInput ? searchInput : React.createElement(SearchInput_1.SearchInput, { isDisabled: isDisabled }))),
            actions && React.createElement("div", { className: (0, react_styles_1.css)(dual_list_selector_1.default.dualListSelectorToolsActions) }, actions))),
        status && (React.createElement("div", { className: (0, react_styles_1.css)(dual_list_selector_1.default.dualListSelectorStatus) },
            React.createElement("div", { className: (0, react_styles_1.css)(dual_list_selector_1.default.dualListSelectorStatusText), id: `${id}-status` }, status))),
        React.createElement(DualListSelectorContext_1.DualListSelectorPaneContext.Provider, { value: { isChosen } },
            React.createElement(DualListSelectorListWrapper_1.DualListSelectorListWrapper, Object.assign({ "aria-labelledby": `${id}-status`, id: `${id}-list` }, (listMinHeight && {
                style: { [c_dual_list_selector__menu_MinHeight_1.default.name]: listMinHeight }
            })), children))));
};
exports.DualListSelectorPane = DualListSelectorPane;
exports.DualListSelectorPane.displayName = 'DualListSelectorPane';
//# sourceMappingURL=DualListSelectorPane.js.map