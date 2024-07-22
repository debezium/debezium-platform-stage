import {
  Flex,
  FlexItem,
  Label,
  Bullseye,
  EmptyState,
  EmptyStateVariant,
  EmptyStateBody,
  EmptyStateFooter,
  EmptyStateActions,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  FormGroup,
  TextInput,
} from "@patternfly/react-core";
import { TagIcon, SearchIcon } from "@patternfly/react-icons";
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  ActionsColumn,
  IAction,
} from "@patternfly/react-table";
import React, { useState } from "react";
import {
  DestinationApiResponse,
  SourceApiResponse,
  deleteResource,
} from "../apis/apis";
import { getConnectorTypeName } from "../utils/helpers";
import ConnectorImage from "./ComponentImage";
import { API_URL } from "../utils/constants";

interface ISourceSinkTableProps {
  tableType: "source" | "destination";
  data: SourceApiResponse | DestinationApiResponse;
  onClear: () => void;
}

type DeleteInstance = {
  id: number;
  name: string;
};

type ActionData = {
  id: number;
  name: string;
};

const SourceSinkTable: React.FunctionComponent<ISourceSinkTableProps> = ({
  tableType,
  data,
  onClear,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [deleteInstance, setDeleteInstance] = useState<DeleteInstance>({
    id: 0,
    name: "",
  });
  const [deleteInstanceName, setDeleteInstanceName] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async (id: number, type: string) => {
    setIsLoading(true);
    const resourceType = type === "source" ? "sources" : "destinations";
    const url = `${API_URL}/api/${resourceType}/${id}`;
    const result = await deleteResource(url);

    if (result.error) {
      console.error(result.error);
      setIsOpen(false);
      setIsLoading(false);
    } else {
      console.log("Resource deleted successfully", result.data);
      modalToggle(false);
      setIsLoading(false);
    }
  };

  const onDeleteHandler = (id: number, name: string) => {
    setIsOpen(true);
    setDeleteInstance({ id: id, name: name });
  };

  const modalToggle = (toggleValue: boolean) => {
    setDeleteInstanceName("");
    setIsOpen(toggleValue);
  };

  const rowActions = (actionData: ActionData): IAction[] => [
    {
      title: "Edit",
      isDisabled: true,
    },

    {
      title: "Delete",
      onClick: () => onDeleteHandler(actionData.id, actionData.name),
    },
  ];

  return (
    <>
      <Table aria-label={`${tableType} table`}>
        <Thead>
          <Tr>
            <Th key={0}>Name</Th>
            <Th key={1}>Type</Th>
            <Th key={2}>Active</Th>
            <Th key={3}>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.length > 0 ? (
            data.map((instance) => (
              <Tr key={instance.id}>
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
                    2
                  </Label>
                </Td>
                <Td dataLabel="Actions" isActionCell>
                  <ActionsColumn
                    items={rowActions({ id: instance.id, name: instance.name })}
                  />
                </Td>
              </Tr>
            ))
          ) : (
            <Tr>
              <Td colSpan={8}>
                <Bullseye>
                  <EmptyState
                    headingLevel="h2"
                    titleText={`No matching ${tableType} is present. `}
                    icon={SearchIcon}
                    variant={EmptyStateVariant.sm}
                  >
                    <EmptyStateBody>Clear search and try again.</EmptyStateBody>
                    <EmptyStateFooter>
                      <EmptyStateActions>
                        <Button variant="link" onClick={onClear}>
                          Clear search
                        </Button>
                      </EmptyStateActions>
                    </EmptyStateFooter>
                  </EmptyState>
                </Bullseye>
              </Td>
            </Tr>
          )}
        </Tbody>
      </Table>
      <Modal
        variant="small"
        title="Delete modal"
        isOpen={isOpen}
        onClose={() => modalToggle(false)}
        aria-labelledby={`delete ${tableType} model`}
        aria-describedby="modal-box-body-variant"
      >
        <ModalHeader
          title={`Enter "${deleteInstance.name}" to delete ${tableType}`}
          titleIconVariant="warning"
          labelId="delete-modal-title"
        />
        <ModalBody id="modal-box-body-variant">
          <Form>
            <FormGroup isRequired fieldId={`${tableType}-delete-name`}>
              <TextInput
                id="dalete-name"
                aria-label="delete name"
                onChange={(_e, value) => setDeleteInstanceName(value)}
                value={deleteInstanceName}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            key="confirm"
            variant="primary"
            onClick={() => handleDelete(deleteInstance.id, tableType)}
            isDisabled={deleteInstanceName !== deleteInstance.name}
            isLoading={isLoading}
          >
            Confirm
          </Button>
          <Button
            key="cancel"
            variant="link"
            onClick={() => modalToggle(false)}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default SourceSinkTable;
