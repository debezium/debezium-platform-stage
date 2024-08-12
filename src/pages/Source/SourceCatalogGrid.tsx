/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import {
  Gallery,
  GalleryItem,
  PageSection,
  Tile,
} from "@patternfly/react-core";
import { PlusCircleIcon } from "@patternfly/react-icons";
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
          <GalleryItem>
            <Tile
              key={item.id}
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
  );
};

export { SourceCatalogGrid };
