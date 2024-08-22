import {
  Card,
  CardBody,
  Bullseye,
  CardFooter,
  Button,
} from "@patternfly/react-core";
import { Handle, Position } from "reactflow";
import "./AddTransformationNode.css";

import { OptimizeIcon, PlusIcon } from "@patternfly/react-icons";
import { useData } from "../../appLayout/AppContext";
import { AppColors } from "@utils/constants";

interface AddTransformationNodeProps {
  data: { label: string; sourcePosition: Position; targetPosition: Position };
}

const AddTransformationNode: React.FC<AddTransformationNodeProps> = ({
  data,
}) => {
  const { darkMode } = useData();
  return (
    <>
      <div className="transformationWrapper transformationGradient">
        <div
          className="transformationInner"
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
          <Handle type="target" id="smt-input" position={data.targetPosition} />
          <Card
            ouiaId="BasicCard"
            isCompact
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
                onClick={() => {}}
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
