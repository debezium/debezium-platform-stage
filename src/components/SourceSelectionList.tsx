import { Flex, FlexItem, Label } from "@patternfly/react-core";
import { TagIcon } from "@patternfly/react-icons";
import { Table, Thead, Tr, Th, Tbody, Td } from "@patternfly/react-table";
import React from "react";
import { Destination, Pipeline, Source, fetchData } from "../apis/apis";
import { getConnectorTypeName } from "../utils/helpers";
import ConnectorImage from "./ComponentImage";
import { API_URL } from "../utils/constants";
import { useQuery } from "react-query";
import { getActivePipelineCount } from "../utils/pipelineUtils";

interface ISourceSelectionListProps {
  tableType: "source" | "destination";
  onSelection: (selection: Source | Destination) => void;
}

const SourceSelectionList: React.FunctionComponent<
  ISourceSelectionListProps
> = ({ tableType, onSelection }) => {
  const {
    data: sourceList = [],
    error: _sourceError,
    isLoading: _isSourceLoading,
  } = useQuery<Source[], Error>(
    "sources",
    () => fetchData<Source[]>(`${API_URL}/api/sources`),
    {
      refetchInterval: 7000,
    }
  );

  const {
    data: pipelineList = [],
    error: _pipelineError,
    isLoading: _isPipelineLoading,
  } = useQuery<Pipeline[], Error>(
    "pipelines",
    () => fetchData<Pipeline[]>(`${API_URL}/api/pipelines`),
    {
      refetchInterval: 7000,
    }
  );

  return (
    <>
      <Table aria-label={`${tableType} table`}>
        <Thead>
          <Tr>
            <Th key={0}>Name</Th>
            <Th key={1}>Type</Th>
            <Th key={2}>Active</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sourceList.length > 0 &&
            sourceList.map((instance) => (
              <Tr
                key={instance.id}
                onRowClick={() => onSelection(instance)}
                isSelectable
                isClickable
              >
                <Td dataLabel="Name">{instance.name}</Td>
                <Td dataLabel="Type" style={{ paddingLeft: "0px" }}>
                  <Flex alignItems={{ default: "alignItemsCenter" }}>
                    <FlexItem>
                      <ConnectorImage connectorType={instance.type} size={35} />
                    </FlexItem>
                    <FlexItem>{getConnectorTypeName(instance.type)}</FlexItem>
                  </Flex>
                </Td>
                <Td dataLabel="Active">
                  <Label icon={<TagIcon />} color="blue">
                    {getActivePipelineCount(
                      pipelineList,
                      instance.id,
                      tableType
                    )}
                  </Label>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </>
  );
};

export default SourceSelectionList;
