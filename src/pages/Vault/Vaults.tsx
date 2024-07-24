import * as React from "react";
import { Button, PageSection, Text, TextContent } from "@patternfly/react-core";
import { PlusIcon } from "@patternfly/react-icons";
import EmptyStatus from "../../components/EmptyStatus";
import { useNavigate } from "react-router-dom";

export interface IVaultsProps {
  sampleProp?: string;
}

const Vaults: React.FunctionComponent<IVaultsProps> = () => {
  const navigate = useNavigate();

  const navigateTo = (url: string) => {
    navigate(url);
  };

  return (
    <>
      <PageSection isWidthLimited>
        <TextContent>
          <Text component="h1">Vaults</Text>
        </TextContent>
      </PageSection>
      <PageSection>
        <EmptyStatus
          heading="No vaults available"
          primaryMessage=' No vaults is configure for this cluster yet. To streams change
              events from a source database you can configure a source by click
              the "Add vaults" button.'
          secondaryMessage="This text has overridden a css component variable to demonstrate
              how to apply customizations using PatternFly's global
              variable API."
          primaryAction={
            <Button variant="primary" icon={<PlusIcon />}>
              Add vaults
            </Button>
          }
          secondaryActions={
            <>
              <Button variant="link" onClick={() => navigateTo("/source")}>
                Go to source
              </Button>
              <Button variant="link" onClick={() => navigateTo("/source")}>
                Go to destination
              </Button>
            </>
          }
        />
      </PageSection>
    </>
  );
};

export { Vaults };
