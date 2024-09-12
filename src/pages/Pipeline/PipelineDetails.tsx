/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import {
  Content,
  PageSection,
  Tab,
  TabContent,
  TabContentBody,
  Tabs,
  TabTitleText,
} from "@patternfly/react-core";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDataTypeTwo, Pipeline } from "../../apis/apis";
import { API_URL } from "../../utils/constants";

import "./PipelineDetails.css";
import PipelineLog from "./PipelineLog";
import PipelineOverview from "./PipelineOverview";

const PipelineDetails: React.FunctionComponent = () => {
  const { pipelineId } = useParams<{ pipelineId: string }>();

  const [activeTabKey, setActiveTabKey] = React.useState(0);

  const [pipeline, setPipeline] = useState<Pipeline>();

  const [isFetchLoading, setIsFetchLoading] = useState<boolean>(true);

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

  // Toggle currently active tab
  const handleTabClick = (_event: any, tabIndex: string | number) => {
    setActiveTabKey(tabIndex as number);
  };

  if (isFetchLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <PageSection isWidthLimited>
        <Content component="h1"> {pipeline?.name}</Content>
        <Content component="p">
          Connector overview for {pipeline?.name} pipeline, this provide the
          list of essential metrics and details. Configured source and
          destination of the pipeline. Pipeline log and composition.
        </Content>
      </PageSection>
      <PageSection type="tabs" isWidthLimited>
        <Tabs
          activeKey={activeTabKey}
          onSelect={handleTabClick}
          usePageInsets
          id="open-tabs-example-tabs-list"
        >
          <Tab
            eventKey={0}
            title={<TabTitleText>Overview</TabTitleText>}
            tabContentId={`tabContent${0}`}
          />
          <Tab
            eventKey={1}
            title={<TabTitleText>Logs</TabTitleText>}
            tabContentId={`tabContent${1}`}
          />
          <Tab
            eventKey={2}
            title={<TabTitleText>Edit</TabTitleText>}
            tabContentId={`tabContent${2}`}
          />
        </Tabs>
      </PageSection>
      <PageSection isWidthLimited>
        <TabContent
          key={0}
          eventKey={0}
          id={`tabContent${0}`}
          activeKey={activeTabKey}
          hidden={0 !== activeTabKey}
        >
          <TabContentBody>
            <PipelineOverview pipelineId={pipelineId || ""} />
          </TabContentBody>
        </TabContent>
        <TabContent
          key={1}
          eventKey={1}
          id={`tabContent${1}`}
          activeKey={activeTabKey}
          hidden={1 !== activeTabKey}
        >
          <TabContentBody>
            <PipelineLog activeTabKey={activeTabKey} />
          </TabContentBody>
        </TabContent>
        <TabContent
          key={2}
          eventKey={2}
          id={`tabContent${2}`}
          activeKey={activeTabKey}
          hidden={2 !== activeTabKey}
        >
          <TabContentBody>Edit pipeline</TabContentBody>
        </TabContent>
      </PageSection>
    </>
  );
};

export { PipelineDetails };
