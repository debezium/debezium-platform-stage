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
import EmptyStatus from "../../components/EmptyStatus";
import { useNavigate } from "react-router-dom";
import { Source, fetchData } from "../../apis/apis";
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
import ConnectorImage from "../../components/ComponentImage";
import { API_URL } from "../../utils/constants";
import { getConnectorTypeName } from "../../utils/helpers";

export interface ISourceProps {
  sampleProp?: string;
}

const Sources: React.FunctionComponent<ISourceProps> = () => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/source/catalog");
  };

  const [searchResult, setSearchResult] = React.useState<Source[]>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const onClear = () => {
    onSearch?.("");
  };

  const {
    data: sourcesList = [],
    error,
    isLoading,
  } = useQuery<Source[], Error>(
    "sources",
    () => fetchData<Source[]>(`${API_URL}/api/sources`),
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
      const filteredSource = _.filter(sourcesList, function (o) {
        return o.name.toLowerCase().includes(searchQuery.toLowerCase());
      });
      setSearchResult(filteredSource);
    }, 700),
    [sourcesList]
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
        <TextContent >
          <Text component="h1">Source</Text>
          {sourcesList.length > 0 ? (
            <Text component="p">
              Add a source to streams change events from a source database. To
              start select a connector below once you select a connector you can
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
        {sourcesList.length > 0 ? (
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
                      onClick={navigateTo}
                    >
                      Add source
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
                        (searchQuery.length > 0 ? searchResult : sourcesList)
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
                  <Th key={1}>Type</Th>
                  <Th key={2}>Active</Th>
                  <Th key={3}>Actions</Th>
                </Tr>
              </Thead>

              <Tbody>
                {(searchQuery.length > 0 ? searchResult : sourcesList).length >
                0 ? (
                  (searchQuery.length > 0 ? searchResult : sourcesList).map(
                    (instance: Source) => (
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
                              {" "}
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
            heading="No source available"
            primaryMessage=' No source is configure for this cluster yet. To streams change
              events from a source database you can configure a source by click
              the "Add source" button.'
            secondaryMessage="This text has overridden a css component variable to demonstrate
              how to apply customizations using PatternFly's global
              variable API."
            primaryAction={
              <Button
                variant="primary"
                icon={<PlusIcon />}
                onClick={navigateTo}
              >
                Add source
              </Button>
            }
            secondaryActions={
              <>
                <Button variant="link">Go to destination</Button>
                <Button variant="link">Configure Vaults</Button>
              </>
            }
          />
        )}
      </PageSection>
    </>
  );
};

export { Sources };
