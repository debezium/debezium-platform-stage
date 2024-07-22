import React, { useEffect, useState } from "react";

import { API_URL } from "../utils/constants";
import { Flex, FlexItem } from "@patternfly/react-core";
import {
  Destination,
  PipelineDestination,
  Source,
  fetchDataTypeTwo,
} from "../apis/apis";
import { Td } from "@patternfly/react-table";
import ConnectorImage from "./ComponentImage";

interface DestinationFieldProps {
  pipelineDestination: PipelineDestination;
}

const DestinationField: React.FC<DestinationFieldProps> = ({
  pipelineDestination,
}) => {
  const [destination, setDestination] = useState<Destination>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDestination = async () => {
      setIsLoading(true);
      const response = await fetchDataTypeTwo<Destination>(
        API_URL + `/api/destinations/${pipelineDestination.id}`
      );

      if (response.error) {
        setError(response.error);
      } else {
        setDestination(response.data);
      }

      setIsLoading(false);
    };

    fetchDestination();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Td dataLabel="Destination" style={{ paddingLeft: "0px" }}>
      <Flex alignItems={{ default: "alignItemsCenter" }}>
        <FlexItem spacer={{ default: "spacerMd" }}>
          {destination && (
            <ConnectorImage
              connectorType={(destination as Source).type}
              size={35}
            />
          )}
        </FlexItem>
        <FlexItem>{pipelineDestination.name}</FlexItem>
      </Flex>
    </Td>
  );
};

export default DestinationField;
