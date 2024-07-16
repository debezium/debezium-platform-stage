import * as React from 'react';
import { DraggableCell } from '../../DraggableCell';
export const draggable = (value, { rowData }) => {
    const { id } = rowData;
    return {
        className: '',
        children: React.createElement(DraggableCell, { id: id })
    };
};
//# sourceMappingURL=draggable.js.map