/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
  Grid,
  GridItem,
  PageSection,
  Skeleton,
  Text,
  TextContent,
} from "@patternfly/react-core";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Destination,
  fetchDataTypeTwo,
  Pipeline,
  Source,
} from "../../apis/apis";
import { API_URL } from "../../utils/constants";
import comingSoonImage from "../../assets/comingSoon.png";

import {
  Chart,
  ChartAxis,
  ChartBar,
  ChartDonutUtilization,
  ChartGroup,
  ChartThemeColor,
  ChartVoronoiContainer,
} from "@patternfly/react-charts";
import "./PipelineOverview.css";
import ConnectorImage from "../../components/ComponentImage";
import { getConnectorTypeName } from "../../utils/helpers";
import CompositionFlow from "../../components/dataFlow/CompositionFlow";

const PipelineOverview: React.FunctionComponent = () => {
  // const navigate = useNavigate();
  const { pipelineId } = useParams<{ pipelineId: string }>();

  // const [logs, setLogs] = useState<string[]>([]);
  const [pipeline, setPipeline] = useState<Pipeline>();
  const [source, setSource] = useState<Source>();
  const [destination, setDestination] = useState<Destination>();
  const [isFetchLoading, setIsFetchLoading] = useState<boolean>(true);
  const [isSourceFetchLoading, setIsSourceFetchLoading] =
    useState<boolean>(true);
  const [isDestinationFetchLoading, setIsDestinationFetchLoading] =
    useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPipeline = async () => {
      setIsFetchLoading(true);
      const response = await fetchDataTypeTwo<Pipeline>(
        `${API_URL}/api/pipelines/${pipelineId}`
      );

      if (response.error) {
        setError(response.error);
      } else {
        setPipeline(response.data as Pipeline);
      }

      setIsFetchLoading(false);
    };

    fetchPipeline();
  }, [pipelineId]);

  // useEffect(() => {
  //   const socket = new WebSocket(`${API_URL}/api/pipelines/${pipelineId}/logs/stream`);

  //   socket.onmessage = (event) => {
  //     setLogs((prevLogs) => [...prevLogs, event.data]);
  //   };

  //   socket.onerror = (error) => {
  //     console.error('WebSocket error:', error);
  //     setError('WebSocket connection error');
  //   };

  //   return () => {
  //     socket.close();
  //   };
  // }, [pipelineId]);

  useEffect(() => {
    const fetchSource = async () => {
      setIsSourceFetchLoading(true);
      const response = await fetchDataTypeTwo<Source>(
        `${API_URL}/api/sources/${pipeline!.source.id}`
      );

      if (response.error) {
        setError(response.error);
      } else {
        setSource(response.data as Source);
      }
      setIsSourceFetchLoading(false);
    };

    if (pipeline?.source?.id) {
      fetchSource();
    }
  }, [pipeline]);

  useEffect(() => {
    const fetchDestination = async () => {
      setIsDestinationFetchLoading(true);
      const response = await fetchDataTypeTwo<Destination>(
        `${API_URL}/api/destinations/${pipeline!.destination.id}`
      );

      if (response.error) {
        setError(response.error);
      } else {
        setDestination(response.data as Destination);
      }
      setIsDestinationFetchLoading(false);
    };

    if (pipeline?.source?.id) {
      fetchDestination();
    }
  }, [pipeline]);

  if (isFetchLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <PageSection isWidthLimited>
        <TextContent style={{ marginBlockEnd: "10px" }}>
          <Text component="h1"> {pipeline?.name}</Text>
          <Text component="p">
            Connector overview for {pipeline?.name} pipeline, this provide the
            list of essential metrics and details. Configured source and
            destination of the pipeline. Pipeline log and composition.
          </Text>
        </TextContent>
      </PageSection>
      <PageSection isWidthLimited>
        <Grid hasGutter>
          <GridItem span={12}>
            <Card ouiaId="BasicCard">
              {/* <CardTitle>Metric</CardTitle> */}
              <CardBody>
                <Grid hasGutter>
                  <GridItem span={4} style={{borderRight: "1px solid #D2D2D2"}}>
                    <Card
                      ouiaId="BasicCard"
                      isPlain
                      style={{ position: "relative" }}
                    >
                      <div className="overlay">
                        <img src={comingSoonImage} alt="Coming Soon" />
                      </div>
                      <CardTitle>Queue usage</CardTitle>
                      <CardBody>
                        <ChartDonutUtilization
                          ariaDesc="Queue utilization"
                          ariaTitle="Queue utilization"
                          constrainToVisibleArea
                          data={{ x: "GBps capacity", y: 45 }}
                          labels={({ datum }) =>
                            datum.x ? `${datum.x}: ${datum.y}%` : null
                          }
                          legendData={[
                            { name: `Storage capacity: 45%` },
                            { name: "Unused: 55%" },
                          ]}
                          legendOrientation="vertical"
                          name="queue-usage"
                          padding={{
                            bottom: 20,
                            left: 20,
                            right: 225, // Adjusted to accommodate legend
                            top: 20,
                          }}
                          title={`45%`}
                          thresholds={[{ value: 60 }, { value: 90 }]}
                          width={435}
                        />
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem span={8}>
                    <Card
                      ouiaId="BasicCard"
                      isPlain
                      style={{ position: "relative" }}
                    >
                      <div className="overlay">
                        <img src={comingSoonImage} alt="Coming Soon" />
                      </div>
                      <CardTitle>Events</CardTitle>
                      <CardBody>
                        <Chart
                          ariaDesc="Events chart"
                          ariaTitle="Events"
                          containerComponent={<ChartVoronoiContainer />}
                          domain={{ y: [0, 9000] }}
                          domainPadding={{ x: [30, 25] }}
                          height={220}
                          themeColor={ChartThemeColor.multiOrdered}
                          name="events-chart"
                          padding={{
                            bottom: 60,
                            left: 60,
                            right: 30,
                            top: 20,
                          }}
                          width={900}
                        >
                          <ChartAxis />
                          <ChartAxis dependentAxis showGrid />
                          <ChartGroup offset={11} horizontal>
                            <ChartBar
                              data={[
                                { name: "Delete", x: "Delete", y: 400 },

                                { name: "Update", x: "Update", y: 2000 },
                                { name: "Insert", x: "Insert", y: 7000 },
                              ]}
                            />
                          </ChartGroup>
                        </Chart>
                      </CardBody>
                    </Card>
                  </GridItem>
                </Grid>
              </CardBody>
            </Card>
          </GridItem>



          <GridItem span={9} rowSpan={2}>
            <Card ouiaId="BasicCard" isFullHeight>
              <CardTitle>Pipeline composition</CardTitle>
              <CardBody>
                {/* <div style={{ whiteSpace: "pre-wrap" }}>
                  {logs.map((log, index) => (
                    <div key={index}>{log}</div>
                  ))}
                </div> */}
                 <CompositionFlow sourceName={source?.name|| ''} sourceType={source?.type || ""} destinationName={destination?.name || ""} destinationType={destination?.type|| ""}/>
              </CardBody>
            </Card>
          </GridItem>

          <GridItem span={3} rowSpan={1}>
            <Card ouiaId="BasicCard">
              <CardTitle>Source</CardTitle>
              <CardBody>
                <DescriptionList>
                  <DescriptionListGroup>
                    <DescriptionListTerm>Name</DescriptionListTerm>
                    <DescriptionListDescription>
                      {isSourceFetchLoading ? (
                        <Skeleton screenreaderText="Loading contents" />
                      ) : (
                        source?.name
                      )}
                    </DescriptionListDescription>
                  </DescriptionListGroup>
                  <DescriptionListGroup>
                    <DescriptionListTerm>Type</DescriptionListTerm>
                    <DescriptionListDescription>
                      {isSourceFetchLoading ? (
                        <Skeleton screenreaderText="Loading contents" />
                      ) : (
                        <TextContent
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <ConnectorImage
                          connectorType={source?.type || ""}
                          size={25}
                        />
                        <Text component="p" style={{ paddingLeft: "10px" }}>
                          {getConnectorTypeName(source?.type || "")}
                        </Text>
                      </TextContent>
                      )}
                    </DescriptionListDescription>
                  </DescriptionListGroup>
                  <DescriptionListGroup>
                    <DescriptionListTerm>Description</DescriptionListTerm>
                    <DescriptionListDescription>
                      {isSourceFetchLoading ? (
                        <Skeleton screenreaderText="Loading contents" />
                      ) : (
                        source?.description
                      )}
                    </DescriptionListDescription>
                  </DescriptionListGroup>

                  <DescriptionListGroup>
                    <DescriptionListTerm>Schema</DescriptionListTerm>
                    <DescriptionListDescription>
                      {isSourceFetchLoading ? (
                        <Skeleton screenreaderText="Loading contents" />
                      ) : (
                        source?.schema
                      )}
                    </DescriptionListDescription>
                  </DescriptionListGroup>
                </DescriptionList>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem span={3} rowSpan={1}>
            <Card ouiaId="BasicCard">
              <CardTitle>Destination</CardTitle>
              <CardBody>
                <DescriptionList>
                  <DescriptionListGroup>
                    <DescriptionListTerm>Name</DescriptionListTerm>
                    <DescriptionListDescription>
                      {isDestinationFetchLoading ? (
                        <Skeleton screenreaderText="Loading contents" />
                      ) : (
                        destination?.name
                      )}
                    </DescriptionListDescription>
                  </DescriptionListGroup>
                  <DescriptionListGroup>
                    <DescriptionListTerm>Type</DescriptionListTerm>
                    <DescriptionListDescription>
                      {isDestinationFetchLoading ? (
                        <Skeleton screenreaderText="Loading contents" />
                      ) : (
                        <TextContent
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <ConnectorImage
                          connectorType={destination?.type || ""}
                          size={25}
                        />
                        <Text component="p" style={{ paddingLeft: "10px" }}>
                          {getConnectorTypeName(destination?.type || "")}
                        </Text>
                      </TextContent>
                      )}
                    </DescriptionListDescription>
                  </DescriptionListGroup>
                  <DescriptionListGroup>
                    <DescriptionListTerm>Description</DescriptionListTerm>
                    <DescriptionListDescription>
                      {isDestinationFetchLoading ? (
                        <Skeleton screenreaderText="Loading contents" />
                      ) : (
                        destination?.description
                      )}
                    </DescriptionListDescription>
                  </DescriptionListGroup>

                  <DescriptionListGroup>
                    <DescriptionListTerm>Schema</DescriptionListTerm>
                    <DescriptionListDescription>
                      {isDestinationFetchLoading ? (
                        <Skeleton screenreaderText="Loading contents" />
                      ) : (
                        destination?.schema
                      )}
                    </DescriptionListDescription>
                  </DescriptionListGroup>
                </DescriptionList>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </PageSection>
    </>
  );
};

export { PipelineOverview };
