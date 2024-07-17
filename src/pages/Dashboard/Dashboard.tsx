import * as React from "react";
import { PageSection, Title } from "@patternfly/react-core";
import {
  BreadthFirstLayout,
  ColaGroupsLayout,
  ColaLayout,
  ConcentricLayout,
  DagreLayout,
  // ComponentFactory,
  DefaultEdge,
  DefaultGroup,
  DefaultNode,
  EdgeAnimationSpeed,
  EdgeStyle,
  ForceLayout,
  GRAPH_LAYOUT_END_EVENT,
  Graph,
  GraphComponent,
  GridLayout,
  Layout,
  LayoutFactory,
  Model,
  ModelKind,
  NodeModel,
  NodeShape,
  NodeStatus,
  SELECTION_EVENT,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
} from "@patternfly/react-topology";

import { DataSourceIcon as SourceIcon } from "@patternfly/react-icons";
import { DataSinkIcon as SinkIcon } from "@patternfly/react-icons";

import { PlusCircleIcon as Icon3 } from "@patternfly/react-icons";

import { DataProcessorIcon as Icon4 } from "@patternfly/react-icons";

// interface CustomNodeProps {
//   element: Node;
// }

const BadgeColors = [
  {
    name: "A",
    badgeColor: "#ace12e",
    badgeTextColor: "#0f280d",
    badgeBorderColor: "#486b00",
  },
  {
    name: "B",
    badgeColor: "#F2F0FC",
    badgeTextColor: "#5752d1",
    badgeBorderColor: "#CBC1FF",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomNode: React.FC<any> = ({ element }) => {
  const data = element.getData();
  let Icon = SourceIcon;
  if (data.icon === "transform") {
    Icon = Icon4;
  } else if (data.icon === "add") {
    Icon = Icon3;
  } else if (data.icon === "sink") {
    Icon = SinkIcon;
  }
  const badgeColors = BadgeColors.find(
    (badgeColor) => badgeColor.name === data.badge
  );

  return (
    <DefaultNode
      element={element}
      showStatusDecorator
      badge={data.badge}
      badgeColor={badgeColors?.badgeColor}
      badgeTextColor={badgeColors?.badgeTextColor}
      badgeBorderColor={badgeColors?.badgeBorderColor}
    >
      <g transform={`translate(25, 25)`}>
        <Icon style={{ color: "#393F44" }} width={25} height={25} />
      </g>
    </DefaultNode>
  );
};

const customLayoutFactory: LayoutFactory = (
  type: string,
  graph: Graph
): Layout | undefined => {
  switch (type) {
    case "BreadthFirst":
      return new BreadthFirstLayout(graph);
    case "Cola":
      return new ColaLayout(graph);
    case "ColaNoForce":
      return new ColaLayout(graph, { layoutOnDrag: false });
    case "Concentric":
      return new ConcentricLayout(graph);
    case "Dagre":
      return new DagreLayout(graph);
    case "Force":
      return new ForceLayout(graph);
    case "Grid":
      return new GridLayout(graph);
    case "ColaGroups":
      return new ColaGroupsLayout(graph, { layoutOnDrag: false });
    default:
      return new ColaLayout(graph, { layoutOnDrag: false });
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customComponentFactory: any = (kind: ModelKind, type: string) => {
  switch (type) {
    case "group":
      return DefaultGroup;
    default:
      switch (kind) {
        case ModelKind.graph:
          return GraphComponent;
        case ModelKind.node:
          return CustomNode;
        case ModelKind.edge:
          return DefaultEdge;
        default:
          return undefined;
      }
  }
};

const NODE_DIAMETER = 75;

const NODES: NodeModel[] = [
  {
    id: "node-source",
    type: "node",
    label: "Source",
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.hexagon,
    status: NodeStatus.default,
    data: {
      badge: "A",
      icon: "default",
    },
  },
  // {
  //   id: "node-4",
  //   type: "node",
  //   label: "Node 4",
  //   width: NODE_DIAMETER,
  //   height: NODE_DIAMETER,
  //   shape: NodeShape.trapezoid,
  //   status: NodeStatus.default,
  //   data: {
  //     badge: "B",
  //     icon: "transform",
  //   },
  // },

  // {
  //   id: "node-3",
  //   type: "node",
  //   label: "Node 3",
  //   width: NODE_DIAMETER,
  //   height: NODE_DIAMETER,
  //   shape: NodeShape.trapezoid,
  //   status: NodeStatus.default,
  //   data: {
  //     badge: "B",
  //     icon: "transform",
  //   },
  // },

  // {
  //   id: "node-2",
  //   type: "node",
  //   label: "Node 2",
  //   width: NODE_DIAMETER,
  //   height: NODE_DIAMETER,
  //   shape: NodeShape.trapezoid,
  //   status: NodeStatus.default,
  //   data: {
  //     badge: "B",
  //     icon: "transform",
  //   },
  // },
  {
    id: "node-1",
    type: "node",
    label: "Node 1",
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.trapezoid,
    status: NodeStatus.default,
    data: {
      badge: "B",
      icon: "transform",
    },
  },
  {
    id: "node-0",
    type: "node",
    label: "Node 0",
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.trapezoid,
    status: NodeStatus.default,
    data: {
      badge: "B",
      icon: "transform",
    },
  },
  {
    id: "node-add",
    type: "node",
    label: "+ Add",
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.ellipse,
    status: NodeStatus.default,
    data: {
      badge: "B",
      icon: "add",
    },
  },

  {
    id: "Group-1",
    children: [
      "node-add",
      "node-0",
      "node-1",
      // "node-2",
      // "node-3",
      // "node-4",
    ],
    type: "group",
    group: true,
    label: "Transformation",
    style: {
      padding: 40,
    },
  },

  {
    id: "node-sink",
    type: "node",
    label: "Sink",
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.hexagon,
    status: NodeStatus.default,
    data: {
      badge: "A",
      icon: "sink",
    },
  },
];

const EDGES = [
  {
    id: "edge-node-source-node-0",
    type: "edge",
    source: "node-source",
    target: "node-0",
    edgeStyle: EdgeStyle.dashedMd,
    animationSpeed: EdgeAnimationSpeed.medium,
  },
  {
    id: "edge-node-0-node-1",
    type: "edge",
    source: "node-0",
    target: "node-1",
    edgeStyle: EdgeStyle.dashedMd,
    animationSpeed: EdgeAnimationSpeed.medium,
  },
  // {
  //   id: "edge-node-1-node-2",
  //   type: "edge",
  //   source: "node-1",
  //   target: "node-2",
  //   edgeStyle: EdgeStyle.dashedMd,
  //   animationSpeed: EdgeAnimationSpeed.medium
  // },
  // {
  //   id: "edge-node-2-node-3",
  //   type: "edge",
  //   source: "node-2",
  //   target: "node-3",
  //   edgeStyle: EdgeStyle.dashedMd,
  //   animationSpeed: EdgeAnimationSpeed.medium
  // },
  // {
  //   id: "edge-node-3-node-4",
  //   type: "edge",
  //   source: "node-3",
  //   target: "node-4",
  //   edgeStyle: EdgeStyle.dashedMd,
  //   animationSpeed: EdgeAnimationSpeed.medium
  // },
  {
    id: "edge-node-1-node-sink",
    type: "edge",
    source: "node-1",
    target: "node-sink",
    edgeStyle: EdgeStyle.dashedMd,
    animationSpeed: EdgeAnimationSpeed.medium,
  },
];

const Dashboard: React.FunctionComponent = () => {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

  const controller = React.useMemo(() => {
    const model: Model = {
      nodes: NODES,
      edges: EDGES,
      graph: {
        id: "g1",
        type: "graph",
        layout: "Dagre",
      },
    };

    const newController = new Visualization();
    newController.registerLayoutFactory(customLayoutFactory);
    newController.registerComponentFactory(customComponentFactory);

    newController.addEventListener(GRAPH_LAYOUT_END_EVENT, () => {
      newController.getGraph().fit(80);
    });

    newController.addEventListener(SELECTION_EVENT, setSelectedIds);

    newController.fromModel(model, false);

    return newController;
  }, []);

  return (
    <PageSection>
      <Title headingLevel="h1" size="lg">
        Welcome to Stage
      </Title>
      <div style={{ height: "100%", width: "100%" }}>
        <VisualizationProvider controller={controller}>
          <VisualizationSurface state={{ selectedIds }} />
        </VisualizationProvider>
      </div>
    </PageSection>
  );
};

export { Dashboard };
