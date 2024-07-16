import * as React from 'react';
import { ClipboardCopyProps } from './ClipboardCopy';
import { PickOptional } from '../../helpers/typeUtils';
export interface ClipboardCopyExpandedProps extends Omit<ClipboardCopyProps, 'onChange'> {
    className?: string;
    onChange?: (e: React.FormEvent<HTMLDivElement>, text: string) => void;
    isReadOnly?: boolean;
    isCode?: boolean;
}
declare class ClipboardCopyExpanded extends React.Component<ClipboardCopyExpandedProps> {
    static displayName: string;
    constructor(props: any);
    static defaultProps: PickOptional<ClipboardCopyExpandedProps>;
    render(): React.JSX.Element;
}
export { ClipboardCopyExpanded };
//# sourceMappingURL=ClipboardCopyExpanded.d.ts.map