import { ReactNode } from 'react';
export interface SVGDefsContextProps {
    addDef(id: string, node: ReactNode): void;
    removeDef(id: string): void;
}
declare const SVGDefsContext: import("react").Context<SVGDefsContextProps>;
export default SVGDefsContext;
//# sourceMappingURL=SVGDefsContext.d.ts.map