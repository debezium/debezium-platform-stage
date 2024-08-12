import SourceSelectionList from "../../components/SourceSelectionList";
import {
  Split,
  SplitItem,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Divider,
} from "@patternfly/react-core";
import React, { useCallback, useState } from "react";
import { Source } from "../../apis/apis";
import { SourceCatalogGrid } from "../../pages/Source/SourceCatalogGrid";
import { CreateSourceForm } from "../../pages/Source/CreateSourceForm";

type SourcePipelineModelProps = {
  onSourceSelection: (source: Source) => void;
};

const SourcePipelineModel: React.FC<SourcePipelineModelProps> = ({
  onSourceSelection,
}) => {
  const id1 = "pipeline-source-select";
  const id2 = "pipeline-source-create";
  const [isChecked, setIsChecked] = useState(id1);
  const [selectedSource, setSelectedSource] = useState<string>("");

  const selectSource = useCallback(
    (sourceId: string) => {
      setSelectedSource(sourceId);
    },
    [setSelectedSource]
  );

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setIsChecked(event.currentTarget.id);
  };

  return (
    <>
      <Split hasGutter>
        <SplitItem className="creation_flow-card_selection">
          <Card
            id="select-existing-source"
            isSelectable
            isSelected={isChecked === id1}
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
        </SplitItem>

        <SplitItem className="creation_flow-card_selection">
          <Card
            id="create-new-source"
            isSelectable
            isSelected={isChecked === id2}
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
        </SplitItem>
      </Split>
      <Divider style={{ marginTop: "10px" }} />
      {isChecked === id1 ? (
        <SourceSelectionList
          tableType="source"
          onSelection={onSourceSelection}
        />
      ) : selectedSource === "" ? (
        <SourceCatalogGrid selectSource={selectSource} />
      ) : (
        <CreateSourceForm sourceId={selectedSource} selectSource={selectSource} />
      )}
    </>
  );
};

export default SourcePipelineModel;
