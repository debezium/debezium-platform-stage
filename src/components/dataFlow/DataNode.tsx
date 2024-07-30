import {
  Card,
  CardBody,
  Bullseye,
  Stack,
  StackItem,
  TextContent,
} from "@patternfly/react-core";
import { Handle, Position } from "reactflow";
import ConnectorImage from "../ComponentImage";
import "./DataNode.css";
import { DataSinkIcon, DataSourceIcon, PencilAltIcon } from "@patternfly/react-icons";

interface DataNodeProps {
  data: {
    connectorType: string;
    label: string;
    type: string;
    editAction: () => void;
    compositionFlow?: boolean;
  };
}

const DataNode: React.FC<DataNodeProps> = ({ data }) => {
  return (
    <>
      <Card
        ouiaId="BasicCard"
        isCompact
        className="pf-v5-u-box-shadow-md"
        style={{ cursor: "auto" }}
      >
        <CardBody style={{ padding: 7 }} className="pf-v5-u-box-shadow-md">
          {data.type === "source" && (
            <Handle type="source" position={Position.Right} id="smt-input" />
          )}

          <Bullseye>
            {/* <PencilAltIcon
              style={{
                position: "absolute",
                top: "6px",
                right: "6px",
                cursor: "pointer",
                fontSize: "10px",
              }}
            /> */}
            <Stack>
              <StackItem
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    padding: 5,
                    borderRadius: 10,
                    backgroundColor: "#E7F1FA",
                    width: 50,
                  }}
                >
                  {/* <ConnectorImage
                    connectorType={data.connectorType}
                    size={25}
                  /> */}
                  {data.type === "source" ? ( <DataSourceIcon/>) : (<DataSinkIcon/>)}
                  <DataSourceIcon/>
                </div>
              </StackItem>
              <StackItem
                style={{
                  paddingTop: 5,
                  paddingInlineEnd: 5,
                  paddingInlineStart: 5,
                }}
              >
                <TextContent type="p" style={{ fontSize: "10px", fontWeight: "bold" }}>
                  {data.label}
                </TextContent>
              </StackItem>
            </Stack>
          </Bullseye>

          {data.type === "destination" && (
            <Handle type="target" position={Position.Left} id="smt-output" />
          )}
        </CardBody>
      </Card>
    </>
  );
};

export default DataNode;
