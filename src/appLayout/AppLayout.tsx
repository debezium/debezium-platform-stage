// import viteLogo from '/vite.svg'
// import './App.css'
import "@patternfly/react-core/dist/styles/base.css";
import {
  Avatar,
  Brand,
  Button,
  Masthead,
  MastheadBrand,
  MastheadContent,
  MastheadMain,
  MastheadToggle,
  Nav,
  NavExpandable,
  NavItem,
  NavList,
  Page,
  PageSidebar,
  PageSidebarBody,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  Tooltip,
} from "@patternfly/react-core";
import dbz_logo_black from "../assets/color_black_debezium.svg";
import dbz_svg from "../assets/dbz.svg";

import { IAppRoute, IAppRouteGroup, routes } from "../route";
import { NavLink, useLocation } from "react-router-dom";
import imgAvatar from "@patternfly/react-core/src/components/assets/avatarImg.svg";
import { useState } from "react";
import { AppBreadcrumb } from "../components/AppBreadcrumb";
import { BarsIcon, BellIcon } from "@patternfly/react-icons";

interface IAppLayout {
  children: React.ReactNode;
}

const AppLayout: React.FunctionComponent<IAppLayout> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const location = useLocation();

  const pageId = "primary-app-container";

  const renderNavItem = (route: IAppRoute, index: number) => (
    <NavItem
      key={`${route.label}-${index}`}
      id={`${route.label}-${index}`}
      isActive={route.path === location.pathname}
    >
      <NavLink to={route.path}>
        {route.icon}
        {route.label}
      </NavLink>
    </NavItem>
  );

  const renderNavIcon = (route: IAppRoute, index: number) => (
    <NavItem
      key={`${route.label}-${index}`}
      id={`${route.label}-${index}`}
      isActive={route.path === location.pathname}
    >
      <NavLink to={route.path} style={{ fontSize: "20px" }}>
        {/* <DataSourceIcon /> */}
        <Tooltip content={<div>{route.label}</div>}>{route.icon}</Tooltip>
      </NavLink>
    </NavItem>
  );

  const renderNavGroup = (group: IAppRouteGroup, groupIndex: number) => (
    <NavExpandable
      key={`${group.label}-${groupIndex}`}
      id={`${group.label}-${groupIndex}`}
      title={group.label}
      isActive={group.routes.some((route) => route.path === location.pathname)}
    >
      {group.routes.map(
        (route, idx) => route.label && renderNavItem(route, idx)
      )}
    </NavExpandable>
  );

  const Navigation = (
    <Nav id="nav-primary-simple">
      <NavList id="nav-list-simple">
        {routes.map(
          (route, idx) =>
            route.label &&
            (!route.routes
              ? renderNavItem(route, idx)
              : renderNavGroup(route, idx))
        )}
      </NavList>
    </Nav>
  );

  const NavigationClosed = (
    <Nav id="nav-primary-simple" style={{ paddingInlineEnd: "unset" }}>
      <NavList id="nav-list-simple">
        {routes.map(
          (route, idx) =>
            route.label &&
            (!route.routes
              ? renderNavIcon(route, idx)
              : renderNavGroup(route, idx))
        )}
      </NavList>
    </Nav>
  );

  const Sidebar = (
    <PageSidebar>
      <PageSidebarBody>{Navigation}</PageSidebarBody>
    </PageSidebar>
  );

  const SidebarClosed = (
    <PageSidebar style={{ width: "unset" }}>
      <PageSidebarBody>{NavigationClosed}</PageSidebarBody>
    </PageSidebar>
  );

  const Header = (
    <Masthead>
      <MastheadToggle>
        <Button
          variant="plain"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Global navigation"
        >
          <BarsIcon />
        </Button>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand>
          {/* <Brand
            src={ dbz_logo_svg }
            alt="Patterfly Logo"
            heights={{ default: "40px" }}
          /> */}
          {/* <Brand
            src={ dbz_svg }
            alt="Patterfly Logo"
            heights={{ default: "40px" }}
            
          /> */}
          <Brand
            src={sidebarOpen ? dbz_logo_black : dbz_svg}
            alt="Patterfly Logo"
            heights={{ default: "36px" }}
          />
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>
        <Toolbar id="toolbar-items-example" isStatic isFullHeight>
          <ToolbarContent>
            <ToolbarGroup
              variant="icon-button-group"
              align={{ default: "alignEnd" }}
            >
              <ToolbarItem>
                <Button
                  variant="plain"
                  aria-label="clone"
                  icon={<BellIcon />}
                />
              </ToolbarItem>
            </ToolbarGroup>
            <ToolbarItem variant="separator" />

            <ToolbarItem>
              <Avatar src={imgAvatar} alt="avatar" />
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
      </MastheadContent>
    </Masthead>
  );

  return (
    <Page
      mainContainerId={pageId}
      masthead={Header}
      sidebar={sidebarOpen ? Sidebar : SidebarClosed}
      isManagedSidebar
      // skipToContent={PageSkipToContent}
      breadcrumb={
        location.pathname === "/" ? (
          <></>
        ) : (
          <AppBreadcrumb path={location.pathname} />
        )
      }
      // isBreadcrumbWidthLimited
      // isBreadcrumbGrouped
      groupProps={{
        stickyOnBreakpoint: { default: "top" },
      }}
    >
      {children}
    </Page>
  );
};

export { AppLayout };
