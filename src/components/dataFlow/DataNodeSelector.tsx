import {
  Card,
  CardBody,
  Bullseye,
  Stack,
  StackItem,
} from "@patternfly/react-core";
import { Handle, Position } from "reactflow";
import "./DataNode.css";
import { DataSinkIcon, DataSourceIcon } from "@patternfly/react-icons";
import { useData } from "../../appLayout/AppContext";

interface DataNodeSelectorProps {
  data: {
    label: string;
    type: string;
    action: React.ReactNode;
  };
}

const DataNodeSelector: React.FC<DataNodeSelectorProps> = ({ data }) => {
  const { darkMode } = useData();
  return (
    <>
      <div
        className={
          data.type === "source"
            ? `wrapperSource gradientSource`
            : `wrapperDestination gradientDestination`
        }
      >
        <div
          className="inner"
          style={
            darkMode
              ? {
                  background: "#292929",
                }
              : {
                  backgroundColor: "#FFFFFF",
                }
          }
        >
          {data.type === "source" && (
            <Handle type="source" position={Position.Right} id="smt-input" />
          )}
          <Card
            ouiaId="BasicCard"
            isCompact
            isPlain
            className="pf-v5-u-box-shadow-md"
            style={{ cursor: "auto" }}
          >
            <CardBody style={{ padding: 7 }} className="pf-v5-u-box-shadow-md">
              <Bullseye>
                <Stack>
                  <StackItem
                    style={{
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      {data.type === "source" ? (
                        <DataSourceIcon style={{ fontSize: 18 }} />
                      ) : (
                        <DataSinkIcon style={{ fontSize: 18 }} />
                      )}
                    </div>
                  </StackItem>
                  <StackItem>{data.action}</StackItem>
                </Stack>
              </Bullseye>
            </CardBody>
          </Card>
          {data.type === "destination" && (
            <Handle type="target" position={Position.Left} id="smt-output" />
          )}
        </div>
      </div>
    </>
  );
};

export default DataNodeSelector;
