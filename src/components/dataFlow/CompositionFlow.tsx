/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useMemo, useState } from "react";
import ReactFlow, {
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  NodeChange,
  Node,
  EdgeChange,
  Edge,
  Connection,
  Background,
  // Controls,
} from "reactflow";
// import AddTransformationNode from "./AddTransformationNode";
import { useData } from "../../appLayout/AppContext";
import DataNodeComposition from "./DataNodeComposition";
import DebeziumNode from "./DebeziumNode";
import CustomEdgeSource from "./CustomEdgeSource";
import CustomEdgeDestination from "./CustomEdgeDestination";
import { AppColors } from "@utils/constants";

const nodeTypes = {
  addTransformation: DebeziumNode,
  dataNodeComposition: DataNodeComposition,
};

const edgeTypes = {
  customEdgeSource: CustomEdgeSource,
  customEdgeDestination: CustomEdgeDestination,
};

const proOptions = { hideAttribution: true };

interface CreationFlowProps {
  sourceName: string;
  sourceType: string;
  destinationName: string;
  destinationType: string;
}

const CompositionFlow: React.FC<CreationFlowProps> = ({
  sourceName,
  sourceType,
  destinationName,
  destinationType,
}) => {
  const { darkMode } = useData();

  const dataSourceNode = useMemo(
    () => ({
      id: "source",
      data: {
        connectorType: "io.debezium.connector.postgresql.PostgresConnector",
        label: "postgres-source",
        type: "source",
        editAction: () => {},
        compositionFlow: true,
      },
      position: { x: 40, y: 40 },
      type: "dataNodeComposition",
      draggable: false,
    }),
    [sourceName, sourceType]
  );

  const defaultTransformationNode = useMemo(() => {
    return {
      id: "add_transformation",
      data: {
        label: "Transformation",
        sourcePosition: "right",
        targetPosition: "left",
      },
      position: { x: 225, y: 30 },
      targetPosition: "left",
      type: "addTransformation",
      draggable: false,
    };
  }, []);

  const dataDestinationNode = useMemo(
    () => ({
      id: "destination",
      data: {
        connectorType: "kafka",
        label: "test-destination",
        type: "destination",
        editAction: () => {},
        compositionFlow: true,
      },
      position: { x: 350, y: 40 },
      type: "dataNodeComposition",
      draggable: false,
    }),
    [destinationName, destinationType]
  );

  const initialNodes = useMemo(
    () => [dataSourceNode, defaultTransformationNode, dataDestinationNode],
    [dataSourceNode, defaultTransformationNode, dataDestinationNode]
  );

  const initialEdges: Edge[] = useMemo(
    () => [
      {
        id: "source-add_transformation",
        source: "source",
        target: "add_transformation",
        type: "customEdgeSource",
        sourceHandle: "a",
      },
      {
        id: "add_transformation-destination",
        source: "add_transformation",
        target: "destination",
        type: "customEdgeDestination",
      },
    ],
    []
  );

  const [nodes, setNodes] = useState<any>(initialNodes);
  const [edges, setEdges] = useState<any>(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds: Node[]) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds: Edge[]) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds: Edge[]) => addEdge(connection, eds));
    },
    [setEdges]
  );

  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        proOptions={proOptions}
        fitView
        maxZoom={1.4}
        minZoom={1.4}
        panOnDrag={false}
      >
        <Background
          style={{
            borderRadius: "5px",
          }}
          gap={15}
          color={darkMode ? AppColors.dark : AppColors.white}
        />
        <svg>
          <defs>
            <linearGradient id="edge-gradient-source">
              <stop offset="0%" stopColor="#a5c82d" />
              <stop offset="100%" stopColor="#7fc5a5" />
            </linearGradient>
            <linearGradient id="edge-gradient-destination">
              <stop offset="0%" stopColor="#7fc5a5" />
              <stop offset="100%" stopColor="#58b2da" />
            </linearGradient>
          </defs>
        </svg>
      </ReactFlow>
    </>
  );
};

export default CompositionFlow;
