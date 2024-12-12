/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import {
  Bullseye,
  Button,
  Card,
  Content,
  ContentVariants,
  debounce,
  EmptyState,
  EmptyStateActions,
  EmptyStateBody,
  EmptyStateFooter,
  EmptyStateVariant,
  Form,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  PageSection,
  ProgressStep,
  ProgressStepper,
  SearchInput,
  Spinner,
  Switch,
  TextInput,
  ToggleGroup,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
} from "@patternfly/react-core";
import { PlusIcon, SearchIcon } from "@patternfly/react-icons";
import { useNavigate } from "react-router-dom";
import { Pipeline, fetchData, fetchFile } from "../../apis/apis";
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
import _ from "lodash";
import { useQuery } from "react-query";
import { API_URL } from "../../utils/constants";
import { ReactNode, useCallback, useState } from "react";
import SourceField from "../../components/SourceField";
import DestinationField from "../../components/DestinationField";
import ApiError from "../../components/ApiError";
import { useNotification } from "../../appLayout/AppNotificationContext";
import { PipelineEmpty } from "./PipelineEmpty";
import { useDeleteData } from "src/apis";
import PageHeader from "@components/PageHeader";
import "./Pipelines.css";

export type DeleteInstance = {
  id: number;
  name: string;
};

export type ActionData = {
  id: number;
  name: string;
};

const Pipelines: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const navigateTo = (url: string) => {
    navigate(url);
  };

  const { addNotification } = useNotification();

  const [isLogLoading, setIsLogLoading] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [deleteInstance, setDeleteInstance] = useState<DeleteInstance>({
    id: 0,
    name: "",
  });
  const [deleteInstanceName, setDeleteInstanceName] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const [searchResult, setSearchResult] = useState<Pipeline[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const onClear = () => {
    onSearch?.("");
  };

  const logAction = (): ReactNode => {
    return isLogLoading ? <>Downloading...</> : <>Download logs</>;
  };

  const {
    data: pipelinesList = [],
    error: pipelinesError,
    isLoading: pipelinesLoading,
  } = useQuery<Pipeline[], Error>(
    "pipelines",
    () => fetchData<Pipeline[]>(`${API_URL}/api/pipelines`),
    {
      refetchInterval: 7000,
      onSuccess: (data) => {
        if (searchQuery.length > 0) {
          const filteredPipeline = _.filter(data, function (o) {
            return o.name.toLowerCase().includes(searchQuery.toLowerCase());
          });
          setSearchResult(filteredPipeline);
        } else {
          setSearchResult(data);
        }
      },
    }
  );

  const downloadLogFile = async (pipelineId: string, pipelineName: string) => {
    setIsLogLoading(true);

    // Fetch the file as a Blob
    const response = await fetchFile(
      `${API_URL}/api/pipelines/${pipelineId}/logs`
    );

    if ("error" in response) {
      addNotification(
        "danger",
        `Download Failed log for ${pipelineName}`,
        `Failed to download logs: ${response.error}`
      );
    } else {
      // Create a URL for the Blob
      const url = window.URL.createObjectURL(response);

      // Create a link element and click it to trigger the download
      const a = document.createElement("a");
      a.href = url;
      a.download = "pipeline.log";
      document.body.appendChild(a);
      a.click();

      // Clean up
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }

    setIsLogLoading(false);
  };

  const { mutate: deleteData } = useDeleteData({
    onSuccess: () => {
      modalToggle(false);
      setIsLoading(false);
      addNotification(
        "success",
        `Delete successful`,
        `Pipeline deleted successfully`
      );
    },
    onError: (error) => {
      modalToggle(false);
      setIsLoading(false);
      addNotification(
        "danger",
        `Delete failed`,
        `Failed to delete pipeline: ${error}`
      );
    },
  });

  const handleDelete = async (id: number) => {
    setIsLoading(true);
    const url = `${API_URL}/api/pipelines/${id}`;
    deleteData(url);
  };

  const debouncedSearch = useCallback(
    debounce((searchQuery: string) => {
      const filteredPipeline = _.filter(pipelinesList, function (o) {
        return o.name.toLowerCase().includes(searchQuery.toLowerCase());
      });

      setSearchResult(filteredPipeline);
    }, 500),
    [pipelinesList]
  );

  const onSearch = React.useCallback(
    (value: string) => {
      setSearchQuery(value);
      debouncedSearch(value);
    },
    [debouncedSearch]
  );

  const modalToggle = (toggleValue: boolean) => {
    setDeleteInstanceName("");
    setIsOpen(toggleValue);
  };

  const onOverviewHandler = (id: number, _name: string) => {
    navigateTo(`/pipeline/${id}/overview`);
  };

  const onLogViewHandler = (id: number, _name: string) => {
    navigateTo(`/pipeline/${id}/logs`);
  };

  const onDeleteHandler = (id: number, name: string) => {
    setIsOpen(true);
    setDeleteInstance({ id: id, name: name });
  };

  const onEditHandler = (id: number, _name: string) => {
    navigateTo(`/pipeline/${id}/edit`);
  };

  const onLogDownloadHandler = (id: number, name: string) => {
    downloadLogFile("" + id, name);
  };

  const rowActions = (actionData: ActionData): IAction[] => [
    {
      title: "Pause",
      isDisabled: true,
    },
    {
      title: "Resume",
      isDisabled: true,
    },
    { isSeparator: true },
    {
      title: "Overview",
      onClick: () => onOverviewHandler(actionData.id, actionData.name),
    },
    {
      title: "View logs",
      onClick: () => onLogViewHandler(actionData.id, actionData.name),
    },
    {
      title: "Edit pipeline",
      onClick: () => onEditHandler(actionData.id, actionData.name),
    },
    { isSeparator: true },
    {
      title: logAction(),
      onClick: () => onLogDownloadHandler(actionData.id, actionData.name),
    },
    {
      title: "Delete",
      onClick: () => onDeleteHandler(actionData.id, actionData.name),
    },
  ];

  return (
    <>
      {pipelinesError ? (
        <PageSection isWidthLimited>
          <ApiError
            errorType="large"
            errorMsg={pipelinesError.message}
            secondaryActions={
              <>
                <Button variant="link" onClick={() => navigateTo("/source")}>
                  Go to source
                </Button>
                <Button
                  variant="link"
                  onClick={() => navigateTo("/destination")}
                >
                  Go to destination
                </Button>
              </>
            }
          />
        </PageSection>
      ) : (
        <>
          {pipelinesLoading ? (
            <EmptyState
              titleText="Loading..."
              headingLevel="h4"
              icon={Spinner}
            />
          ) : (
            <>
              {pipelinesList.length > 0 ? (
                <>
                  <PageHeader
                    title="Pipeline"
                    description="Add a pipeline to streams change events from a pipeline
                      database. To start select a connector below once you
                      select a connector you can configure it using form or
                      smart editor option. You can also search the connector by
                      its name or toggle the catalog between the list view or
                      card view."
                  />
                  <PageSection>
                    <Card className="pipeline-card">
                      <Toolbar
                        id="toolbar-sticky"
                        className="custom-toolbar"
                        isSticky
                      >
                        <ToolbarContent>
                          <ToolbarItem>
                            <SearchInput
                              aria-label="Items example search input"
                              placeholder="Find by name"
                              value={searchQuery}
                              onChange={(_event, value) => onSearch(value)}
                              onClear={onClear}
                            />
                          </ToolbarItem>
                          <ToolbarItem>
                            <ToggleGroup aria-label="Icon variant toggle group">
                              <Button
                                variant="primary"
                                icon={<PlusIcon />}
                                onClick={() =>
                                  navigateTo("/pipeline/pipeline_designer")
                                }
                              >
                                Add Pipeline
                              </Button>
                            </ToggleGroup>
                          </ToolbarItem>
                          <ToolbarGroup align={{ default: "alignEnd" }}>
                            <ToolbarItem>
                              <Content component={ContentVariants.small}>
                                {
                                  (searchQuery.length > 0
                                    ? searchResult
                                    : pipelinesList
                                  ).length
                                }{" "}
                                Items
                              </Content>
                            </ToolbarItem>
                          </ToolbarGroup>
                        </ToolbarContent>
                      </Toolbar>
                      <Table aria-label="Pipeline Table">
                        <Thead>
                          <Tr>
                            <Th key={0}>Name</Th>
                            <Th key={1}>Source</Th>
                            <Th key={2}>Destination</Th>
                            <Th key={3}>Phase</Th>
                            <Th key={4}>Enabled</Th>
                            <Th key={5}>Actions</Th>
                          </Tr>
                        </Thead>

                        <Tbody>
                          {(searchQuery.length > 0
                            ? searchResult
                            : pipelinesList
                          ).length > 0 ? (
                            (searchQuery.length > 0
                              ? searchResult
                              : pipelinesList
                            ).map((instance: Pipeline) => (
                              <Tr key={instance.id}>
                                <Td dataLabel="Name">{instance.name}</Td>
                                <SourceField pipelineSource={instance.source} />
                                <DestinationField
                                  pipelineDestination={instance.destination}
                                />
                                <Td
                                  dataLabel="Phase"
                                  className="pipeline-phase"
                                >
                                  <ProgressStepper
                                    aria-label="Basic progress stepper"
                                    className="pf-m-center pf-m-compact"
                                  >
                                    <ProgressStep
                                      variant="success"
                                      id="basic-step1"
                                      titleId="basic-step1-title"
                                      aria-label="completed step, step with success"
                                    />

                                    <ProgressStep
                                      variant="info"
                                      isCurrent
                                      id="basic-step2"
                                      titleId="basic-step2-title"
                                      aria-label="step with info"
                                    />

                                    <ProgressStep
                                      variant="pending"
                                      id="basic-step3"
                                      titleId="basic-step3-title"
                                      aria-label="pending step"
                                    />
                                  </ProgressStepper>
                                </Td>
                                <Td dataLabel="Enabled">
                                  <Switch
                                    // className="custom-switch"
                                    id="pipeline-enable-switch"
                                    aria-label="switch pipeline enable"
                                    isChecked={true}
                                    onChange={() => {}}
                                    // isReversed
                                    isDisabled
                                  />
                                </Td>
                                <Td dataLabel="Actions" isActionCell>
                                  <ActionsColumn
                                    items={rowActions({
                                      id: instance.id,
                                      name: instance.name,
                                    })}
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
                                    titleText="No results found"
                                    icon={SearchIcon}
                                    variant={EmptyStateVariant.sm}
                                  >
                                    <EmptyStateBody>
                                      Clear search and try again.
                                    </EmptyStateBody>
                                    <EmptyStateFooter>
                                      <EmptyStateActions>
                                        <Button
                                          variant="link"
                                          onClick={onClear}
                                        >
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
                    </Card>
                  </PageSection>
                </>
              ) : (
                <div>
                  <PipelineEmpty />
                </div>
              )}
            </>
          )}

          <Modal
            variant="medium"
            title="Delete pipeline"
            isOpen={isOpen}
            onClose={() => modalToggle(false)}
            aria-labelledby={`delete pipeline model`}
            aria-describedby="modal-box-body-variant"
          >
            <ModalHeader
              title={
                <p>
                  {" "}
                  Enter <i>"{`${deleteInstance.name}`}"</i> to delete pipeline
                </p>
              }
              titleIconVariant="warning"
              labelId="delete-modal-title"
            />
            <ModalBody id="modal-box-body-variant">
              <Form>
                <FormGroup isRequired fieldId={`pipeline-delete-name`}>
                  <TextInput
                    id="delete-name"
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
                onClick={() => handleDelete(deleteInstance.id)}
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
      )}
    </>
  );
};

export { Pipelines };
