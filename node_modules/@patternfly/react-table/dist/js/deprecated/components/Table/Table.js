"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_core_1 = require("@patternfly/react-core");
const inline_edit_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/InlineEdit/inline-edit"));
const react_styles_1 = require("@patternfly/react-styles");
const provider_1 = require("../../../components/Table/base/provider");
const BodyCell_1 = require("./BodyCell");
const HeaderCell_1 = require("./HeaderCell");
const components_1 = require("../../../components");
const BodyWrapper_1 = require("./BodyWrapper");
const components_2 = require("../../../components");
const TableContext_1 = require("./TableContext");
const components_3 = require("../../../components");
class Table extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            ouiaStateId: (0, react_core_1.getDefaultOUIAId)(Table.displayName)
        };
        this.isSelected = (row) => row.selected === true;
        this.areAllRowsSelected = (rows) => {
            if (rows === undefined || rows.length === 0) {
                return false;
            }
            return rows.every((row) => this.isSelected(row) || row.disableSelection || (row.hasOwnProperty('parent') && !row.showSelect));
        };
        this.areAllExpanded = (rows) => {
            if (rows === undefined || rows.length === 0) {
                return false;
            }
            return rows.every((row) => row.isOpen === undefined || row.isOpen);
        };
    }
    render() {
        const _a = this.props, { 'aria-label': ariaLabel, caption, header, onSort, onSelect, canSelectAll, canCollapseAll, isHeaderSelectDisabled, selectVariant, collapseAllAriaLabel, sortBy, children, actions, actionResolver, areActionsDisabled, onCollapse, onExpand, onRowEdit, rowLabeledBy, dropdownPosition, dropdownDirection, actionsMenuAppendTo: menuAppendTo, actionsToggle, contentId, expandId, variant, rows, cells, bodyWrapper, rowWrapper, role, borders, onFavorite, canSortFavorites } = _a, props = tslib_1.__rest(_a, ['aria-label', "caption", "header", "onSort", "onSelect", "canSelectAll", "canCollapseAll", "isHeaderSelectDisabled", "selectVariant", "collapseAllAriaLabel", "sortBy", "children", "actions", "actionResolver", "areActionsDisabled", "onCollapse", "onExpand", "onRowEdit", "rowLabeledBy", "dropdownPosition", "dropdownDirection", "actionsMenuAppendTo", "actionsToggle", "contentId", "expandId", "variant", "rows", "cells", "bodyWrapper", "rowWrapper", "role", "borders", "onFavorite", "canSortFavorites"]);
        if (!ariaLabel && !caption && !header && role !== 'presentation') {
            // eslint-disable-next-line no-console
            console.error('Table: Specify at least one of: header, caption, aria-label');
        }
        const headerData = (0, components_2.calculateColumns)(cells, {
            sortBy,
            onSort,
            onSelect,
            canSelectAll: selectVariant === components_2.RowSelectVariant.radio ? false : canSelectAll,
            canCollapseAll,
            isHeaderSelectDisabled,
            selectVariant,
            collapseAllAriaLabel,
            allRowsSelected: onSelect ? this.areAllRowsSelected(rows) : false,
            allRowsExpanded: onCollapse ? this.areAllExpanded(rows) : false,
            actions,
            actionResolver,
            areActionsDisabled,
            onCollapse,
            onRowEdit,
            onExpand,
            rowLabeledBy,
            expandId,
            contentId,
            dropdownPosition,
            dropdownDirection,
            menuAppendTo,
            actionsToggle,
            onFavorite,
            canSortFavorites,
            // order of columns: Collapsible | Selectable | Favoritable
            firstUserColumnIndex: [onCollapse, onSelect, onFavorite].filter((callback) => callback).length
        });
        const table = (React.createElement(TableContext_1.TableContext.Provider, { value: {
                headerData,
                headerRows: null,
                rows
            } },
            header,
            React.createElement(provider_1.Provider, Object.assign({}, props, { "aria-label": ariaLabel, renderers: {
                    body: {
                        wrapper: bodyWrapper || BodyWrapper_1.BodyWrapper,
                        row: rowWrapper || (this.props.isTreeTable ? components_3.TreeRowWrapper : components_1.RowWrapper),
                        cell: BodyCell_1.BodyCell
                    },
                    header: {
                        cell: HeaderCell_1.HeaderCell
                    }
                }, columns: headerData, role: role, variant: variant, borders: borders }),
                caption && React.createElement("caption", null, caption),
                children)));
        if (onRowEdit) {
            return React.createElement("form", { className: (0, react_styles_1.css)(inline_edit_1.default.inlineEdit) }, table);
        }
        return table;
    }
}
exports.Table = Table;
Table.displayName = 'Table';
Table.hasWarnBeta = false;
Table.defaultProps = {
    children: null,
    className: '',
    variant: null,
    borders: true,
    rowLabeledBy: 'simple-node',
    expandId: 'expandable-toggle',
    contentId: 'expanded-content',
    dropdownPosition: 'right',
    dropdownDirection: 'down',
    actionsMenuAppendTo: 'inline',
    header: undefined,
    caption: undefined,
    'aria-label': undefined,
    gridBreakPoint: components_3.TableGridBreakpoint.gridMd,
    role: 'grid',
    canSelectAll: true,
    canCollapseAll: false,
    isHeaderSelectDisabled: false,
    selectVariant: 'checkbox',
    collapseAllAriaLabel: '',
    ouiaSafe: true,
    isStickyHeader: false,
    canSortFavorites: true,
    isTreeTable: false,
    isNested: false
};
//# sourceMappingURL=Table.js.map