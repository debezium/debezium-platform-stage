import * as React from 'react';
declare type GetContainer = Element | null | undefined | (() => Element);
interface PortalProps {
    children?: React.ReactNode;
    container?: GetContainer;
}
declare const Portal: React.FunctionComponent<PortalProps>;
export default Portal;
//# sourceMappingURL=Portal.d.ts.map