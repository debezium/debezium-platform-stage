import * as React from 'react';
interface LayersProviderProps {
    layers?: string[];
    children?: React.ReactNode;
}
interface State {
    [id: string]: Element;
}
export default class LayersProvider extends React.Component<LayersProviderProps, State> {
    constructor(props: LayersProviderProps);
    private contextValue;
    private setDomLayers;
    getLayerNode: (id: string) => Element;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=LayersProvider.d.ts.map