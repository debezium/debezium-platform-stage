import * as React from 'react';
export interface DefsMap {
    [id: string]: {
        count: number;
        node: React.ReactNode;
    };
}
export interface DefsState {
    defs?: DefsMap;
}
export interface SVGDefsProviderProps {
    children?: React.ReactNode;
}
/**
 * Renders a `<defs>` element and sets up a {@link SVGDefsContext} provider such that child components
 * may contribute to the `<defs>` without the parent component needing explicit knowledge of each contribution.
 * This helps decouple the parent implementation from the children and ensures that duplicate defs entries,
 * such as filters, are eliminated.
 */
declare class SVGDefsProvider extends React.Component<SVGDefsProviderProps> {
    private readonly defsRef;
    private readonly defs;
    private contextValue;
    private updateDefs;
    render(): JSX.Element;
}
export default SVGDefsProvider;
//# sourceMappingURL=SVGDefsProvider.d.ts.map