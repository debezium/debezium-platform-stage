import React from "react";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Source } from "./pages/Source/Source";
import { Sink } from "./pages/Sink/Sink";
import { AppBranding } from "./utils/constants";
import { DataProcessorIcon, DataSinkIcon, DataSourceIcon, HomeAltIcon } from "@patternfly/react-icons";
import { MigrationIcon as PipelineIcon } from "@patternfly/react-icons";
import { ServiceCatalogIcon as VaultIcon } from "@patternfly/react-icons";

export interface IAppRoute {
  label?: string; // Excluding the label will exclude the route from the nav sidebar in AppLayout
  /* eslint-disable @typescript-eslint/no-explicit-any */
  component: React.ComponentType<any>;
  path: string;
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
    label: 'Home',
    icon: <HomeAltIcon  />,
    path: "/",
    title: `${AppBranding} | Home`,
  },

  {
    component: Source,
    label: 'Source',
    icon: <DataSourceIcon />,
    path: "/source",
    title: `${AppBranding} | Source`,

  },
  
  {
    component: Source,
    label: 'Transformation',
    icon: <DataProcessorIcon />,
    path: "/transformation",
    title: `${AppBranding} | Transformation`,
  },
  {
    component: Sink,
    label: 'Destination',
    icon: <DataSinkIcon />,
    title: `${AppBranding} | Destination`,
    path: "/destination",
  },
  {
    component: Dashboard,
    label: 'Vaults',
    icon: <VaultIcon />,
    path: "/vaults",
    title: `${AppBranding} | Vaults`,

  },
  {
    component: Dashboard,
    label: 'Pipeline',
    icon: <PipelineIcon />,
    path: "/pipeline",
    title: `${AppBranding} | Pipeline`,

  },
  
];

export { routes };
