import * as React from "react";
import {
  Button,
  EmptyState,
  EmptyStateActions,
  EmptyStateBody,
  EmptyStateFooter,
  EmptyStateVariant,
  PageSection,
  Text,
  TextContent,
  TextVariants,
} from "@patternfly/react-core";
import { CubesIcon, PlusIcon } from "@patternfly/react-icons";

export interface ISourceProps {
  sampleProp?: string;
}

// eslint-disable-next-line prefer-const
let Source: React.FunctionComponent<ISourceProps> = () => (
  <PageSection>
    <EmptyState
      variant={EmptyStateVariant.full}
      titleText="No source available"
      headingLevel="h4" icon={CubesIcon}
    >
      <EmptyStateBody>
        <TextContent>
          <Text component="p">
            No source is configure for this cluster yet. To listening you change
            data event configure a source by click the &quot;Add source&quot;
            button.
          </Text>
          <Text component={TextVariants.small}>
            This text has overridden a css component variable to demonstrate how
            to apply customizations using PatternFly&apos;s global variable API.
          </Text>
        </TextContent>
      </EmptyStateBody>
      <EmptyStateFooter>
        <Button variant="primary" icon={<PlusIcon />}>
          Add source
        </Button>
        <EmptyStateActions>
          <Button variant="link">Go to destination</Button>
          <Button variant="link">Configure Vaults</Button>
        </EmptyStateActions>
      </EmptyStateFooter>
    </EmptyState>
  </PageSection>
);

export { Source };
