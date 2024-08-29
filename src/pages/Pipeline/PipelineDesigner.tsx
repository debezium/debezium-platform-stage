import * as React from "react";
import {
  ActionGroup,
  Button,
  Card,
  CardBody,
  CardFooter,
  Content,
  PageSection,
} from "@patternfly/react-core";

import { useNavigate } from "react-router-dom";
import "./PipelineDesigner.css";
// import CompositionFlow from "../../components/dataFlow/CompositionFlow";
import CreationFlow from "../../components/dataFlow/CreationFlow";
import { Destination, Source } from "../../apis/apis";
// import { useData } from "../../appLayout/AppContext";

const PipelineDesigner: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const [isSourceConfigured, setIsSourceConfigured] = React.useState(false);
  const [isDestinationConfigured, setIsDestinationConfigured] =
    React.useState(false);

  const [selectedSource, setSelectedSource] = React.useState<Source>();
  const [selectedDestination, setSelectedDestination] =
    React.useState<Destination>();

  const updateIfSourceConfigured = React.useCallback(
    (isConfigured: boolean) => {
      setIsSourceConfigured(isConfigured);
    },
    []
  );

  const updateIfDestinationConfigured = React.useCallback(
    (isConfigured: boolean) => {
      setIsDestinationConfigured(isConfigured);
    },
    []
  );

  const updateSelectedSource = React.useCallback((source: Source) => {
    setSelectedSource(source);
  }, []);

  const updateSelectedDestination = React.useCallback(
    (destination: Destination) => {
      setSelectedDestination(destination);
    },
    []
  );



  const navigateTo = (url: string) => {
    // setSource(selectedSource!);
    // setDestination(selectedDestination!);
    navigate(url);
  };

  return (
    <>
      <PageSection isWidthLimited>
          <Content component="h1">Pipeline designer</Content>
          <Content component="p">
            Configure the pipeline by adding an existing source and destination
            or create a new one as per you need. Optionally you can also any
            number of transformation as needed.
          </Content>
      </PageSection>
      <PageSection isFilled>
        <Card isFullHeight>
          <CardBody isFilled>
            <CreationFlow
              updateIfSourceConfigured={updateIfSourceConfigured}
              updateIfDestinationConfigured={updateIfDestinationConfigured}
              isSourceConfigured={isSourceConfigured}
              isDestinationConfigured={isDestinationConfigured}
              updateSelectedSource={updateSelectedSource}
              updateSelectedDestination={updateSelectedDestination}
            />
          </CardBody>

          <CardFooter className="custom-card-footer">
            <ActionGroup style={{ marginTop: 0 }}>
              <Button
                variant="primary"
                isDisabled={!(isSourceConfigured && isDestinationConfigured)}
                onClick={() =>
                  navigateTo(`/pipeline/pipeline_designer/create_pipeline?sourceId=${selectedSource?.id}&destinationId=${selectedDestination?.id}`)
                }
              >
                Configure Pipeline
              </Button>
              <Button variant="link" onClick={() => navigateTo("/pipeline")}>
                Cancel
              </Button>
            </ActionGroup>
          </CardFooter>
        </Card>
      </PageSection>
    </>
  );
};

export { PipelineDesigner };
