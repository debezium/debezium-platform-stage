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
  NotificationBadge,
  NotificationBadgeVariant,
} from "@patternfly/react-core";
import { BarsIcon } from "@patternfly/react-icons";
import React from "react";
import dbz_logo_black from "../assets/color_black_debezium.svg";
import dbz_svg from "../assets/debezium_logo.png";
import imgAvatar from "@patternfly/react-core/src/components/assets/avatarImg.svg";
import { useNavigate } from "react-router-dom";
import { NotificationProps } from "./AppLayout";

interface AppHeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  handleNotificationBadgeClick: () => void;
  getNotificationBadgeVariant: () => unknown;
  addNotification: (variant: NotificationProps["variant"]) => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  isSidebarOpen,
  toggleSidebar,
  handleNotificationBadgeClick,
  getNotificationBadgeVariant,
}) => {
  const navigate = useNavigate();

  const navigateTo = (url: string) => {
    navigate(url);
  };

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
            onClick={() => navigateTo("/")}
            style={{ cursor: "pointer" }}
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
                <NotificationBadge
                  variant={
                    getNotificationBadgeVariant() as
                      | NotificationBadgeVariant
                      | "read"
                      | "unread"
                      | "attention"
                      | undefined
                  }
                  onClick={handleNotificationBadgeClick}
                  aria-label="Notifications"
                ></NotificationBadge>
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
