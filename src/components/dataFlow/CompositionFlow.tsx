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
import DataNode from "./DataNode";

const nodeTypes = {
  addTransformation: AddTransformationNode,
  dataNode: DataNode,
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
      position: { x: 100, y: 160 },
      type: "dataNode",
      draggable: false,
    }),
    [sourceName, sourceType]
  );

  const transformationGroup = useMemo(() => {
    return {
      id: "transformation_group",
      data: { label: "Transformation" },
      position: { x: 330, y: 120 },
      style: {
        backgroundColor: "rgba(203,213,224, 0.2)",
        width: 200,
        height: 150,
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
      position: { x: 35, y: 30 },
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
      position: { x: 650, y: 160 },
      type: "dataNode",
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
          // color={"#F8FAF6"}
        />
      </ReactFlow>
    </>
  );
};

export default CompositionFlow;
