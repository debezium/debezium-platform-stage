import { Handle, Position } from "reactflow";
import "./DebeziumNode.css";

import dbz from "../../assets/debeziumNoText.png";
import { useData } from "../../appLayout/AppContext";
import { AppColors } from "@utils/constants";

interface DebeziumNodeProps {
  data: { label: string; sourcePosition: Position; targetPosition: Position };
}

const DebeziumNode: React.FC<DebeziumNodeProps> = ({ data }) => {
  const { darkMode } = useData();
  return (
    <>
      <div className="debeziumNodeWrapper debeziumNodeGradient">
        <div
          className="debeziumNodeInner"
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
          <img
            src={dbz}
            alt={`Debezium icon`}
            style={{ maxHeight: "60px", padding: "5px" }}
          />
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

export default DebeziumNode;
