import { PageSection, Text, TextContent, Card } from "@patternfly/react-core";
import React from "react";

const WelcomePage: React.FC = () => {
  return (
    <>
      <PageSection>
        <TextContent>
          <Text component="h1" size={1.125}>
            Welcome to Stage
          </Text>
          <Text component="p">
            Stage UI provide a visual tool to setup and operate with data
            pipelines where can you define the source, the destination, and any
            data transformations.
          </Text>
        </TextContent>
      </PageSection>
      <PageSection isFilled>
        <Card isFullHeight></Card>
      </PageSection>
    </>
  );
};

export default WelcomePage;
