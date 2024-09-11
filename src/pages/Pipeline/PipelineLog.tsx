import {
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  Button,
} from "@patternfly/react-core";
import { DownloadIcon, ExpandIcon } from "@patternfly/react-icons";
import { LogViewer, LogViewerSearch } from "@patternfly/react-log-viewer";
import { data } from "@utils/constants";
import React, { FC } from "react";

interface PipelineLogProps {
  // Define any props you need for the component here
}

// eslint-disable-next-line no-empty-pattern
const PipelineLog: FC<PipelineLogProps> = ({}) => {
  return (
    <React.Fragment>
      <LogViewer
        hasLineNumbers={true}
        // height={300}
        data={data.data1}
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
    </React.Fragment>
  );
};

export default PipelineLog;
