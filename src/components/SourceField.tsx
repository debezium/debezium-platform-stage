import React, { useEffect, useState } from "react";

import { API_URL } from "../utils/constants";
import { Flex, FlexItem } from "@patternfly/react-core";
import { Td } from "@patternfly/react-table";
import { PipelineSource, Source, fetchDataTypeTwo } from "../apis/apis";
import ConnectorImage from "./ComponentImage";

interface SourceFieldProps {
  pipelineSource: PipelineSource;
}

const SourceField: React.FC<SourceFieldProps> = ({ pipelineSource }) => {
  const [source, setSource] = useState<Source>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSources = async () => {
      setIsLoading(true);
      const response = await fetchDataTypeTwo<Source>(
        `${API_URL}/api/sources/${pipelineSource.id}`
      );

      if (response.error) {
        setError(response.error);
      } else {
        setSource(response.data);
      }

      setIsLoading(false);
    };

    fetchSources();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Td dataLabel="Source" style={{ paddingLeft: "0px" }}>
      <Flex alignItems={{ default: "alignItemsCenter" }}>
        <FlexItem spacer={{ default: "spacerMd" }}>
          {source && (
            <ConnectorImage connectorType={(source as Source).type} size={35} />
          )}
        </FlexItem>
        <FlexItem>{pipelineSource.name}</FlexItem>
      </Flex>
    </Td>
  );
};

export default SourceField;
