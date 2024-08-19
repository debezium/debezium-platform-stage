import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Divider,
  Text,
  TextContent,
  Flex,
  FlexItem,
} from "@patternfly/react-core";
import React, { useCallback, useEffect, useState } from "react";
import { fetchData, Source } from "../../apis/apis";
import { SourceCatalogGrid } from "../../pages/Source/SourceCatalogGrid";
import { CreateSourceForm } from "../../pages/Source/CreateSourceForm";
import { API_URL } from "../../utils/constants";
import { useQuery } from "react-query";
import SourceDestinationSelectionList from "../../components/SourceDestinationSelectionList";

type SourcePipelineModelProps = {
  onSourceSelection: (source: Source) => void;
};

const SourcePipelineModel: React.FC<SourcePipelineModelProps> = ({
  onSourceSelection,
}) => {
  const id1 = "pipeline-source-select";
  const id2 = "pipeline-source-create";
  const [isCreateChecked, setIsCreateChecked] = useState(id1);
  const [selectedSource, setSelectedSource] = useState<string>("");

  const {
    data: sourceList = [],
    error: sourceError,
    isLoading: isSourceLoading,
  } = useQuery<Source[], Error>("sources", () =>
    fetchData<Source[]>(`${API_URL}/api/sources`)
  );

  useEffect(() => {
    if (sourceList.length === 0 && isSourceLoading === false) {
      setIsCreateChecked(id2);
    }
  }, [sourceList, isSourceLoading]);

  const selectSource = useCallback(
    (sourceId: string) => {
      setSelectedSource(sourceId);
    },
    [setSelectedSource]
  );

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setIsCreateChecked(event.currentTarget.id);
  };

  return (
    <>
      <Flex alignItems={{ default: "alignItemsStretch" }}>
        <FlexItem className="creation_flow-card_selection">
          <Card
            id="select-existing-source"
            isSelectable
            isSelected={isCreateChecked === id1}
          >
            <CardHeader
              selectableActions={{
                selectableActionId: id1,
                selectableActionAriaLabelledby: "select-existing-source",
                name: "pipeline-source",
                variant: "single",
                onChange,
              }}
            >
              <CardTitle>Select a Source</CardTitle>
            </CardHeader>
            <CardBody>
              Select a already configured source from the list below
            </CardBody>
          </Card>
        </FlexItem>

        <FlexItem className="creation_flow-card_selection">
          <Card
            id="create-new-source"
            isSelectable
            isSelected={isCreateChecked === id2}
          >
            <CardHeader
              selectableActions={{
                selectableActionId: id2,
                selectableActionAriaLabelledby: "create-new-source",
                name: "pipeline-source",
                variant: "single",
                onChange,
              }}
            >
              <CardTitle>Create a source</CardTitle>
            </CardHeader>
            <CardBody>Create a new source for your data pipeline.</CardBody>
          </Card>
        </FlexItem>
      </Flex>
      <Divider style={{ marginTop: "10px" }} />
      {isCreateChecked === id2 &&
        (selectedSource === "" ? (
          <TextContent style={{ padding: "10px" }}>
            <Text component="p">
              <b>
                {" "}
                Select the type of source you want to connect from the list
                below, once you select a connector you can configure it using
                form or smart editor option.
              </b>
            </Text>
          </TextContent>
        ) : (
          <TextContent style={{ padding: "10px" }}>
            <Text component="p">
              <b>
                Fill out the below form or use the smart editor to setup a new
                source connector. If you already have a configuration file, you
                can setup a new source connector by uploading it in the smart
                editor.
              </b>
            </Text>
          </TextContent>
        ))}

      {isCreateChecked === id1 ? (
        <SourceDestinationSelectionList
          tableType="source"
          data={sourceList}
          onSelection={onSourceSelection}
        />
      ) : selectedSource === "" ? (
        <SourceCatalogGrid selectSource={selectSource} />
      ) : (
        <CreateSourceForm
          sourceId={selectedSource}
          selectSource={selectSource}
          onSelection={onSourceSelection}
        />
      )}
    </>
  );
};

export default SourcePipelineModel;
