import "@patternfly/react-core/dist/styles/base.css";
import { Page } from "@patternfly/react-core";

import { useCallback, useState } from "react";
import AppBreadcrumb from "./AppBreadcrumb";
import "./AppLayout.css";
import AppHeader from "./AppHeader";
import AppSideNavigation from "./AppSideNavigation";
import { useLocation } from "react-router-dom";

interface IAppLayout {
  children: React.ReactNode;
}

const AppLayout: React.FunctionComponent<IAppLayout> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const pageId = "primary-app-container";

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(!sidebarOpen);
  }, [sidebarOpen]);

  return (
    <Page
      mainContainerId={pageId}
      masthead={
        <AppHeader isSidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      }
      sidebar={<AppSideNavigation isSidebarOpen={sidebarOpen} />}
      isManagedSidebar
      breadcrumb={
        location.pathname.split("/").length <= 2 ? undefined : <AppBreadcrumb />
      }
      groupProps={{
        stickyOnBreakpoint: { default: "top" },
      }}
    >
      {children}
    </Page>
  );
};

export { AppLayout };
