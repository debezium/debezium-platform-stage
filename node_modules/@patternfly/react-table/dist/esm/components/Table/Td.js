import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table.mjs';
import scrollStyles from '@patternfly/react-styles/css/components/Table/table-scrollable.mjs';
import treeViewStyles from '@patternfly/react-styles/css/components/Table/table-tree-view.mjs';
import { cellActions, selectable, collapsible, compoundExpand, cellWidth, Visibility, classNames, favoritable } from './utils';
import { draggable } from './utils/decorators/draggable';
import { treeRow } from './utils';
import { mergeProps } from './base/merge-props';
import { Tooltip } from '@patternfly/react-core/dist/esm/components/Tooltip/Tooltip';
import cssStickyCellMinWidth from '@patternfly/react-tokens/dist/esm/c_table__sticky_cell_MinWidth';
import cssStickyCellInlineStart from '@patternfly/react-tokens/dist/esm/c_table__sticky_cell_InsetInlineStart';
import cssStickyCellInlineEnd from '@patternfly/react-tokens/dist/esm/c_table__sticky_cell_InsetInlineEnd';
const TdBase = (_a) => {
    var { children, className, isActionCell = false, component = 'td', dataLabel, textCenter = false, modifier, select = null, actions = null, expand = null, treeRow: treeRowProp = null, compoundExpand: compoundExpandProp = null, noPadding, width, visibility, innerRef, favorites = null, draggableRow: draggableRowProp = null, tooltip = '', onMouseEnter: onMouseEnterProp = () => { }, isStickyColumn = false, hasRightBorder = false, hasLeftBorder = false, stickyMinWidth = '120px', stickyLeftOffset, stickyRightOffset } = _a, props = __rest(_a, ["children", "className", "isActionCell", "component", "dataLabel", "textCenter", "modifier", "select", "actions", "expand", "treeRow", "compoundExpand", "noPadding", "width", "visibility", "innerRef", "favorites", "draggableRow", "tooltip", "onMouseEnter", "isStickyColumn", "hasRightBorder", "hasLeftBorder", "stickyMinWidth", "stickyLeftOffset", "stickyRightOffset"]);
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
        ? selectable(children, {
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
        ? favoritable(null, {
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
        ? draggable(null, {
            rowData: {
                id: draggableRowProp.id
            }
        })
        : null;
    const actionParamsFunc = actions ? cellActions(actions.items, null, null) : null;
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
        ? collapsible(null, {
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
        ? compoundExpand({
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
    const widthParams = width ? cellWidth(width)() : null;
    const visibilityParams = visibility
        ? classNames(...visibility.map((vis) => Visibility[vis]))()
        : null;
    const treeRowParams = treeRowProp !== null
        ? treeRow(treeRowProp.onCollapse, treeRowProp.onCheckChange, treeRowProp.onToggleRowDetails)({
            title: children
        }, {
            rowIndex: treeRowProp.rowIndex,
            rowData: {
                props: treeRowProp.props
            }
        })
        : null;
    const merged = mergeProps(selectParams, actionParams, expandableParams, compoundParams, widthParams, visibilityParams, favoriteParams, treeRowParams, draggableParams);
    const { 
    // selectable adds this but we don't want it
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isVisible = null, children: mergedChildren = null, className: mergedClassName = '', component: MergedComponent = component } = merged, mergedProps = __rest(merged, ["isVisible", "children", "className", "component"]);
    const treeTableTitleCell = (className && className.includes(treeViewStyles.tableTreeViewTitleCell)) ||
        (mergedClassName && mergedClassName.includes(treeViewStyles.tableTreeViewTitleCell));
    React.useEffect(() => {
        setTruncated(cellRef.current.offsetWidth <
            cellRef.current.scrollWidth);
    }, [cellRef]);
    const cell = (React.createElement(MergedComponent, Object.assign({ tabIndex: (select || !truncated) && modifier !== 'truncate' ? -1 : 0 }, (!treeTableTitleCell && { 'data-label': dataLabel }), { onFocus: tooltip !== null ? onMouseEnter : onMouseEnterProp, onBlur: () => setShowTooltip(false), onMouseEnter: tooltip !== null ? onMouseEnter : onMouseEnterProp, className: css(styles.tableTd, className, isActionCell && styles.tableAction, textCenter && styles.modifiers.center, noPadding && styles.modifiers.noPadding, isStickyColumn && scrollStyles.tableStickyCell, hasRightBorder && scrollStyles.modifiers.borderRight, hasLeftBorder && scrollStyles.modifiers.borderLeft, styles.modifiers[modifier], draggableParams && styles.tableDraggable, mergedClassName), ref: cellRef }, mergedProps, props, (isStickyColumn && {
        style: Object.assign({ [cssStickyCellMinWidth.name]: stickyMinWidth ? stickyMinWidth : undefined, [cssStickyCellInlineStart.name]: stickyLeftOffset ? stickyLeftOffset : 0, [cssStickyCellInlineEnd.name]: stickyRightOffset ? stickyRightOffset : 0 }, props.style)
    })), mergedChildren || children));
    const canMakeDefaultTooltip = tooltip === '' ? typeof children === 'string' : true;
    return tooltip !== null && canMakeDefaultTooltip && showTooltip ? (React.createElement(React.Fragment, null,
        cell,
        React.createElement(Tooltip, { triggerRef: cellRef, content: tooltip || (tooltip === '' && children), isVisible: true }))) : (cell);
};
export const Td = React.forwardRef((props, ref) => (React.createElement(TdBase, Object.assign({}, props, { innerRef: ref }))));
Td.displayName = 'Td';
//# sourceMappingURL=Td.js.map