import React from 'react';
import { WizardProps } from './Wizard';
import { WizardNavProps } from './WizardNav';
/**
 * Hosts default wizard navigation logic by utilizing the wizard's context and WizardNav/WizardNavItem.
 * This component is not exposed to consumers.
 */
interface WizardNavInternalProps extends Pick<WizardProps, 'isVisitRequired' | 'isProgressive'> {
    nav: Partial<WizardNavProps>;
    navAriaLabel: string;
    isNavExpanded: boolean;
}
export declare const WizardNavInternal: ({ nav, navAriaLabel, isVisitRequired, isProgressive, isNavExpanded }: WizardNavInternalProps) => React.JSX.Element;
export {};
//# sourceMappingURL=WizardNavInternal.d.ts.map