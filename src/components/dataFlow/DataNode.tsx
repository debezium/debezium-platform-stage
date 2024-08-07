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
import { PencilAltIcon } from "@patternfly/react-icons";
import { useData } from "../../appLayout/AppContext";

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
  const { darkMode } = useData();

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
            <PencilAltIcon
              onClick={data.editAction}
              style={{
                position: "absolute",
                top: "6px",
                right: "6px",
                cursor: "pointer",
                fontSize: "10px",
              }}
            />
            <Stack>
              <StackItem
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Bullseye
                  style={
                    darkMode
                      ? { background: "#4f6c87", padding: 5, borderRadius: 10 }
                      : {
                          padding: 5,
                          borderRadius: 10,
                          backgroundColor: "#E7F1FA",
                        }
                  }
                >
                  <ConnectorImage
                    connectorType={data.connectorType}
                    size={30}
                  />
                </Bullseye>
              </StackItem>
              <StackItem
                style={{
                  paddingTop: 5,
                  paddingInlineEnd: 5,
                  paddingInlineStart: 5,
                }}
              >
                <TextContent
                  type="p"
                  style={{ fontSize: "10px", fontWeight: "bold" }}
                >
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
