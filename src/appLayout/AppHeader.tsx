import {
  Masthead,
  MastheadToggle,
  Button,
  MastheadMain,
  MastheadBrand,
  Brand,
  MastheadContent,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  Avatar,
} from "@patternfly/react-core";
import { BarsIcon, BellIcon } from "@patternfly/react-icons";
import React from "react";
import dbz_logo_black from "../assets/color_black_debezium.svg";
import dbz_svg from "../assets/dbz.svg";
import imgAvatar from "@patternfly/react-core/src/components/assets/avatarImg.svg";

interface AppHeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  isSidebarOpen,
  toggleSidebar,
}) => {
  return (
    <Masthead>
      <MastheadToggle>
        <Button
          variant="plain"
          onClick={() => toggleSidebar()}
          aria-label="Global navigation"
        >
          <BarsIcon />
        </Button>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand>
          <Brand
            src={isSidebarOpen ? dbz_logo_black : dbz_svg}
            alt="Debezium Logo"
            heights={{ default: "36px" }}
          />
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>
        <Toolbar id="masthead-toggle" isStatic isFullHeight>
          <ToolbarContent>
            <ToolbarGroup
              variant="icon-button-group"
              align={{ default: "alignEnd" }}
            >
              <ToolbarItem>
                <Button
                  variant="plain"
                  aria-label="notifications"
                  icon={<BellIcon />}
                />
              </ToolbarItem>
            </ToolbarGroup>
            <ToolbarItem variant="separator" />

            <ToolbarItem>
              <Avatar src={imgAvatar} alt="user avatar" />
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
      </MastheadContent>
    </Masthead>
  );
};

export default AppHeader;
