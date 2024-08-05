import * as React from "react";
import { Button, PageSection, Text, TextContent } from "@patternfly/react-core";
import { PlusIcon } from "@patternfly/react-icons";
import EmptyStatus from "../../components/EmptyStatus";

export interface ITransformationProps {
  sampleProp?: string;
}

const Transformation: React.FunctionComponent<ITransformationProps> = () => (
  <>
    <PageSection isWidthLimited>
      <TextContent >
        <Text component="h1">Transformation</Text>
      </TextContent>
    </PageSection>
    <PageSection>
      <EmptyStatus
        heading="No transformation available"
        primaryMessage=' No Transformation is configure for this cluster yet. To streams change
              events from a Transformation database you can configure a source by click
              the "Add Transformation" button.'
        secondaryMessage="This text has overridden a css component variable to demonstrate
              how to apply customizations using PatternFly's global
              variable API."
        primaryAction={
          <Button variant="primary" icon={<PlusIcon />}>
            Add Transformation
          </Button>
        }
      />
    </PageSection>
  </>
);

export { Transformation };
