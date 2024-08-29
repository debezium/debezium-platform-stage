import {
  Content,
  ContentVariants,
  EmptyState,
  EmptyStateActions,
  EmptyStateBody,
  EmptyStateFooter,
  EmptyStateVariant,
} from "@patternfly/react-core";
import { PlusCircleIcon } from "@patternfly/react-icons";
import { FC, ReactNode } from "react";

interface EmptyStatusProps {
  heading: string;
  primaryMessage: string;
  secondaryMessage: string;
  primaryAction: ReactNode;
  secondaryActions?: ReactNode;
}

const EmptyStatus: FC<EmptyStatusProps> = ({
  heading,
  primaryMessage,
  secondaryMessage,
  primaryAction,
  secondaryActions,
}) => {
  return (
    <EmptyState
      variant={EmptyStateVariant.lg}
      titleText={heading}
      headingLevel="h4"
      icon={PlusCircleIcon}
    >
      <EmptyStateBody>
          <Content component="p">{primaryMessage}</Content>
          <Content component={ContentVariants.small}>{secondaryMessage}</Content>
      </EmptyStateBody>
      <EmptyStateFooter>
        {primaryAction}
        <EmptyStateActions>{secondaryActions}</EmptyStateActions>
      </EmptyStateFooter>
    </EmptyState>
  );
};

export default EmptyStatus;
