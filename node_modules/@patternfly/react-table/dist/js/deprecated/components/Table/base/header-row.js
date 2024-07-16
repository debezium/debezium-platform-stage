"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderRow = void 0;
const tslib_1 = require("tslib");
/**
 * header-row.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
const React = tslib_1.__importStar(require("react"));
const evaluate_formatters_1 = require("../../../../components/Table/base/evaluate-formatters");
const evaluate_transforms_1 = require("../../../../components/Table/base/evaluate-transforms");
const merge_props_1 = require("../../../../components/Table/base/merge-props");
const components_1 = require("../../../../components");
const HeaderRow = ({ rowData, rowIndex, renderers, onRow = () => ({}) }) => React.createElement(renderers.row, onRow(rowData, { rowIndex }), rowData.map((column, columnIndex) => {
    const { property, header = {}, props = {} } = column;
    const evaluatedProperty = property || (header && header.property);
    const { label, transforms = [], formatters = [], info = {} } = header;
    const extraParameters = {
        columnIndex,
        property: evaluatedProperty,
        column
    };
    const transformedProps = (0, evaluate_transforms_1.evaluateTransforms)(transforms, label, extraParameters);
    if (!transformedProps) {
        // tslint:disable-next-line:no-console
        console.warn('Table.Header - Failed to receive a transformed result'); // eslint-disable-line max-len, no-console
    }
    let cellNode;
    const { tooltip, tooltipProps, popover, popoverProps, ariaLabel, className } = info;
    // consumer can specify header cell tooltip/popover in two ways, but the transforms approach is preferred,
    // especially for sorting tables that use `transforms: [sortable]`
    // {
    //   title: 'Repositories',
    //   header: {
    //     info: {
    //       tooltip: 'More information about repositories',
    //       className: 'repositories-info-tip',
    //       tooltipProps: {
    //         isContentLeftAligned: true
    //       }
    //     }
    //   }
    // }
    //
    // {
    //   title: 'Repositories',
    //   transforms: [
    //     info({
    //       tooltip: 'More information about repositories',
    //       className: 'repositories-info-tip',
    //       tooltipProps: {
    //         isContentLeftAligned: true
    //       }
    //     }),
    //     sortable
    //   ]
    // },
    if (tooltip) {
        cellNode = (React.createElement(components_1.HeaderCellInfoWrapper, { variant: "tooltip", info: tooltip, tooltipProps: tooltipProps, ariaLabel: ariaLabel, className: className }, transformedProps.children || (0, evaluate_formatters_1.evaluateFormatters)(formatters)(label, extraParameters)));
    }
    else if (popover) {
        cellNode = (React.createElement(components_1.HeaderCellInfoWrapper, { variant: "popover", info: popover, popoverProps: popoverProps, ariaLabel: ariaLabel, className: className }, transformedProps.children || (0, evaluate_formatters_1.evaluateFormatters)(formatters)(label, extraParameters)));
    }
    else {
        cellNode = transformedProps.children || (0, evaluate_formatters_1.evaluateFormatters)(formatters)(label, extraParameters);
    }
    return React.createElement(renderers.cell, Object.assign({ key: `${columnIndex}-header` }, (0, merge_props_1.mergeProps)(props, header && header.props, transformedProps)), cellNode);
}));
exports.HeaderRow = HeaderRow;
exports.HeaderRow.displayName = 'HeaderRow';
//# sourceMappingURL=header-row.js.map