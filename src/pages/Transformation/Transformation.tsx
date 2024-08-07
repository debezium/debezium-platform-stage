import * as React from "react";
import { Button, PageSection } from "@patternfly/react-core";
import { PlusIcon } from "@patternfly/react-icons";
import EmptyStatus from "../../components/EmptyStatus";
import comingSoonImage from "../../assets/comingSoon.png";
import "./Transformation.css";
import { useData } from "../../appLayout/AppContext";

export interface ITransformationProps {
  sampleProp?: string;
}

const Transformation: React.FunctionComponent<ITransformationProps> = () => {
  const { darkMode } = useData();
  return (
    <>
      <PageSection style={{ position: "relative" }}>
        <div
          className="transformation_overlay"
          style={darkMode ? { background: "rgba(41, 41, 41, 0.6)" } : {}}
        >
          <img src={comingSoonImage} alt="Coming Soon" />
        </div>
        <EmptyStatus
          heading="No transformation available"
          primaryMessage=' No Transformation is configure for this cluster yet. To streams change
              events from a Transformation database you can configure a source by click
              the "Add Transformation" button.'
          secondaryMessage=""
          primaryAction={
            <Button variant="primary" icon={<PlusIcon />}>
              Add Transformation
            </Button>
          }
          secondaryActions={
            <>
              <Button variant="link">Go to source</Button>
              <Button variant="link">Go to destination</Button>
              <Button variant="link">Go to pipeline</Button>
            </>
          }
        />
      </PageSection>
    </>
  );
};

export { Transformation };
