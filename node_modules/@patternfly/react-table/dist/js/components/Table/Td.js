"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Td = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const table_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Table/table"));
const table_scrollable_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Table/table-scrollable"));
const table_tree_view_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Table/table-tree-view"));
const utils_1 = require("./utils");
const draggable_1 = require("./utils/decorators/draggable");
const utils_2 = require("./utils");
const merge_props_1 = require("./base/merge-props");
const Tooltip_1 = require('@patternfly/react-core/dist/js/components/Tooltip/Tooltip');
const c_table__sticky_cell_MinWidth_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/c_table__sticky_cell_MinWidth'));
const c_table__sticky_cell_InsetInlineStart_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/c_table__sticky_cell_InsetInlineStart'));
const c_table__sticky_cell_InsetInlineEnd_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/c_table__sticky_cell_InsetInlineEnd'));
const TdBase = (_a) => {
    var { children, className, isActionCell = false, component = 'td', dataLabel, textCenter = false, modifier, select = null, actions = null, expand = null, treeRow: treeRowProp = null, compoundExpand: compoundExpandProp = null, noPadding, width, visibility, innerRef, favorites = null, draggableRow: draggableRowProp = null, tooltip = '', onMouseEnter: onMouseEnterProp = () => { }, isStickyColumn = false, hasRightBorder = false, hasLeftBorder = false, stickyMinWidth = '120px', stickyLeftOffset, stickyRightOffset } = _a, props = tslib_1.__rest(_a, ["children", "className", "isActionCell", "component", "dataLabel", "textCenter", "modifier", "select", "actions", "expand", "treeRow", "compoundExpand", "noPadding", "width", "visibility", "innerRef", "favorites", "draggableRow", "tooltip", "onMouseEnter", "isStickyColumn", "hasRightBorder", "hasLeftBorder", "stickyMinWidth", "stickyLeftOffset", "stickyRightOffset"]);
    const [showTooltip, setShowTooltip] = React.useState(false);
    const [truncated, setTruncated] = React.useState(false);
    const cellRef = innerRef ? innerRef : React.createRef();
    const onMouseEnter = (event) => {
        if (event.target.offsetWidth < event.target.scrollWidth) {
            !showTooltip && setShowTooltip(true);
        }
        else {
            showTooltip && setShowTooltip(false);
        }
        onMouseEnterProp(event);
    };
    const selectParams = select
        ? (0, utils_1.selectable)(children, {
            rowIndex: select.rowIndex,
            rowData: {
                selected: select.isSelected,
                disableSelection: select === null || select === void 0 ? void 0 : select.isDisabled,
                props: select === null || select === void 0 ? void 0 : select.props
            },
            column: {
                extraParams: {
                    onSelect: select === null || select === void 0 ? void 0 : select.onSelect,
                    selectVariant: select.variant || 'checkbox'
                }
            }
        })
        : null;
    const favoriteParams = favorites
        ? (0, utils_1.favoritable)(null, {
            rowIndex: favorites === null || favorites === void 0 ? void 0 : favorites.rowIndex,
            rowData: {
                favorited: favorites.isFavorited,
                favoritesProps: favorites === null || favorites === void 0 ? void 0 : favorites.props
            },
            column: {
                extraParams: {
                    onFavorite: favorites === null || favorites === void 0 ? void 0 : favorites.onFavorite
                }
            }
        })
        : null;
    const draggableParams = draggableRowProp !== null
        ? (0, draggable_1.draggable)(null, {
            rowData: {
                id: draggableRowProp.id
            }
        })
        : null;
    const actionParamsFunc = actions ? (0, utils_1.cellActions)(actions.items, null, null) : null;
    const actionParams = actionParamsFunc
        ? actionParamsFunc(null, {
            rowIndex: actions === null || actions === void 0 ? void 0 : actions.rowIndex,
            rowData: {
                disableActions: actions === null || actions === void 0 ? void 0 : actions.isDisabled
            },
            column: {
                extraParams: {
                    dropdownPosition: actions === null || actions === void 0 ? void 0 : actions.dropdownPosition,
                    dropdownDirection: actions === null || actions === void 0 ? void 0 : actions.dropdownDirection,
                    menuAppendTo: actions === null || actions === void 0 ? void 0 : actions.menuAppendTo,
                    actionsToggle: actions === null || actions === void 0 ? void 0 : actions.actionsToggle
                }
            }
        })
        : null;
    const expandableParams = expand !== null
        ? (0, utils_1.collapsible)(null, {
            rowIndex: expand.rowIndex,
            columnIndex: expand === null || expand === void 0 ? void 0 : expand.columnIndex,
            rowData: {
                isOpen: expand.isExpanded
            },
            column: {
                extraParams: {
                    onCollapse: expand === null || expand === void 0 ? void 0 : expand.onToggle,
                    expandId: expand === null || expand === void 0 ? void 0 : expand.expandId
                }
            }
        })
        : null;
    const compoundParams = compoundExpandProp !== null
        ? (0, utils_1.compoundExpand)({
            title: children,
            props: {
                isOpen: compoundExpandProp.isExpanded
            }
        }, {
            rowIndex: compoundExpandProp === null || compoundExpandProp === void 0 ? void 0 : compoundExpandProp.rowIndex,
            columnIndex: compoundExpandProp === null || compoundExpandProp === void 0 ? void 0 : compoundExpandProp.columnIndex,
            column: {
                extraParams: {
                    onExpand: compoundExpandProp === null || compoundExpandProp === void 0 ? void 0 : compoundExpandProp.onToggle,
                    expandId: compoundExpandProp === null || compoundExpandProp === void 0 ? void 0 : compoundExpandProp.expandId
                }
            }
        })
        : null;
    const widthParams = width ? (0, utils_1.cellWidth)(width)() : null;
    const visibilityParams = visibility
        ? (0, utils_1.classNames)(...visibility.map((vis) => utils_1.Visibility[vis]))()
        : null;
    const treeRowParams = treeRowProp !== null
        ? (0, utils_2.treeRow)(treeRowProp.onCollapse, treeRowProp.onCheckChange, treeRowProp.onToggleRowDetails)({
            title: children
        }, {
            rowIndex: treeRowProp.rowIndex,
            rowData: {
                props: treeRowProp.props
            }
        })
        : null;
    const merged = (0, merge_props_1.mergeProps)(selectParams, actionParams, expandableParams, compoundParams, widthParams, visibilityParams, favoriteParams, treeRowParams, draggableParams);
    const { 
    // selectable adds this but we don't want it
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isVisible = null, children: mergedChildren = null, className: mergedClassName = '', component: MergedComponent = component } = merged, mergedProps = tslib_1.__rest(merged, ["isVisible", "children", "className", "component"]);
    const treeTableTitleCell = (className && className.includes(table_tree_view_1.default.tableTreeViewTitleCell)) ||
        (mergedClassName && mergedClassName.includes(table_tree_view_1.default.tableTreeViewTitleCell));
    React.useEffect(() => {
        setTruncated(cellRef.current.offsetWidth <
            cellRef.current.scrollWidth);
    }, [cellRef]);
    const cell = (React.createElement(MergedComponent, Object.assign({ tabIndex: (select || !truncated) && modifier !== 'truncate' ? -1 : 0 }, (!treeTableTitleCell && { 'data-label': dataLabel }), { onFocus: tooltip !== null ? onMouseEnter : onMouseEnterProp, onBlur: () => setShowTooltip(false), onMouseEnter: tooltip !== null ? onMouseEnter : onMouseEnterProp, className: (0, react_styles_1.css)(table_1.default.tableTd, className, isActionCell && table_1.default.tableAction, textCenter && table_1.default.modifiers.center, noPadding && table_1.default.modifiers.noPadding, isStickyColumn && table_scrollable_1.default.tableStickyCell, hasRightBorder && table_scrollable_1.default.modifiers.borderRight, hasLeftBorder && table_scrollable_1.default.modifiers.borderLeft, table_1.default.modifiers[modifier], draggableParams && table_1.default.tableDraggable, mergedClassName), ref: cellRef }, mergedProps, props, (isStickyColumn && {
        style: Object.assign({ [c_table__sticky_cell_MinWidth_1.default.name]: stickyMinWidth ? stickyMinWidth : undefined, [c_table__sticky_cell_InsetInlineStart_1.default.name]: stickyLeftOffset ? stickyLeftOffset : 0, [c_table__sticky_cell_InsetInlineEnd_1.default.name]: stickyRightOffset ? stickyRightOffset : 0 }, props.style)
    })), mergedChildren || children));
    const canMakeDefaultTooltip = tooltip === '' ? typeof children === 'string' : true;
    return tooltip !== null && canMakeDefaultTooltip && showTooltip ? (React.createElement(React.Fragment, null,
        cell,
        React.createElement(Tooltip_1.Tooltip, { triggerRef: cellRef, content: tooltip || (tooltip === '' && children), isVisible: true }))) : (cell);
};
exports.Td = React.forwardRef((props, ref) => (React.createElement(TdBase, Object.assign({}, props, { innerRef: ref }))));
exports.Td.displayName = 'Td';
//# sourceMappingURL=Td.js.map