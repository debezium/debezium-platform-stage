/**
 * types.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import { Table } from '../Table';
import { Thead } from '../Thead';
import { Tbody } from '../Tbody';
import { Tr } from '../Tr';
import { Th } from '../Th';
import { Td } from '../Td';
// Table Defaults
export const TableDefaults = {
    renderers: {
        table: Table,
        header: {
            wrapper: Thead,
            row: Tr,
            cell: Th
        },
        body: {
            wrapper: Tbody,
            row: Tr,
            cell: Td
        }
    }
};
//# sourceMappingURL=types.js.map