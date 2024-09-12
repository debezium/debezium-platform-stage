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
import AddTransformationNode from "./AddTransformationNode";
import { useData } from "../../appLayout/AppContext";
import DataNodeComposition from "./DataNodeComposition";

const nodeTypes = {
  addTransformation: AddTransformationNode,
  dataNodeComposition: DataNodeComposition,
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
        connectorType: "io.debezium.connector.mongodb.MongoDbConnector",
        label: "user-mongodb",
        type: "source",
        editAction: () => {},
        compositionFlow: true,
      },
      position: { x: 50, y: 160 },
      type: "dataNodeComposition",
      draggable: false,
    }),
    [sourceName, sourceType]
  );

  const transformationGroup = useMemo(() => {
    return {
      id: "transformation_group",
      data: { label: "Transformation" },
      position: { x: 250, y: 140 },
      style: {
        backgroundColor: darkMode
          ? "rgb(21, 21, 21, 0.2)"
          : "rgba(203,213,224, 0.2)",
        width: 180,
        height: 120,
        borderRadius: 10,
      },
      type: "group",
      draggable: false,
    };
  }, []);

  const defaultTransformationNode = useMemo(() => {
    return {
      id: "add_transformation",
      data: {
        label: "Transformation",
        sourcePosition: "right",
        targetPosition: "left",
      },
      position: { x: 35, y: 20 },
      targetPosition: "left",
      type: "addTransformation",
      parentId: "transformation_group",
      extent: "parent",
      draggable: false,
    };
  }, []);

  const dataDestinationNode = useMemo(
    () => ({
      id: "destination",
      data: {
        connectorType: "infinispan",
        label: "sink-infinispan",
        type: "destination",
        editAction: () => {},
        compositionFlow: true,
      },
      position: { x: 500, y: 160 },
      type: "dataNodeComposition",
      draggable: false,
    }),
    [destinationName, destinationType]
  );

  const initialNodes = useMemo(
    () => [
      dataSourceNode,
      transformationGroup,
      defaultTransformationNode,
      dataDestinationNode,
    ],
    [
      dataSourceNode,
      transformationGroup,
      defaultTransformationNode,
      dataDestinationNode,
    ]
  );

  const initialEdges: Edge[] = useMemo(
    () => [
      {
        id: "source-add_transformation",
        source: "source",
        target: "add_transformation",
        animated: true,
        sourceHandle: "a",
      },
      {
        id: "add_transformation-destination",
        source: "add_transformation",
        target: "destination",
        animated: true,
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
        proOptions={proOptions}
        fitView
        maxZoom={1.5}
        minZoom={1.5}
        panOnDrag={false}
      >
        {/* <Controls /> */}
        <Background
          style={{
            borderRadius: "5px",
          }}
          gap={15}
          color={darkMode ? "#292929" : ""}
        />
      </ReactFlow>
    </>
  );
};

export default CompositionFlow;
