"use strict";
/**
 * types.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableDefaults = void 0;
const Table_1 = require("../Table");
const Thead_1 = require("../Thead");
const Tbody_1 = require("../Tbody");
const Tr_1 = require("../Tr");
const Th_1 = require("../Th");
const Td_1 = require("../Td");
// Table Defaults
exports.TableDefaults = {
    renderers: {
        table: Table_1.Table,
        header: {
            wrapper: Thead_1.Thead,
            row: Tr_1.Tr,
            cell: Th_1.Th
        },
        body: {
            wrapper: Tbody_1.Tbody,
            row: Tr_1.Tr,
            cell: Td_1.Td
        }
    }
};
//# sourceMappingURL=types.js.map