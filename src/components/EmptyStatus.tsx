import {
  EmptyState,
  EmptyStateActions,
  EmptyStateBody,
  EmptyStateFooter,
} from "@patternfly/react-core";
import { FC, ReactNode } from "react";

interface EmptyStatusProps {
  heading: string;
  message: string;
  primaryAction: ReactNode;

}

const EmptyStatus: FC<EmptyStatusProps> = ({
  heading,
  message,
  primaryAction
}) => {
  return (
    <EmptyState variant="full" titleText={heading}>
    {/* // <EmptyState>
    // <EmptyStateHeader titleText={heading} headingLevel="h4" icon={<EmptyStateIcon icon={CubesIcon} />} /> */}
    <EmptyStateBody>
      {message}
    </EmptyStateBody>
    <EmptyStateFooter>
      <EmptyStateActions>
        {primaryAction}
      </EmptyStateActions>
      {/* <EmptyStateActions>
        <Button variant="link">Multiple</Button>
        <Button variant="link">Action Buttons</Button>
        <Button variant="link">Can</Button>
        <Button variant="link">Go here</Button>
        <Button variant="link">In the secondary</Button>
        <Button variant="link">Action area</Button>
      </EmptyStateActions> */}
    </EmptyStateFooter>
  </EmptyState>
  );
};

export default EmptyStatus;
