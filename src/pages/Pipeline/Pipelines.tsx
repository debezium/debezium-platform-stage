import * as React from "react";
import {
  Bullseye,
  Button,
  Card,
  debounce,
  EmptyState,
  EmptyStateActions,
  EmptyStateBody,
  EmptyStateFooter,
  EmptyStateVariant,
  PageSection,
  ProgressStep,
  ProgressStepper,
  SearchInput,
  Switch,
  Text,
  TextContent,
  TextVariants,
  ToggleGroup,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
} from "@patternfly/react-core";
import { PlusIcon, SearchIcon } from "@patternfly/react-icons";
import EmptyStatus from "../../components/EmptyStatus";
import { useNavigate } from "react-router-dom";
import { Pipeline, fetchData } from "../../apis/apis";
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
import { useCallback, useState } from "react";
import SourceField from "../../components/SourceField";
import DestinationField from "../../components/DestinationField";

const Pipelines: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const navigateTo = (url: string) => {
    navigate(url);
  };

  const [searchResult, setSearchResult] = useState<Pipeline[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const onClear = () => {
    onSearch?.("");
  };

  const {
    data: pipelinesList = [],
    error,
    isLoading,
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

  const rowActions = (): IAction[] => [
    {
      title: "Pause",
    },
    {
      title: "Resume",
    },
    { title: "Overview" },
    { isSeparator: true },
    {
      title: "Edit",
    },

    {
      title: "Delete",
    },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <PageSection isWidthLimited>
        <TextContent>
          <Text component="h1">Pipeline</Text>
          {pipelinesList.length > 0 ? (
            <Text component="p">
              Add a pipeline to streams change events from a pipeline database.
              To start select a connector below once you select a connector you
              can configure it using form or smart editor option. You can also
              search the connector by its name or toggle the catalog between the
              list view or card view.
            </Text>
          ) : (
            <></>
          )}
        </TextContent>
      </PageSection>
      <PageSection>
        {pipelinesList.length > 0 ? (
          <Card style={{ paddingTop: "15px" }}>
            <Toolbar
              id="toolbar-sticky"
              style={{
                marginRight: "1px",
                marginLeft: "1px",
              }}
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
                      onClick={() => navigateTo("/pipeline/pipeline_designer")}
                    >
                      Add Pipeline
                    </Button>
                  </ToggleGroup>
                </ToolbarItem>
                <ToolbarGroup
                  variant="icon-button-group"
                  align={{ default: "alignEnd" }}
                >
                  <ToolbarItem>
                    <Text component={TextVariants.small}>
                      {
                        (searchQuery.length > 0 ? searchResult : pipelinesList)
                          .length
                      }{" "}
                      Items
                    </Text>
                  </ToolbarItem>
                </ToolbarGroup>
              </ToolbarContent>
            </Toolbar>
            <Table aria-label="Compact Table">
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
                {(searchQuery.length > 0 ? searchResult : pipelinesList)
                  .length > 0 ? (
                  (searchQuery.length > 0 ? searchResult : pipelinesList).map(
                    (instance: Pipeline) => (
                      <Tr key={instance.id}>
                        <Td dataLabel="Name">{instance.name}</Td>
                        <SourceField pipelineSource={instance.source} />
                        <DestinationField
                          pipelineDestination={instance.destination}
                        />
                        <Td dataLabel="Phase" style={{ paddingLeft: 0, paddingTop: 0 }}>
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
                        // style={{ marginLeft: "auto" }}
                        // className="custom-switch"
                        id="pipeline-enable-switch"
                        aria-label="switch pipeline enable"
                        isChecked={true}
                        onChange={() => {}}
                        // isReversed
                        // isDisabled
                      />
                        </Td>
                        <Td dataLabel="Actions" isActionCell>
                          <ActionsColumn items={rowActions()} />
                        </Td>
                      </Tr>
                    )
                  )
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
          </Card>
        ) : (
          <EmptyStatus
            heading="No pipeline available"
            primaryMessage=' No pipeline is configure for this cluster yet. To streams change
              events from a source database you can configure a source by click
              the "Add pipeline" button.'
            secondaryMessage="This text has overridden a css component variable to demonstrate
              how to apply customizations using PatternFly's global
              variable API."
            primaryAction={
              <Button
                variant="primary"
                icon={<PlusIcon />}
                onClick={() => navigateTo("/pipeline/pipeline_designer")}
              >
                Add pipeline
              </Button>
            }
            secondaryActions={
              <>
                <Button variant="link" onClick={() => navigateTo("/source")}>
                  Go to Source
                </Button>
                <Button
                  variant="link"
                  onClick={() => navigateTo("/destination")}
                >
                  Go to Destination
                </Button>
              </>
            }
          />
        )}
      </PageSection>
    </>
  );
};

export { Pipelines };
