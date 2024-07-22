import * as React from "react";
import {
  Bullseye,
  Button,
  Card,
  EmptyState,
  EmptyStateActions,
  EmptyStateBody,
  EmptyStateFooter,
  EmptyStateVariant,
  Flex,
  FlexItem,
  Label,
  PageSection,
  SearchInput,
  Text,
  TextContent,
  TextVariants,
  ToggleGroup,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
} from "@patternfly/react-core";
import { PlusIcon, SearchIcon, TagIcon } from "@patternfly/react-icons";
import { useNavigate } from "react-router-dom";
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
import ConnectorImage from "../../components/ComponentImage";
import EmptyStatus from "../../components/EmptyStatus";
import { Destination, fetchData, Source } from "../../apis/apis";
import { API_URL } from "../../utils/constants";
import _, { debounce } from "lodash";
import { useQuery } from "react-query";
import { getConnectorTypeName } from "../../utils/helpers";

const Destinations: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const navigateTo = (url: string) => {
    navigate(url);
  };

  const [searchResult, setSearchResult] = React.useState<Destination[]>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const onClear = () => {
    onSearch?.("");
  };

  const {
    data: destinationsList = [],
    error,
    isLoading,
  } = useQuery<Destination[], Error>(
    "destinations",
    () => fetchData<Destination[]>(`${API_URL}/api/destinations`),
    {
      refetchInterval: 7000,
      onSuccess: (data) => {
        if (searchQuery.length > 0) {
          const filteredSource = _.filter(data, function (o) {
            return o.name.toLowerCase().includes(searchQuery.toLowerCase());
          });
          setSearchResult(filteredSource);
        } else {
          setSearchResult(data);
        }
      },
    }
  );

  const debouncedSearch = React.useCallback(
    debounce((searchQuery: string) => {
      const filteredSource = _.filter(destinationsList, function (o) {
        return o.name.toLowerCase().includes(searchQuery.toLowerCase());
      });
      setSearchResult(filteredSource);
    }, 700),
    [destinationsList]
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
          <Text component="h1">Destination</Text>
          {destinationsList.length > 0 ? (
            <Text component="p">
              Add a destination to capture the change data event. To start
              select a connector below once you select a connector you can
              configure it using form or smart editor option. You can also
              search the connector by its name or toggle the catalog between the
              list view or card view.
            </Text>
          ) : (
            <></>
          )}
        </TextContent>
      </PageSection>

      <PageSection>
        {destinationsList.length > 0 ? (
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
                      onClick={() => navigateTo("/destination/catalog")}
                    >
                      Add destination
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
                        (searchQuery.length > 0
                          ? searchResult
                          : destinationsList
                        ).length
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
                  <Th key={1}>Type</Th>
                  <Th key={2}>Active</Th>
                  <Th key={3}>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {(searchQuery.length > 0 ? searchResult : destinationsList)
                  .length > 0 ? (
                  (searchQuery.length > 0
                    ? searchResult
                    : destinationsList
                  ).map((instance: Source) => (
                    <Tr key={instance.id}>
                      <Td dataLabel="Name">{instance.name}</Td>
                      <Td dataLabel="Type" style={{ paddingLeft: "0px" }}>
                        <Flex alignItems={{ default: "alignItemsCenter" }}>
                          <FlexItem spacer={{ default: "spacerMd" }}>
                            <ConnectorImage
                              connectorType={instance.type}
                              size={35}
                            />
                          </FlexItem>
                          <FlexItem>
                            {getConnectorTypeName(instance.type)}
                          </FlexItem>
                        </Flex>
                      </Td>
                      <Td dataLabel="Active">
                        <Label icon={<TagIcon />} color="blue">
                          2
                        </Label>
                      </Td>
                      <Td dataLabel="Actions" isActionCell>
                        <ActionsColumn items={rowActions()} />
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
            heading="No Destination available"
            primaryMessage=' No Destination is configure for this cluster yet. To capture the streaming change
              events from a source database you can configure a Destination by click
              the "Add Destination" button.'
            secondaryMessage="This text has overridden a css component variable to demonstrate
              how to apply customizations using PatternFly's global
              variable API."
            primaryAction={
              <Button
                variant="primary"
                icon={<PlusIcon />}
                onClick={() => navigateTo("/destination/catalog")}
              >
                Add destination
              </Button>
            }
            secondaryActions={
              <>
                <Button variant="link" onClick={() => navigateTo("/source")}>
                  Go to source
                </Button>
                <Button
                  variant="link"
                  onClick={() => navigateTo("/transformation")}
                >
                  Add transformation
                </Button>
                <Button variant="link" onClick={() => navigateTo("/vaults")}>
                  Configure Vaults
                </Button>
              </>
            }
          />
        )}
      </PageSection>
    </>
  );
};

export { Destinations };
