import {
  Card,
  CardBody,
  Bullseye,
  CardFooter,
  Button,
} from "@patternfly/react-core";
import { useNavigate } from "react-router-dom";
import { Handle, Position } from "reactflow";
import "./AddTransformationNode.css";

import { OptimizeIcon, PlusIcon } from "@patternfly/react-icons";
import { useData } from "../../appLayout/AppContext";

interface AddTransformationNodeProps {
  data: { label: string; sourcePosition: Position; targetPosition: Position };
}

const AddTransformationNode: React.FC<AddTransformationNodeProps> = ({
  data,
}) => {
  const { darkMode } = useData();
  const navigate = useNavigate();

  const navigateTo = (navigateTo: string) => {
    navigate(`/pipeline/pipeline_designer/${navigateTo}`);
  };
  return (
    <>
      <div className="transformationWrapper transformationGradient">
        <div
          className="transformationInner"
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
          <Handle type="target" id="smt-input" position={data.targetPosition} />
          <Card
            ouiaId="BasicCard"
            isCompact
            style={{ background: "#FFFFFF" }}
            isPlain
          >
            <CardBody style={{ paddingBottom: 10 }}>
              <Bullseye>
                <div>
                  <OptimizeIcon style={{ fontSize: 15 }} />
                </div>
              </Bullseye>
            </CardBody>
            <CardFooter
              style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}
            >
              <Button
                variant="link"
                style={{ paddingRight: 5, paddingLeft: 5, fontSize: ".7em" }}
                size="sm"
                icon={<PlusIcon />}
                onClick={() => navigateTo("")}
                isDisabled
              >
                {data.label}
              </Button>
            </CardFooter>
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

export default AddTransformationNode;
