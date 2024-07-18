import {
  EmptyState,
  EmptyStateActions,
  EmptyStateBody,
  EmptyStateFooter,
  EmptyStateVariant,
  Text,
  TextContent,
  TextVariants,
} from "@patternfly/react-core";
import { CubesIcon } from "@patternfly/react-icons";
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
      variant={EmptyStateVariant.full}
      titleText={heading}
      headingLevel="h4"
      icon={CubesIcon}
    >
      <EmptyStateBody>
        <TextContent>
          <Text component="p">{primaryMessage}</Text>
          <Text component={TextVariants.small}>{secondaryMessage}</Text>
        </TextContent>
      </EmptyStateBody>
      <EmptyStateFooter>
        {primaryAction}
        <EmptyStateActions>{secondaryActions}</EmptyStateActions>
      </EmptyStateFooter>
    </EmptyState>
  );
};

export default EmptyStatus;
