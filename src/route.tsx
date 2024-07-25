import React from "react";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Sources } from "./pages/Source/Sources";
import { Destinations } from "./pages/Destination/Destinations";
import { AppBranding } from "./utils/constants";
import {
  DataProcessorIcon,
  DataSinkIcon,
  DataSourceIcon,
  HomeAltIcon,
} from "@patternfly/react-icons";
import { MigrationIcon as PipelineIcon } from "@patternfly/react-icons";
import { ServiceCatalogIcon as VaultIcon } from "@patternfly/react-icons";
import { Transformation } from "./pages/Transformation/Transformation";
import { DestinationCatalog } from "./pages/Destination/DestinationCatalog";
import { Vaults } from "./pages/Vault/Vaults";
import { SourceCatalog } from "./pages/Source/SourceCatalog";
import { CreateSource } from "./pages/Source/CreateSource";
import { CreateDestination } from "./pages/Destination/CreateDestination";
import { Pipelines } from "./pages/Pipeline/Pipelines";
import { PipelineDesigner } from "./pages/Pipeline/PipelineDesigner";
import { ConfigurePipeline } from "./pages/Pipeline/ConfigurePipeline";
import { EditSource } from "./pages/Source/EditSource";
import { EditDestination } from "./pages/Destination/EditDestination";

export interface IAppRoute {
  label?: string; // Excluding the label will exclude the route from the nav sidebar in AppLayout
  /* eslint-disable @typescript-eslint/no-explicit-any */
  component: React.ComponentType<any>;
  path: string;
  navSection: string;
  title: string;
  icon?: React.ReactElement;
  routes?: undefined;
}

export interface IAppRouteGroup {
  label: string;
  routes: IAppRoute[];
}

export type AppRouteConfig = IAppRoute | IAppRouteGroup;

const routes: AppRouteConfig[] = [
  {
    component: Dashboard,
    label: "Home",
    icon: <HomeAltIcon style={{ outline: "none" }} />,
    path: "/",
    navSection: "home",
    title: `${AppBranding} | Home`,
  },

  {
    component: Sources,
    label: "Source",
    icon: <DataSourceIcon style={{ outline: "none" }} />,
    path: "/source",
    navSection: "source",
    title: `${AppBranding} | Source`,
  },
  {
    component: SourceCatalog,
    path: "/source/catalog",
    navSection: "source",
    title: `${AppBranding} | Source`,
  },
  {
    component: CreateSource,
    path: "/source/create_source/:sourceId",
    navSection: "source",
    title: `${AppBranding} | Source`,
  },
  {
    component: EditSource,
    path: "/source/edit_source/:sourceId",
    navSection: "source",
    title: `${AppBranding} | Source`,
  },
  {
    component: Transformation,
    label: "Transformation",
    icon: <DataProcessorIcon style={{ outline: "none" }} />,
    path: "/transformation",
    navSection: "transformation",
    title: `${AppBranding} | Transformation`,
  },
  {
    component: Destinations,
    label: "Destination",
    icon: <DataSinkIcon style={{ outline: "none" }} />,
    title: `${AppBranding} | Destination`,
    path: "/destination",
    navSection: "destination",
  },
  {
    component: DestinationCatalog,
    path: "/destination/catalog",
    navSection: "destination",
    title: `${AppBranding} | Destination`,
  },
  {
    component: CreateDestination,
    path: "/destination/create_destination/:destinationId",
    navSection: "destination",
    title: `${AppBranding} | Destination`,
  },
  {
    component: EditDestination,
    path: "/destination/edit_destination/:destinationId",
    navSection: "destination",
    title: `${AppBranding} | Destination`,
  },
  {
    component: Vaults,
    label: "Vaults",
    icon: <VaultIcon style={{ outline: "none" }} />,
    path: "/vaults",
    navSection: "vaults",
    title: `${AppBranding} | Vaults`,
  },
  {
    component: Pipelines,
    label: "Pipeline",
    icon: <PipelineIcon style={{ outline: "none" }} />,
    path: "/pipeline",
    navSection: "pipeline",
    title: `${AppBranding} | Pipeline`,
  },
  {
    component: PipelineDesigner,
    path: "/pipeline/pipeline_designer",
    navSection: "pipeline",
    title: `${AppBranding} | Pipeline`,
  },
  {
    component: ConfigurePipeline,
    path: "/pipeline/pipeline_designer/create_pipeline",
    navSection: "pipeline",
    title: `${AppBranding} | Pipeline`,
  },
];

export { routes };
