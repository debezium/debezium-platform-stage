import {
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  Button,
} from "@patternfly/react-core";
import { DownloadIcon, ExpandIcon } from "@patternfly/react-icons";
import { LogViewer, LogViewerSearch } from "@patternfly/react-log-viewer";
// import { data } from "@utils/constants";
import { FC, useEffect, useState } from "react";
import "./PipelineLog.css";

interface PipelineLogProps {
  activeTabKey: number;
}

// eslint-disable-next-line no-empty-pattern
const PipelineLog: FC<PipelineLogProps> = ({ activeTabKey }) => {
  const [logs, setLogs] = useState("");
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080/api/pipelines/1/logs/stream");

    ws.onmessage = (event) => {
      setLogs((prevLogs) => prevLogs + "\n" + event.data); // Append new logs
    };
    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      ws.close(); // Clean up on component unmount
    };
  }, []);
  return (
    <div className="pipeline_log">
      <LogViewer
        key={activeTabKey}
        hasLineNumbers={true}
        data={logs}
        theme={"dark"}
        toolbar={
          <Toolbar>
            <ToolbarContent>
              <ToolbarGroup align={{ default: "alignStart" }}>
                <ToolbarGroup variant="filter-group">
                  <ToolbarItem>
                    <LogViewerSearch placeholder="Search" minSearchChars={0} />
                  </ToolbarItem>
                </ToolbarGroup>
              </ToolbarGroup>
              <ToolbarGroup align={{ default: "alignEnd" }}>
                <ToolbarGroup variant="action-group-plain">
                  <ToolbarItem>
                    <Button
                      variant="plain"
                      aria-label="edit"
                      icon={<DownloadIcon />}
                    />
                  </ToolbarItem>

                  <ToolbarItem>
                    <Button
                      variant="plain"
                      aria-label="sync"
                      icon={<ExpandIcon />}
                    />
                  </ToolbarItem>
                </ToolbarGroup>{" "}
              </ToolbarGroup>
            </ToolbarContent>
          </Toolbar>
        }
      />
    </div>
  );
};

export default PipelineLog;
