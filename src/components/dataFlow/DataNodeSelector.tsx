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
            <Stack>
              <StackItem
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={darkMode  ? {
                    padding: 5,
                    borderRadius: 10,
                    backgroundColor: "#4f6c87",
                    color: "#f2f2f2",
                    width: 50,
                  }:{
                    padding: 5,
                    borderRadius: 10,
                    backgroundColor: "#E7F1FA",
                    width: 50,
                  }}
                >
                  {data.type === "source" ? (
                    <DataSourceIcon style={{ fontSize: 18 }} />
                  ) : (
                    <DataSinkIcon style={{ fontSize: 18 }} />
                  )}
                </div>
              </StackItem>
              <StackItem
                style={{
                  paddingTop: 5,
                  paddingInlineEnd: 5,
                  paddingInlineStart: 5,
                }}
              >
                {data.action}
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

export default DataNodeSelector;
