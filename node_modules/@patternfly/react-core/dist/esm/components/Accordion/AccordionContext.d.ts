import * as React from 'react';
interface AccordionContextProps {
    ContentContainer: React.ElementType;
    ToggleContainer: React.ElementType;
    togglePosition: 'start' | 'end';
}
interface AccordionItemContextProps {
    isExpanded?: boolean;
}
export declare const AccordionContext: React.Context<Partial<AccordionContextProps>>;
export declare const AccordionItemContext: React.Context<AccordionItemContextProps>;
export {};
//# sourceMappingURL=AccordionContext.d.ts.map