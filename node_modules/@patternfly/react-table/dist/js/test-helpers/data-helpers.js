"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildExpandableRows = void 0;
const buildExpandableRows = (relationships = {}, openIndexes = [], rowCount = 10) => {
    const rows = [];
    for (let i = 0; i < rowCount; i++) {
        const row = {
            data: {
                mockData: 'mock'
            }
        };
        if (openIndexes.indexOf(i) >= 0) {
            row.isOpen = true;
        }
        if (relationships[i] >= 0) {
            row.parent = relationships[i];
        }
        rows.push(row);
    }
    return rows;
};
exports.buildExpandableRows = buildExpandableRows;
//# sourceMappingURL=data-helpers.js.map