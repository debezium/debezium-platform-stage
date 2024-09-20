/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import {
  Gallery,
  GalleryItem,
  PageSection,
  Tile,
} from "@patternfly/react-core";
import ConnectorImage from "./ComponentImage";
import destinationCatalog from "../__mocks__/data/DestinationCatalog.json";
import sourceCatalog from "../__mocks__/data/SourceCatalog.json";
import { PlusCircleIcon } from "@patternfly/react-icons";
import "./CatalogGrid.css";

export interface ICatalogGridProps {
  onCardSelect: (selectId: string) => void;
  catalogType: "destination" | "source";
  isAddButtonVisible: boolean;
}

const CatalogGrid: React.FunctionComponent<ICatalogGridProps> = ({
  onCardSelect,
  catalogType,
  isAddButtonVisible,
}) => {
  const catalog =
    catalogType === "destination" ? destinationCatalog : sourceCatalog;

  const onCardClick = (id: string) => {
    onCardSelect(id);
  };

  return (
    <PageSection>
      <Gallery hasGutter className="custom-gallery">
        {catalog.map((item) => (
          <GalleryItem key={item.id}>
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
        {isAddButtonVisible && (
          <GalleryItem>
            <Tile
              style={{ width: "100%" }}
              title={`Request new ${catalogType}`}
              icon={<PlusCircleIcon color="#0066CC" />}
              isStacked
              isDisplayLarge
              isSelected={false}
            >
              Fill our a form to request a new {catalogType}.
            </Tile>
          </GalleryItem>
        )}
      </Gallery>
    </PageSection>
  );
};

export { CatalogGrid };
