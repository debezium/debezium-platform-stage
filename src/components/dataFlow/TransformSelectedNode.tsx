import { Handle, Position } from "reactflow";
import "./DebeziumNode.css";

import { useData } from "../../appLayout/AppContext";
import { AppColors } from "@utils/constants";
import {
  Bullseye,
  Card,
  CardBody,
  Content,
  ContentVariants,
  Stack,
  StackItem,
  Tooltip,
} from "@patternfly/react-core";
import ConnectorImage from "@components/ComponentImage";
import { AngleRightIcon } from "@patternfly/react-icons";
import { Transform } from "src/apis";

interface TransformSelectedNodeProps {
  data: {
    label: string;
    sourcePosition: Position;
    targetPosition: Position;
    handleExpand: () => void;
    selectedTransform: React.MutableRefObject<Transform[]>;
  };
}

const TransformSelectedNode: React.FC<TransformSelectedNodeProps> = ({
  data,
}) => {
  const { darkMode } = useData();
  return (
    <>
      <div
        onClick={() => {
          console.log("log count");
        }}
        className={" gradientSource editDataNodeSource"}
      >
        <Tooltip
          content={
            <div>
              {" "}
              {data.selectedTransform.current
                ? data.selectedTransform.current
                    .map((transform) => transform.name)
                    .join(" > ")
                : "None"}
            </div>
          }
        >
          <div
            style={
              darkMode
                ? {
                    background: AppColors.dark,
                  }
                : {
                    backgroundColor: AppColors.white,
                  }
            }
          >
            <Content component={ContentVariants.small}>
              {data.selectedTransform.current.length}
            </Content>
          </div>
        </Tooltip>
      </div>
      <div
        onClick={data.handleExpand}
        style={{ cursor: "pointer" }}
        className={"collapsedDataNodeDestination"}
      >
        <Tooltip content={<div>Expand</div>}>
          <div
            style={
              darkMode
                ? {
                    background: AppColors.dark,
                  }
                : {
                    backgroundColor: AppColors.white,
                  }
            }
          >
            <AngleRightIcon />
          </div>
        </Tooltip>
      </div>
      <div className="debeziumNodeWrapper debeziumNodeGradient">
        <div
          className="debeziumNodeInner"
          style={
            darkMode
              ? {
                  background: AppColors.dark,
                  cursor: "pointer",
                }
              : {
                  backgroundColor: AppColors.white,
                  cursor: "pointer",
                }
          }
        >
          <Handle type="target" id="smt-input" position={data.targetPosition} />
          <Card
            ouiaId="BasicCard"
            isPlain
            isCompact
            className="pf-v5-u-box-shadow-md"
            style={{ cursor: "auto", minWidth: 110 }}
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
                    <Bullseye
                      style={
                        darkMode
                          ? {
                              background: AppColors.darkBlue,
                              padding: 10,
                              borderRadius: 10,
                            }
                          : {}
                      }
                    >
                      <ConnectorImage connectorType={"debezium"} size={30} />
                    </Bullseye>
                  </StackItem>
                  <StackItem
                    style={{
                      paddingTop: 5,
                      paddingInlineEnd: 5,
                      paddingInlineStart: 5,
                    }}
                  >
                    <Content
                      type="p"
                      style={{ fontSize: "10px", fontWeight: "bold" }}
                    >
                      Transforms
                    </Content>
                  </StackItem>
                </Stack>
              </Bullseye>
            </CardBody>
          </Card>
          <Handle
            type="source"
            id="smt-output"
            position={data.sourcePosition}
          />
        </div>
      </div>
    </>
  );
};

export default TransformSelectedNode;
