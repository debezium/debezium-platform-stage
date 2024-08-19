/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import {
  Gallery,
  GalleryItem,
  PageSection,
  Tile,
} from "@patternfly/react-core";
import "./DestinationCatalog.css";
import destinationCatalog from "../../mocks/data/DestinationCatalog.json";
import ConnectorImage from "../../components/ComponentImage";

export interface IDestinationCatalogGridProps {
  selectDestination: (destinationId: string) => void;
}

const DestinationCatalogGrid: React.FunctionComponent<
  IDestinationCatalogGridProps
> = ({ selectDestination }) => {
  const onCardClick = (destinationId: string) => {
    selectDestination(destinationId);
  };

  return (
    <PageSection>
      <Gallery hasGutter className="custom-gallery">
        {destinationCatalog.map((item) => (
          <GalleryItem  key={item.id}>
            <Tile
             
              style={{ width: "100%" }}
              title={item.name}
              icon={<ConnectorImage connectorType={item.id} />}
              isStacked
              isDisplayLarge
              isSelected={false}
              onClick={() => onCardClick(item.id)}
            >
              {item.description}
            </Tile>
          </GalleryItem>
        ))}
      </Gallery>
    </PageSection>
  );
};

export { DestinationCatalogGrid };
