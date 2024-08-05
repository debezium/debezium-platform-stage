import {
  Card,
  CardBody,
  Bullseye,
  CardFooter,
  Button,
} from "@patternfly/react-core";
import { useNavigate } from "react-router-dom";
import { Handle, Position } from "reactflow";
import "./AddTransformationNode.css"

import { OptimizeIcon, PlusIcon } from "@patternfly/react-icons";

interface AddTransformationNodeProps {
  data: { label: string; sourcePosition: Position; targetPosition: Position };
}

const AddTransformationNode: React.FC<AddTransformationNodeProps> = ({
  data,
}) => {
  const navigate = useNavigate();

  const navigateTo = (navigateTo: string) => {
    navigate(`/pipeline/pipeline_designer/${navigateTo}`);
  };
  return (
    <>
      <Card ouiaId="BasicCard" isCompact>
        <CardBody style={{ paddingBottom: 10 }}>
          <Handle type="target" id="smt-input" position={data.targetPosition} />
          <Bullseye>
            <div>
              <OptimizeIcon className="add_transformation_node-custom_icon" />
            </div>
          </Bullseye>
          <Handle
            type="source"
            id="smt-output"
            position={data.sourcePosition}
          />
        </CardBody>
        <CardFooter
          style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}
        >
          <Button
            variant="link"
            style={{ paddingRight: 5, paddingLeft: 5, fontSize: 12 }}
            size="sm"
            icon={<PlusIcon />}
            onClick={() => navigateTo("")}
            isDisabled
          >
            {data.label}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default AddTransformationNode;
