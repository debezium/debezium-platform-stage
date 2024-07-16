import * as React from 'react';
import { PickOptional } from '../../helpers';
/** Acts as a container for all other DualListSelector sub-components when using a
 * composable dual list selector.
 */
export interface DualListSelectorProps {
    /** Additional classes applied to the dual list selector. */
    className?: string;
    /** ID of the dual list selector. */
    id?: string;
    /** Flag indicating if the dual list selector uses trees instead of simple lists. */
    isTree?: boolean;
    /** Content to be rendered in the dual list selector. */
    children?: React.ReactNode;
}
declare class DualListSelector extends React.Component<DualListSelectorProps> {
    static displayName: string;
    static defaultProps: PickOptional<DualListSelectorProps>;
    constructor(props: DualListSelectorProps);
    render(): React.JSX.Element;
}
export { DualListSelector };
//# sourceMappingURL=DualListSelector.d.ts.map