import React from "react";
import { Breadcrumb, BreadcrumbItem } from "@patternfly/react-core";

interface AppBreadcrumbProps {
  path: string;
}

export const AppBreadcrumb: React.FunctionComponent<AppBreadcrumbProps> = ({
  path,
}) => {
    console.log(path);
  return (
    <Breadcrumb ouiaId="BasicBreadcrumb">
      <BreadcrumbItem to="/" key={"home"}>Home</BreadcrumbItem>
   
      {path.includes("pipeline") && (
        <BreadcrumbItem key={"pipeline"} isActive>
          Pipeline
        </BreadcrumbItem>
      )}
      {path.includes("source") && (
        <BreadcrumbItem key={"source"} isActive>
          Source
        </BreadcrumbItem>
      )}
      {path.includes("sink") && (
        <BreadcrumbItem key={"sink"} isActive>
          Sink
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
};