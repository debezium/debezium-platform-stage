import {
  Masthead,
  MastheadToggle,
  Button,
  MastheadMain,
  MastheadBrand,
  Brand,
  MastheadContent,
  ButtonVariant,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  Dropdown,
  MenuToggle,
  MenuToggleElement,
  DropdownList,
  DropdownItem,
} from "@patternfly/react-core";
import { BarsIcon, BellIcon } from "@patternfly/react-icons";
import React from "react";
import dbz_svg from "./../assets/dbz.svg";
import dbz_logo_svg from "./../assets/dbz_logo.svg";
import UserAvatar from "./UserAvatar";
import UserAvatarCompact from "./UserAvatarCompact";

export interface AppHeaderProps {
  updateSidebarOpen: () => void;
  logoWithText?: boolean;
  compactAvatar?: boolean;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  updateSidebarOpen,
  logoWithText,
  compactAvatar,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const onDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onDropdownSelect = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const userDropdownItems = [
    <>
      <DropdownItem key="profile">http://localhost:9000</DropdownItem>
      <DropdownItem key="user">http://localhost:8080</DropdownItem>
      <DropdownItem key="logout">http://localhost:6000</DropdownItem>
    </>,
  ];

  return (
    <Masthead>
      <MastheadToggle>
        <Button
          variant="plain"
          onClick={updateSidebarOpen}
          aria-label="Global navigation"
        >
          <BarsIcon />
        </Button>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand>
          <Brand
            src={logoWithText ? dbz_logo_svg : dbz_svg}
            alt="Patterfly Logo"
            heights={{ default: "30px" }}
          />
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>
        <Toolbar id="toolbar" isFullHeight isStatic>
          <ToolbarContent>
            <ToolbarGroup
              variant="icon-button-group"
              align={{ default: "alignLeft" }}
              spacer={{ default: "spacerNone", md: "spacerMd" }}
            >
              <ToolbarItem>
                <Dropdown
                  isOpen={isDropdownOpen}
                  onSelect={onDropdownSelect}
                  onOpenChange={(isOpen: boolean) => setIsDropdownOpen(isOpen)}
                  toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                    <MenuToggle
                      ref={toggleRef}
                      onClick={onDropdownToggle}
                      isFullHeight
                      isExpanded={isDropdownOpen}
                    >
                      http://localhost:9000
                    </MenuToggle>
                  )}
                  ouiaId="BasicDropdown"
                  shouldFocusToggleOnSelect
                >
                  <DropdownList>{userDropdownItems}</DropdownList>
                </Dropdown>
              </ToolbarItem>
            </ToolbarGroup>

            <ToolbarGroup
              variant="icon-button-group"
              align={{ default: "alignRight" }}
              spacer={{ default: "spacerNone", md: "spacerMd" }}
            >
              <ToolbarItem>
                <Button
                  aria-label="Notifications"
                  variant={ButtonVariant.plain}
                  icon={<BellIcon />}
                />
              </ToolbarItem>
            </ToolbarGroup>
            <ToolbarItem visibility={{ default: "hidden", md: "visible" }}>
              {!compactAvatar ? <UserAvatar key={"avatar"} /> : <UserAvatarCompact key={"compact_avatar"}/>}
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
      </MastheadContent>
    </Masthead>
  );
};

export default AppHeader;
