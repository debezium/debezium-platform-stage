import {
  PageSidebar,
  PageSidebarBody,
  Stack,
  StackItem,
  Nav,
  NavList,
  NavItem,
  Switch,
  NavExpandable,
} from "@patternfly/react-core";
import { MoonIcon, SunIcon } from "@patternfly/react-icons";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IAppRoute, IAppRouteGroup, routes } from "../route";
import { useData } from "./AppContext";

interface AppSideNavigationProps {
  isSidebarOpen: boolean;
}

const AppSideNavigation: React.FC<AppSideNavigationProps> = ({
  isSidebarOpen,
}) => {
  const location = useLocation();

  const { setDarkMode } = useData();

  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("themeMode") === "dark"
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setDarkMode(!isDarkMode);
    localStorage.setItem(
      "themeMode",
      JSON.stringify(!isDarkMode ? "dark" : "light")
    );
    document.body.classList.toggle("pf-v6-theme-dark");
  };

  useEffect(() => {
    if (localStorage.getItem("themeMode") === "dark") {
      document.body.classList.add("pf-v6-theme-dark");
    }
  }, []);

  const renderNavItem = (route: IAppRoute, index: number) => (
    <NavItem
      key={`${route.label}-${index}`}
      id={`${route.label}-${index}`}
      isActive={location.pathname.includes(route.navSection)}
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
      <NavLink
        to={route.path}
        style={{ fontSize: "20px", flexDirection: "column" }}
      >
        {/* <Tooltip content={<div>{route.label}</div>}>{route.icon}</Tooltip> */}
        {route.icon}
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

  return (
    <PageSidebar style={isSidebarOpen ? {} : { width: "unset" }}>
      <PageSidebarBody>
        <Stack>
          <StackItem>{isSidebarOpen ? Navigation : NavigationClosed}</StackItem>
          <StackItem isFilled />
          <StackItem>
            {isSidebarOpen ? (
              <Nav style={{ paddingInlineEnd: "unset" }}>
                <NavList>
                  <NavItem>
                    <div
                      className="pf-v6-c-nav__link"
                      style={{ cursor: "pointer" }}
                    >
                      {isDarkMode ? <SunIcon /> : <MoonIcon />}
                      Dark mode
                      <Switch
                        // style={{ marginLeft: "auto" }}
                        className="custom-switch"
                        id="reversed-switch"
                        aria-label="Switch to dark mode"
                        isChecked={isDarkMode}
                        onChange={toggleDarkMode}
                        isReversed
                      />
                    </div>
                  </NavItem>
                </NavList>
              </Nav>
            ) : (
              <Nav style={{ paddingInlineEnd: "unset" }}>
                <NavList>
                  <NavItem>
                    <div
                      className="pf-v6-c-nav__link"
                      style={{ fontSize: "20px", cursor: "pointer" }}
                    >
                      {isDarkMode ? (
                        <SunIcon onClick={toggleDarkMode} />
                      ) : (
                        <MoonIcon onClick={toggleDarkMode} />
                      )}
                    </div>
                  </NavItem>
                </NavList>
              </Nav>
            )}
          </StackItem>
          {/* <StackItem>
            <div className="pf-v6-c-nav">
              <Split>
                <SplitItem>
                  <div className="pf-v6-c-nav__link">
                    <SunIcon />
                    Dark mode
                  </div>
                </SplitItem>
                <SplitItem isFilled />
                <SplitItem>
                  <Switch
                    id="reversed-switch"
                    aria-label="Switch to dark mode"
                    isChecked={false}
                    onChange={() => {}}
                    isReversed
                  />
                </SplitItem>
              </Split>
            </div>
          </StackItem> */}
        </Stack>
      </PageSidebarBody>
    </PageSidebar>
  );
};

export default AppSideNavigation;
