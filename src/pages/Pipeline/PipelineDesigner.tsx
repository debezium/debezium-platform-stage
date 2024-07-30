import * as React from "react";
import {
    ActionGroup,
    Button,
    Card,
  CardBody,
  CardFooter,
  PageSection,
  Text,
  TextContent,
} from "@patternfly/react-core";


import { useNavigate } from "react-router-dom";
import "./PipelineDesigner.css"
import CompositionFlow from "../../components/dataFlow/CompositionFlow";

// const BadgeColors = [
//   {
//     name: "A",
//     badgeColor: "#ace12e",
//     badgeTextColor: "#0f280d",
//     badgeBorderColor: "#486b00",
//   },
//   {
//     name: "B",
//     badgeColor: "#F2F0FC",
//     badgeTextColor: "#5752d1",
//     badgeBorderColor: "#CBC1FF",
//   },
// ];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const CustomNode: React.FC<any> = ({ element }) => {
//   const data = element.getData();
//   let Icon = SourceIcon;
//   if (data.icon === "transform") {
//     Icon = Icon4;
//   } else if (data.icon === "add") {
//     Icon = Icon3;
//   } else if (data.icon === "sink") {
//     Icon = SinkIcon;
//   }
//   const badgeColors = BadgeColors.find(
//     (badgeColor) => badgeColor.name === data.badge
//   );

//   return (
//     <DefaultNode
//       element={element}
//       showStatusDecorator
//       badge={data.badge}
//       badgeColor={badgeColors?.badgeColor}
//       badgeTextColor={badgeColors?.badgeTextColor}
//       badgeBorderColor={badgeColors?.badgeBorderColor}
//     >
//       <g transform={`translate(40, 40)`}>
//         <Icon style={{ color: "#393F44" }} width={40} height={40} />
//       </g>
//     </DefaultNode>
//   );
// };

// const customLayoutFactory: LayoutFactory = (
//   type: string,
//   graph: Graph
// ): Layout | undefined => {
//   switch (type) {
//     case "BreadthFirst":
//       return new BreadthFirstLayout(graph);
//     case "Cola":
//       return new ColaLayout(graph);
//     case "ColaNoForce":
//       return new ColaLayout(graph, { layoutOnDrag: false });
//     case "Concentric":
//       return new ConcentricLayout(graph);
//     case "Dagre":
//       return new DagreLayout(graph);
//     case "Force":
//       return new ForceLayout(graph);
//     case "Grid":
//       return new GridLayout(graph);
//     case "ColaGroups":
//       return new ColaGroupsLayout(graph, { layoutOnDrag: false });
//     default:
//       return new ColaLayout(graph, { layoutOnDrag: false });
//   }
// };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const customComponentFactory: any = (kind: ModelKind, type: string) => {
//   switch (type) {
//     case "group":
//       return DefaultGroup;
//     default:
//       switch (kind) {
//         case ModelKind.graph:
//           return GraphComponent;
//         case ModelKind.node:
//           return CustomNode;
//         case ModelKind.edge:
//           return DefaultEdge;
//         default:
//           return undefined;
//       }
//   }
// };

// const NODE_DIAMETER = 120;

// const NODES: NodeModel[] = [
//   {
//     id: "node-source",
//     type: "node",
//     label: "Source",
//     width: NODE_DIAMETER,
//     height: NODE_DIAMETER,
//     shape: NodeShape.hexagon,
//     status: NodeStatus.default,
//     data: {
//       badge: "A",
//       icon: "default",
//     },
//   },

//   {
//     id: "node-0",
//     type: "node",
//     label: "Node 0",
//     width: NODE_DIAMETER,
//     height: NODE_DIAMETER,
//     shape: NodeShape.trapezoid,
//     status: NodeStatus.default,
//     data: {
//       badge: "B",
//       icon: "transform",
//     },
//   },
//   // {
//   //   id: "node-add",
//   //   type: "node",
//   //   label: "+ Add",
//   //   width: NODE_DIAMETER,
//   //   height: NODE_DIAMETER,
//   //   shape: NodeShape.ellipse,
//   //   status: NodeStatus.default,
//   //   data: {
//   //     badge: "B",
//   //     icon: "add",
//   //   },
//   // },

//   {
//     id: "Group-1",
//     children: ["node-0"],
//     type: "group",
//     group: true,
//     label: "Transformation",
//     style: {
//       padding: 40,
//     },
//   },

//   {
//     id: "node-sink",
//     type: "node",
//     label: "Sink",
//     width: NODE_DIAMETER,
//     height: NODE_DIAMETER,
//     shape: NodeShape.hexagon,
//     status: NodeStatus.default,
//     data: {
//       badge: "A",
//       icon: "sink",
//     },
//   },
// ];

// const EDGES = [
//   {
//     id: "edge-node-source-node-0",
//     type: "edge",
//     source: "node-source",
//     target: "node-0",
//     edgeStyle: EdgeStyle.dashedMd,
//     animationSpeed: EdgeAnimationSpeed.medium,
//   },

//   {
//     id: "edge-node-0-node-sink",
//     type: "edge",
//     source: "node-0",
//     target: "node-sink",
//     edgeStyle: EdgeStyle.dashedMd,
//     animationSpeed: EdgeAnimationSpeed.medium,
//   },
// ];

const PipelineDesigner: React.FunctionComponent = () => {
  // const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

  const navigate = useNavigate();

  const navigateTo = (url: string) => {
    navigate(url);
  };

  // const controller = React.useMemo(() => {
  //   const model: Model = {
  //     nodes: NODES,
  //     edges: EDGES,
  //     graph: {
  //       id: "g1",
  //       type: "graph",
  //       layout: "Dagre",
  //     },
  //   };

  //   const newController = new Visualization();
  //   newController.registerLayoutFactory(customLayoutFactory);
  //   newController.registerComponentFactory(customComponentFactory);

  //   newController.addEventListener(GRAPH_LAYOUT_END_EVENT, () => {
  //     newController.getGraph().fit(80);
  //   });

  //   newController.addEventListener(SELECTION_EVENT, setSelectedIds);

  //   newController.fromModel(model, false);

  //   return newController;
  // }, []);

  return (
    <>
      <PageSection isWidthLimited>
        <TextContent>
          <Text component="h1">Pipeline designer</Text>
          <Text component="p">
            Configure the pipeline by adding an existing source and destination
            or create a new one as per you need. Optionally you can also any
            number of transformation as needed.
          </Text>
        </TextContent>
      </PageSection>
      <PageSection isFilled>
        <Card
          isFullHeight
          // style={{ minHeight: '30em' }}
        >
          {/* <CardTitle>Title</CardTitle>
   
    <CardBody isFilled={false}>Body pf-m-no-fill</CardBody>
    <CardBody>Body</CardBody>
    <CardFooter>Footer</CardFooter> */}
          {/* <div style={{ height: "100%", width: "100%" }}> */}
          <CardBody isFilled>
         
          <CompositionFlow sourceName={''} sourceType={""} destinationName={ ""} destinationType={ ""}/>
            
          </CardBody>
          
          <CardFooter className="custom-card-footer">
          <ActionGroup style={{ marginTop: 0 }}>
                <Button
                  variant="primary"
                 onClick={() => navigateTo("/pipeline/pipeline_designer/create_pipeline")}
                >
                  Configure Pipeline
                </Button>
                <Button
                  variant="link"
                  onClick={() => navigateTo("/pipeline")}
                >
                  Cancel
                </Button>
              </ActionGroup>

          </CardFooter>
        </Card>
      </PageSection>
    </>
  );
};

export { PipelineDesigner };
