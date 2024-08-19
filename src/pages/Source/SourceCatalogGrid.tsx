/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import {
  Gallery,
  GalleryItem,
  PageSection,
  Tile,
} from "@patternfly/react-core";
import sourceCatalog from "../../mocks/data/SourceCatalog.json";
import ConnectorImage from "../../components/ComponentImage";
import "./SourceCatalog.css";

export interface ISourceCatalogGridProps {
  selectSource: (sourceId: string) => void;
}

const SourceCatalogGrid: React.FunctionComponent<ISourceCatalogGridProps> = ({
  selectSource,
}) => {
  const onCardClick = (sourceId: string) => {
    selectSource(sourceId);
  };

  return (
    <PageSection>
      <Gallery hasGutter className="custom-gallery">
        {sourceCatalog.map((item) => (
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

export { SourceCatalogGrid };
