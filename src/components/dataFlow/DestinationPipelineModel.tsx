import {
  Split,
  SplitItem,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Divider,
  Content,
} from "@patternfly/react-core";
import React, { useCallback, useEffect, useState } from "react";
import { Destination, fetchData } from "../../apis/apis";
// import { CreateDestinationForm } from "../../pages/Destination/CreateDestinationForm";
import { useQuery } from "react-query";
import { API_URL } from "../../utils/constants";
import SourceDestinationSelectionList from "../../components/SourceDestinationSelectionList";
import { CatalogGrid } from "@components/CatalogGrid";
import { CreateDestination } from "@destinationPage/CreateDestination";

type DestinationPipelineModelProps = {
  onDestinationSelection: (destination: Destination) => void;
};

const DestinationPipelineModel: React.FC<DestinationPipelineModelProps> = ({
  onDestinationSelection,
}) => {
  const id1 = "pipeline-destination-select";
  const id2 = "pipeline-destination-create";
  const [isCreateChecked, setIsCreateChecked] = useState(id1);
  const [selectedDestination, setSelectedDestination] = useState<string>("");

  const {
    data: destinationList = [],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    error: _destinationError,
    isLoading: isDestinationLoading,
  } = useQuery<Destination[], Error>("destinations", () =>
    fetchData<Destination[]>(`${API_URL}/api/destinations`)
  );

  useEffect(() => {
    if (destinationList.length === 0 && isDestinationLoading === false) {
      setIsCreateChecked(id2);
    }
  }, [destinationList, isDestinationLoading]);

  const selectDestination = useCallback(
    (destinationId: string) => {
      setSelectedDestination(destinationId);
    },
    [setSelectedDestination]
  );

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setIsCreateChecked(event.currentTarget.id);
  };

  return (
    <>
      <Split hasGutter>
        <SplitItem className="creation_flow-card_selection">
          <Card
            id="select-existing-destination"
            isSelectable
            isSelected={isCreateChecked === id1}
          >
            <CardHeader
              selectableActions={{
                selectableActionId: id1,
                selectableActionAriaLabelledby: "select-existing-destination",
                name: "pipeline-destination",
                variant: "single",
                onChange,
              }}
            >
              <CardTitle>Select a destination</CardTitle>
            </CardHeader>
            <CardBody>
              Select a already configured destination from the list below
            </CardBody>
          </Card>
        </SplitItem>

        <SplitItem className="creation_flow-card_selection">
          <Card
            id="create-new-destination"
            isSelectable
            isSelected={isCreateChecked === id2}
          >
            <CardHeader
              selectableActions={{
                selectableActionId: id2,
                selectableActionAriaLabelledby: "create-new-destination",
                name: "pipeline-destination",
                variant: "single",
                onChange,
              }}
            >
              <CardTitle>Create a destination</CardTitle>
            </CardHeader>
            <CardBody>
              Create a new destination for your data pipeline.
            </CardBody>
          </Card>
        </SplitItem>
      </Split>
      <Divider style={{ marginTop: "10px" }} />
      {isCreateChecked === id2 &&
        (selectedDestination === "" ? (
          //   <TextContent style={{ padding: "10px" }}>
          <Content component="p">
            <b>
              Select the type of destination you want to connect from the list
              below, once you select a connector you can configure it using form
              or smart editor option.
            </b>
          </Content>
        ) : (
          // </TextContent>
          // <TextContent style={{ padding: "10px" }}>
          <Content component="p">
            <b>
              Fill out the below form or use the smart editor to setup a new
              destination connector. If you already have a configuration file,
              you can setup a new destination connector by uploading it in the
              smart editor.
            </b>
          </Content>
          // </TextContent>
        ))}

      {isCreateChecked === id1 ? (
        <SourceDestinationSelectionList
          tableType="destination"
          data={destinationList}
          onSelection={onDestinationSelection}
        />
      ) : selectedDestination === "" ? (
        <CatalogGrid
          onCardSelect={selectDestination}
          catalogType="destination"
          isAddButtonVisible={false}
        />
      ) : (
        <CreateDestination
          modelLoaded={true}
          selectedId={selectedDestination}
          selectDestination={selectDestination}
          onSelection={onDestinationSelection}
        />
      )}
    </>
  );
};

export default DestinationPipelineModel;
