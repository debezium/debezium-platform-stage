import { PageSection, Card, Content } from "@patternfly/react-core";
import React from "react";

const WelcomePage: React.FC = () => {
  return (
    <>
      <PageSection>
        <Content component="h1" size={1.125}>
          Welcome to Stage
        </Content>
        <Content component="p">
          Stage UI provide a visual tool to setup and operate with data
          pipelines where can you define the source, the destination, and any
          data transformations.
        </Content>
      </PageSection>
      <PageSection isFilled>
        <Card isFullHeight>Welcome</Card>
      </PageSection>
    </>
  );
};

export default WelcomePage;
