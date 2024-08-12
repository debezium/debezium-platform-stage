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
} from "reactflow";
import AddTransformationNode from "./AddTransformationNode";

import DataNode from "./DataNode";

import { MdLogin, MdLogout } from "react-icons/md";
import DataNodeSelector from "./DataNodeSelector";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalVariant,
} from "@patternfly/react-core";
import { Destination, Source } from "../../apis/apis";
import { PlusIcon } from "@patternfly/react-icons";
import DestinationSelectionList from "../DestinationSelectionList";
import "./CreationFlow.css";
import SourcePipelineModel from "./SourcePipelineModel";

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = {
  dataNodeSelector: DataNodeSelector,
  addTransformation: AddTransformationNode,
  dataNode: DataNode,
};

const proOptions = { hideAttribution: true };

interface CreationFlowProps {
  updateIfSourceConfigured: (isConfigured: boolean) => void;
  updateIfDestinationConfigured: (isConfigured: boolean) => void;
  isSourceConfigured: boolean;
  isDestinationConfigured: boolean;
  updateSelectedSource: (source: Source) => void;
  updateSelectedDestination: (destination: Destination) => void;
}

const CreationFlow: React.FC<CreationFlowProps> = ({
  updateIfSourceConfigured,
  updateIfDestinationConfigured,
  isSourceConfigured,
  isDestinationConfigured,
  updateSelectedSource,
  updateSelectedDestination,
}) => {
  const [updatedSourceNodes, setUpdatedSourceNodes] = useState<any>();
  const [updatedDestinationNodes, setUpdatedDestinationNodes] = useState<any>();

  const [isSourceModalOpen, setIsSourceModalOpen] = useState(false);
  const [isDestinationModalOpen, setIsDestinationModalOpen] = useState(false);

  const handleSourceModalToggle = useCallback(() => {
    setIsSourceModalOpen(!isSourceModalOpen);
  }, [isSourceModalOpen]);

  const handleDestinationModalToggle = useCallback(() => {
    setIsDestinationModalOpen(!isDestinationModalOpen);
  }, [isDestinationModalOpen]);

  const defaultSourceNode = useMemo(() => {
    return {
      id: "source",
      data: {
        icon: MdLogout,
        label: "Source",
        type: "source",
        action: (
          <Button
            variant="link"
            onClick={handleSourceModalToggle}
            style={{ paddingRight: 5, paddingLeft: 5, fontSize: 12 }}
            icon={<PlusIcon />}
            size="sm"
          >
            Source
          </Button>
        ),
      },
      position: { x: 100, y: 150 },
      type: "dataNodeSelector",
      // draggable: false,
    };
  }, [handleSourceModalToggle]);

  const transformationGroup = useMemo(() => {
    return {
      id: "transformation_group",
      data: { label: "Transformation" },
      position: { x: 330, y: 120 },
      style: {
        backgroundColor: "rgba(203,213,224, 0.2)",
        width: 200,
        height: 150,
      },
      type: "group",
      // draggable: false,
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
      position: { x: 40, y: 40 },
      targetPosition: "left",
      type: "addTransformation",
      parentId: "transformation_group",
      extent: "parent",
      // draggable: false,
    };
  }, []);

  const defaultDestinationNode = useMemo(() => {
    return {
      id: "destination",
      data: {
        icon: MdLogin,
        label: "Destination",
        type: "destination",
        action: (
          <Button
            variant="link"
            onClick={handleDestinationModalToggle}
            style={{ paddingRight: 5, paddingLeft: 5, fontSize: 12 }}
            icon={<PlusIcon />}
            size="sm"
          >
            Destination
          </Button>
        ),
      },
      position: { x: 650, y: 150 },
      type: "dataNodeSelector",
      // draggable: false,
    };
  }, [handleDestinationModalToggle]);

  const initialNodes = [
    defaultSourceNode,
    transformationGroup,
    defaultTransformationNode,
    defaultDestinationNode,
  ];

  const initialEdges = [
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
  ];

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

  const onSourceSelection = useCallback(
    (source: Source) => {
      const selectedSourceNode = {
        id: "source",
        data: {
          connectorType: source.type,
          label: source.name,
          type: "source",
          // draggable: false,
          editAction: () => setIsSourceModalOpen(true),
        },
        position: { x: 100, y: 160 },
        type: "dataNode",
        // draggable: false,
      };
      updateIfSourceConfigured(true);
      setUpdatedSourceNodes(selectedSourceNode);
      updateSelectedSource(source);

      const destinationNode = isDestinationConfigured
        ? updatedDestinationNodes
        : defaultDestinationNode;

      // Update the nodes
      setNodes([
        selectedSourceNode,
        transformationGroup,
        defaultTransformationNode,
        destinationNode,
      ]);

      handleSourceModalToggle();
    },
    [
      transformationGroup,
      defaultTransformationNode,
      defaultDestinationNode,
      updateIfSourceConfigured,
      isDestinationConfigured,
      updatedDestinationNodes,
      updateSelectedSource,
      handleSourceModalToggle,
    ]
  );

  const onDestinationSelection = useCallback(
    (destination: Destination) => {
      const selectedDestinationNode = {
        id: "destination",
        data: {
          connectorType: destination.type,
          label: destination.name,
          type: "destination",
          // draggable: false,
          editAction: () => setIsDestinationModalOpen(true),
        },
        position: { x: 650, y: 160 },
        type: "dataNode",
        // draggable: false,
      };

      updateIfDestinationConfigured(true);
      setUpdatedDestinationNodes(selectedDestinationNode);
      updateSelectedDestination(destination);

      const sourceNode = isSourceConfigured
        ? updatedSourceNodes
        : defaultSourceNode;

      // Update the nodes
      setNodes([
        sourceNode,
        transformationGroup,
        defaultTransformationNode,
        selectedDestinationNode,
      ]);

      handleDestinationModalToggle();
    },
    [
      transformationGroup,
      defaultTransformationNode,
      defaultSourceNode,
      updateIfDestinationConfigured,
      isSourceConfigured,
      updatedSourceNodes,
      updateSelectedDestination,
      handleDestinationModalToggle,
    ]
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
        <Background
          style={{
            borderRadius: "5px",
          }}
          gap={15}
          color={"#F2F9FF"}
        />
      </ReactFlow>
      <Modal
        // variant={ModalVariant.large}
        isOpen={isSourceModalOpen}
        onClose={handleSourceModalToggle}
        aria-labelledby="modal-source-body-with-description"
        aria-describedby="modal-source-body-with-description"
      >
        <ModalHeader
          title="Data Source"
          labelId="modal-with-description-title"
          description="Select a source to be used in pipeline from the list of already configured source list below or configure a new source by selection create a new source radio button."
        />

        <ModalBody tabIndex={0} id="modal-source-body-with-description">
          <SourcePipelineModel onSourceSelection={onSourceSelection} />
          {/* <Split hasGutter>
            <SplitItem className="creation_flow-card_selection">
              <Card
                id="select-existing-source"
                isSelectable
                isSelected={isChecked === id1}
                
              >
                <CardHeader
                  selectableActions={{
                    selectableActionId: id1,
                    selectableActionAriaLabelledby: "select-existing-source",
                    name: "pipeline-source",
                    variant: "single",
                    onChange,
                  }}
                >
                  <CardTitle>Select a Source</CardTitle>
                </CardHeader>
                <CardBody>
                  Select a already configured source from the list below
                </CardBody>
              </Card>
            </SplitItem>

            <SplitItem className="creation_flow-card_selection">
              <Card
                id="create-new-source"
                isSelectable
                isSelected={isChecked === id2}
               
              >
                <CardHeader
                  selectableActions={{
                    selectableActionId: id2,
                    selectableActionAriaLabelledby: "create-new-source",
                    name: "pipeline-source",
                    variant: "single",
                    onChange,
                  }}
                >
                  <CardTitle>Create a source</CardTitle>
                </CardHeader>
                <CardBody>Create a new source for your data pipeline.</CardBody>
              </Card>
            </SplitItem>
          </Split>
          <Divider  style={{marginTop: "10px"}}/>
          {isChecked === id1 ? ( <SourceSelectionList
            tableType="source"
            onSelection={onSourceSelection}
          />):(<SourceCatalogGrid/>)} */}
        </ModalBody>
      </Modal>

      <Modal
        variant={ModalVariant.large}
        isOpen={isDestinationModalOpen}
        onClose={handleDestinationModalToggle}
        aria-labelledby="modal-with-description-title"
        aria-describedby="modal-box-body-with-description"
      >
        <ModalHeader
          title="Select a destination"
          labelId="modal-with-description-title"
          description="A description is used when you want to provide more info about the modal than the title is able to describe. The content in the description is static and will not scroll with the rest of the modal body."
        />

        <ModalBody tabIndex={0} id="modal-box-body-with-description">
          <DestinationSelectionList
            tableType="destination"
            onSelection={onDestinationSelection}
          />
        </ModalBody>
      </Modal>
    </>
  );
};

export default CreationFlow;
