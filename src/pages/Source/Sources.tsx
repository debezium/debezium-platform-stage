import * as React from "react";
import {
  Button,
  Card,
  Content,
  ContentVariants,
  debounce,
  EmptyState,
  PageSection,
  SearchInput,
  Spinner,
  ToggleGroup,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
} from "@patternfly/react-core";
import { PlusIcon } from "@patternfly/react-icons";
import EmptyStatus from "../../components/EmptyStatus";
import { useNavigate } from "react-router-dom";
import { Source, fetchData } from "../../apis/apis";
import _ from "lodash";
import { useQuery } from "react-query";
import { API_URL } from "../../utils/constants";
import SourceSinkTable from "../../components/SourceSinkTable";
import ApiError from "../../components/ApiError";
import "./Sources.css";

export interface ISourceProps {
  sampleProp?: string;
}

const Sources: React.FunctionComponent<ISourceProps> = () => {
  const navigate = useNavigate();

  const navigateTo = (url: string) => {
    navigate(url);
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
  return (
    <>
      {error ? (
        <ApiError errorType="large" errorMsg={error.message} secondaryActions={ <>
          <Button variant="link"  onClick={()=>navigateTo("/destination")}>Go to destination</Button>
          <Button variant="link"  onClick={()=>navigateTo("/pipeline")}>Go to pipeline</Button>
        </>} />
      ) : (
        <>
          <PageSection isWidthLimited>
              <Content component="h1">Source</Content>
              {isLoading || sourcesList.length > 0 ? (
                <Content component="p">
                  Lists the available sources configured in the cluster
                  streaming change events from a source database. You can search
                  a source by its name or sort the list by the count of active
                  pipelines using a source.
                </Content>
              ) : (
                <></>
              )}
          </PageSection>
          <PageSection>
            {isLoading || sourcesList.length > 0 ? (
              <Card className="source-card">
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
                          onClick={()=>navigateTo("/source/catalog")}
                        >
                          Add source
                        </Button>
                      </ToggleGroup>
                    </ToolbarItem>
                    <ToolbarGroup
                      align={{ default: "alignEnd" }}
                    >
                      <ToolbarItem>
                        <Content component={ContentVariants.small}>
                          {
                            (searchQuery.length > 0
                              ? searchResult
                              : sourcesList
                            ).length
                          }{" "}
                          Items
                        </Content>
                      </ToolbarItem>
                    </ToolbarGroup>
                  </ToolbarContent>
                </Toolbar>
                {isLoading ? (
                  <EmptyState
                    titleText="Loading"
                    headingLevel="h4"
                    icon={Spinner}
                  />
                ) : (
                  <SourceSinkTable
                    data={searchQuery.length > 0 ? searchResult : sourcesList}
                    tableType="source"
                    onClear={onClear}
                  />
                )}
              </Card>
            ) : (
              <EmptyStatus
                heading="No source available"
                primaryMessage=' No source is configure for this cluster yet. To streams change
            events from a source database you can configure a source by click
            the "Add source" button.'
            //     secondaryMessage="This text has overridden a css component variable to demonstrate
            // how to apply customizations using PatternFly's global
            // variable API."
            secondaryMessage=""
                primaryAction={
                  <Button
                    variant="primary"
                    icon={<PlusIcon />}
                    onClick={()=>navigateTo("/source/catalog")}
                  >
                    Add source
                  </Button>
                }
                secondaryActions={
                  <>
                    <Button variant="link" onClick={()=>navigateTo('/destination')}>Go to destination</Button>
                    <Button variant="link" onClick={()=>navigateTo('/vaults')}>Configure Vaults</Button>
                  </>
                }
              />
            )}
          </PageSection>
        </>
      )}
    </>
  );
};

export { Sources };
