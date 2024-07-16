/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import {
  Gallery,
  GalleryItem,
  PageSection,
  SearchInput,
  Text,
  TextContent,
  TextVariants,
  Tile,
  ToggleGroup,
  ToggleGroupItem,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
} from "@patternfly/react-core";
import "./Sink.css";
import { ListIcon, PlusCircleIcon, ThIcon } from "@patternfly/react-icons";
import destinationCatalog from "../../mocks/data/DestinationCatalog.json";
import ConnectorImage from "../../components/ComponentImage";

export interface ISinkProps {
  sampleProp?: string;
}

// eslint-disable-next-line prefer-const
let Sink: React.FunctionComponent<ISinkProps> = () => {
  const [isSelected, setIsSelected] = React.useState("toggle-group-icons-1");

  const handleItemClick = (
    event:
      | MouseEvent
      | React.MouseEvent<any, MouseEvent>
      | React.KeyboardEvent<Element>
  ) => {
    const id = event.currentTarget.id;
    setIsSelected(id);
  };

  return (
    <>
      <PageSection isWidthLimited>
        <TextContent style={{ marginBlockEnd: "10px" }}>
          <Text component="h1">Destination</Text>
          <Text component="p">
            Add a destination to capture the change data event. To start select
            a connector below once you select a connector you can configure it
            using form or smart editor option. You can also search the connector
            by its name or toggle the catalog between the list view or card
            view.
          </Text>
        </TextContent>
        <Toolbar
          id="toolbar-sticky"
          inset={{ default: "insetNone" }}
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "5px",
          }}
          className="custom-toolbar"
          isSticky
        >
          <ToolbarContent>
            <ToolbarItem>
              <SearchInput aria-label="Items example search input" />
            </ToolbarItem>
            <ToolbarItem>
              <ToggleGroup aria-label="Icon variant toggle group">
                <ToggleGroupItem
                  icon={<ThIcon />}
                  aria-label="copy"
                  buttonId="toggle-group-icons-1"
                  isSelected={isSelected === "toggle-group-icons-1"}
                  onChange={handleItemClick}
                />

                <ToggleGroupItem
                  icon={<ListIcon />}
                  aria-label="share square"
                  buttonId="toggle-group-icons-3"
                  isSelected={isSelected === "toggle-group-icons-3"}
                  onChange={handleItemClick}
                />
              </ToggleGroup>
            </ToolbarItem>
            {/* <ToolbarItem variant="separator" /> */}
            <ToolbarGroup
              variant="icon-button-group"
              align={{ default: "alignEnd" }}
            >
              <ToolbarItem>
                <Text component={TextVariants.small}>12 Items</Text>
              </ToolbarItem>
            </ToolbarGroup>
          </ToolbarContent>
        </Toolbar>
      </PageSection>

      <PageSection>
        <Gallery hasGutter className="custom-gallery">
          {destinationCatalog.map((item) => (
            <GalleryItem>
              <Tile
                key={item.id}
                style={{ width: "100%" }}
                title={item.name}
                icon={<ConnectorImage connectorType={item.id} />}
                isStacked
                isDisplayLarge
                isSelected={false}
              >
                {item.description}
              </Tile>
            </GalleryItem>
          ))}
          <GalleryItem>
              <Tile
           
                style={{ width: "100%" }}
                title="Request new source"
                icon={<PlusCircleIcon color="#0066CC" />}
                isStacked
                isDisplayLarge
                isSelected={false}
              >
                Fill our a form to request a new source.
              </Tile>
            </GalleryItem>
        </Gallery>
      </PageSection>
    </>
  );
};

export { Sink };
