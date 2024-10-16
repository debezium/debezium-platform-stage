import { Content, Tooltip } from "@patternfly/react-core";
import { Position } from "reactflow";
import "./TransformGroupNode.css";
import { AngleRightIcon, PencilAltIcon } from "@patternfly/react-icons";
import { AppColors } from "@utils/constants";
import { useData } from "@appContext/AppContext";

interface TransformGroupNodeProps {
  data: {
    label: string;
    sourcePosition: Position;
    targetPosition: Position;
    onToggleDrawer: () => void;
  };
}

const TransformGroupNode: React.FC<TransformGroupNodeProps> = ({ data }) => {
  const { darkMode } = useData();

  return (
    <>
      <div
        onClick={() => {
          console.log("expand/collapsed clicked");
        }}
        className={"collapsedDataNodeDestination"}
      >
        <Tooltip content={<div>Collapsed</div>}>
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
      <div onClick={data.onToggleDrawer} className={"editDataNodeDestination"}>
        <Tooltip content={<div>Edit transform</div>}>
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
            <PencilAltIcon />
          </div>
        </Tooltip>
      </div>

      <div className="transformationWrapper " style={{ height: 100 }}>
        {/* <Handle type="target" id="smt-input" position={data.targetPosition} /> */}

        <Content
          type="p"
          style={{
            fontSize: "10px",
            fontWeight: "bold",
            textAlign: "center",
            width: "100%",
            paddingTop: 5,
          }}
        >
          {data.label}
        </Content>

        {/* <Handle type="source" id="smt-output" position={data.sourcePosition} /> */}
      </div>
    </>
  );
};

export default TransformGroupNode;
