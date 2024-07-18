import * as React from "react";
import {
  Button,
  Card,
  Flex,
  FlexItem,
  Label,
  PageSection,
  SearchInput,
  Text,
  TextContent,
  TextVariants,
  ToggleGroup,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
} from "@patternfly/react-core";
import { PlusIcon, TagIcon } from "@patternfly/react-icons";
import { useNavigate } from "react-router-dom";
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  ActionsColumn,
  IAction,
} from "@patternfly/react-table";
import ConnectorImage from "../../components/ComponentImage";

export interface ISourceProps {
  sampleProp?: string;
}

const Destination: React.FunctionComponent<ISourceProps> = () => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/destination/catalog");
  };

  const rowActions = (): IAction[] => [
    {
      title: "Edit",
    },

    {
      title: "Delete",
    },
  ];

  return (
    <>
      <PageSection isWidthLimited>
        <TextContent>
          <Text component="h1">Destination</Text>
          <Text component="p">
            Add a destination to capture the change data event. To start select
            a connector below once you select a connector you can configure it
            using form or smart editor option. You can also search the connector
            by its name or toggle the catalog between the list view or card
            view.
          </Text>
        </TextContent>
      </PageSection>

      {/* <EmptyStatus
        heading="No Destination available"
        primaryMessage=' No Destination is configure for this cluster yet. To capture the streaming change
              events from a source database you can configure a Destination by click
              the "Add Destination" button.'
        secondaryMessage="This text has overridden a css component variable to demonstrate
              how to apply customizations using PatternFly's global
              variable API."
        primaryAction={
          <Button variant="primary" icon={<PlusIcon />} onClick={navigateTo}>
            Add destination
          </Button>
        }
        secondaryActions={
          <>
            <Button variant="link">Go to source</Button>
            <Button variant="link">Configure Vaults</Button>
          </>
        }
      /> */}

      <PageSection>
        <Card style={{ paddingTop: "15px" }}>
          <Toolbar
            id="toolbar-sticky"
            // inset={{ default: "insetNone" }}
            style={{
              // paddingLeft: "10px",
              // paddingRight: "10px",
              // paddingTop: "5px",
              marginRight: "1px",
              marginLeft: "1px",
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
                  <Button
                    variant="primary"
                    icon={<PlusIcon />}
                    onClick={navigateTo}
                  >
                    Add destination
                  </Button>
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
          <Table aria-label="Compact Table">
            <Thead>
              <Tr>
                <Th key={0}>Name</Th>
                <Th key={1}>Type</Th>
                <Th key={2}>Active</Th>
                <Th key={3}>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr key={1}>
                <Td dataLabel="Name">RocketMq</Td>
                <Td dataLabel="Type" style={{ paddingLeft: "0px" }}>
                  <Flex alignItems={{ default: "alignItemsCenter" }}>
                    <FlexItem>
                      <ConnectorImage connectorType={"mongo"} size={35} />
                    </FlexItem>
                    <FlexItem>MongoDb</FlexItem>
                  </Flex>
                </Td>
                <Td dataLabel="Active">
                  <Label icon={<TagIcon />} color="blue">
                    2
                  </Label>
                </Td>
                <Td dataLabel="Actions" isActionCell>
                  <ActionsColumn items={rowActions()} />
                </Td>
              </Tr>
              <Tr key={2}>
                <Td dataLabel="Name">PostgresSource</Td>
                <Td dataLabel="Type" style={{ paddingLeft: "0px" }}>
                  <Flex alignItems={{ default: "alignItemsCenter" }}>
                    <FlexItem>
                      <ConnectorImage connectorType={"postgres"} size={35} />
                    </FlexItem>
                    <FlexItem>PostgreSql</FlexItem>
                  </Flex>
                </Td>
                <Td dataLabel="Active">
                  <Label icon={<TagIcon />} color="blue">
                    2
                  </Label>
                </Td>
                <Td dataLabel="Actions" isActionCell>
                  <ActionsColumn items={rowActions()} />
                </Td>
              </Tr>
              <Tr key={3}>
                <Td dataLabel="Name">PostgresSource</Td>
                <Td dataLabel="Type" style={{ paddingLeft: "0px" }}>
                  <Flex alignItems={{ default: "alignItemsCenter" }}>
                    <FlexItem>
                      <ConnectorImage connectorType={"mongo"} size={35} />
                    </FlexItem>
                    <FlexItem>MongoDb</FlexItem>
                  </Flex>
                </Td>
                <Td dataLabel="Active">
                  <Label icon={<TagIcon />} color="blue">
                    2
                  </Label>
                </Td>
                <Td dataLabel="Actions" isActionCell>
                  <ActionsColumn items={rowActions()} />
                </Td>
              </Tr>


              <Tr key={4}>
                <Td dataLabel="Name">RocketMq</Td>
                <Td dataLabel="Type" style={{ paddingLeft: "0px" }}>
                  <Flex alignItems={{ default: "alignItemsCenter" }}>
                    <FlexItem>
                      <ConnectorImage connectorType={"cassandra"} size={35} />
                    </FlexItem>
                    <FlexItem>Cassandra</FlexItem>
                  </Flex>
                </Td>
                <Td dataLabel="Active">
                  <Label icon={<TagIcon />} color="blue">
                    2
                  </Label>
                </Td>
                <Td dataLabel="Actions" isActionCell>
                  <ActionsColumn items={rowActions()} />
                </Td>
              </Tr>
              <Tr key={5}>
                <Td dataLabel="Name">PostgresSource</Td>
                <Td dataLabel="Type" style={{ paddingLeft: "0px" }}>
                  <Flex alignItems={{ default: "alignItemsCenter" }}>
                    <FlexItem>
                      <ConnectorImage connectorType={"postgres"} size={35} />
                    </FlexItem>
                    <FlexItem>PostgreSql</FlexItem>
                  </Flex>
                </Td>
                <Td dataLabel="Active">
                  <Label icon={<TagIcon />} color="blue">
                    2
                  </Label>
                </Td>
                <Td dataLabel="Actions" isActionCell>
                  <ActionsColumn items={rowActions()} />
                </Td>
              </Tr>
              <Tr key={6}>
                <Td dataLabel="Name">PostgresSource</Td>
                <Td dataLabel="Type" style={{ paddingLeft: "0px" }}>
                  <Flex alignItems={{ default: "alignItemsCenter" }}>
                    <FlexItem>
                      <ConnectorImage connectorType={"mysql"} size={35} />
                    </FlexItem>
                    <FlexItem>MySql</FlexItem>
                  </Flex>
                </Td>
                <Td dataLabel="Active">
                  <Label icon={<TagIcon />} color="blue">
                    2
                  </Label>
                </Td>
                <Td dataLabel="Actions" isActionCell>
                  <ActionsColumn items={rowActions()} />
                </Td>
              </Tr>






              <Tr key={1}>
                <Td dataLabel="Name">RocketMq</Td>
                <Td dataLabel="Type" style={{ paddingLeft: "0px" }}>
                  <Flex alignItems={{ default: "alignItemsCenter" }}>
                    <FlexItem>
                      <ConnectorImage connectorType={"mongo"} size={35} />
                    </FlexItem>
                    <FlexItem>MongoDb</FlexItem>
                  </Flex>
                </Td>
                <Td dataLabel="Active">
                  <Label icon={<TagIcon />} color="blue">
                    2
                  </Label>
                </Td>
                <Td dataLabel="Actions" isActionCell>
                  <ActionsColumn items={rowActions()} />
                </Td>
              </Tr>
              <Tr key={2}>
                <Td dataLabel="Name">PostgresSource</Td>
                <Td dataLabel="Type" style={{ paddingLeft: "0px" }}>
                  <Flex alignItems={{ default: "alignItemsCenter" }}>
                    <FlexItem>
                      <ConnectorImage connectorType={"postgres"} size={35} />
                    </FlexItem>
                    <FlexItem>PostgreSql</FlexItem>
                  </Flex>
                </Td>
                <Td dataLabel="Active">
                  <Label icon={<TagIcon />} color="blue">
                    2
                  </Label>
                </Td>
                <Td dataLabel="Actions" isActionCell>
                  <ActionsColumn items={rowActions()} />
                </Td>
              </Tr>
              <Tr key={3}>
                <Td dataLabel="Name">PostgresSource</Td>
                <Td dataLabel="Type" style={{ paddingLeft: "0px" }}>
                  <Flex alignItems={{ default: "alignItemsCenter" }}>
                    <FlexItem>
                      <ConnectorImage connectorType={"mongo"} size={35} />
                    </FlexItem>
                    <FlexItem>MongoDb</FlexItem>
                  </Flex>
                </Td>
                <Td dataLabel="Active">
                  <Label icon={<TagIcon />} color="blue">
                    2
                  </Label>
                </Td>
                <Td dataLabel="Actions" isActionCell>
                  <ActionsColumn items={rowActions()} />
                </Td>
              </Tr>


              <Tr key={4}>
                <Td dataLabel="Name">RocketMq</Td>
                <Td dataLabel="Type" style={{ paddingLeft: "0px" }}>
                  <Flex alignItems={{ default: "alignItemsCenter" }}>
                    <FlexItem>
                      <ConnectorImage connectorType={"cassandra"} size={35} />
                    </FlexItem>
                    <FlexItem>Cassandra</FlexItem>
                  </Flex>
                </Td>
                <Td dataLabel="Active">
                  <Label icon={<TagIcon />} color="blue">
                    2
                  </Label>
                </Td>
                <Td dataLabel="Actions" isActionCell>
                  <ActionsColumn items={rowActions()} />
                </Td>
              </Tr>
              <Tr key={5}>
                <Td dataLabel="Name">PostgresSource</Td>
                <Td dataLabel="Type" style={{ paddingLeft: "0px" }}>
                  <Flex alignItems={{ default: "alignItemsCenter" }}>
                    <FlexItem>
                      <ConnectorImage connectorType={"postgres"} size={35} />
                    </FlexItem>
                    <FlexItem>PostgreSql</FlexItem>
                  </Flex>
                </Td>
                <Td dataLabel="Active">
                  <Label icon={<TagIcon />} color="blue">
                    2
                  </Label>
                </Td>
                <Td dataLabel="Actions" isActionCell>
                  <ActionsColumn items={rowActions()} />
                </Td>
              </Tr>
              <Tr key={6}>
                <Td dataLabel="Name">PostgresSource</Td>
                <Td dataLabel="Type" style={{ paddingLeft: "0px" }}>
                  <Flex alignItems={{ default: "alignItemsCenter" }}>
                    <FlexItem>
                      <ConnectorImage connectorType={"mysql"} size={35} />
                    </FlexItem>
                    <FlexItem>MySql</FlexItem>
                  </Flex>
                </Td>
                <Td dataLabel="Active">
                  <Label icon={<TagIcon />} color="blue">
                    2
                  </Label>
                </Td>
                <Td dataLabel="Actions" isActionCell>
                  <ActionsColumn items={rowActions()} />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Card>
      </PageSection>
    </>
  );
};

export { Destination };
