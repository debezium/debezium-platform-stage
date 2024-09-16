/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import {
  ActionGroup,
  Button,
  ButtonType,
  Card,
  CardBody,
  Content,
  Form,
  FormContextProvider,
  FormFieldGroup,
  FormFieldGroupHeader,
  FormGroup,
  FormHelperText,
  Grid,
  HelperText,
  HelperTextItem,
  PageSection,
  Split,
  SplitItem,
  TextInput,
  ToggleGroup,
  ToggleGroupItem,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
} from "@patternfly/react-core";
import {
  PencilAltIcon,
  CodeIcon,
  PlusIcon,
  TrashIcon,
} from "@patternfly/react-icons";
import destinationCatalog from "../../__mocks__/data/DestinationCatalog.json";
import ConnectorImage from "../../components/ComponentImage";
import "./CreateDestination.css";
import { CodeEditor, Language } from "@patternfly/react-code-editor";
import _ from "lodash";
import { createPost, Destination } from "../../apis/apis";
import { API_URL } from "../../utils/constants";
import { convertMapToObject, getConnectorTypeName } from "../../utils/helpers";
import { useNotification } from "../../appLayout/AppNotificationContext";

type CreateDestinationFormProps = {
  destinationId: string;
  selectDestination: (destinationId: string) => void;
  onSelection: (selection: Destination) => void;
};

const CreateDestinationForm: React.FunctionComponent<
  CreateDestinationFormProps
> = ({ destinationId, selectDestination, onSelection }) => {

  const { addNotification } = useNotification();

  const [editorSelected, setEditorSelected] = React.useState("form-editor");

  const [isLoading, setIsLoading] = React.useState(false);

  const [properties, setProperties] = React.useState<
    Map<string, { key: string; value: string }>
  >(new Map([["key0", { key: "", value: "" }]]));
  const [keyCount, setKeyCount] = React.useState<number>(1);

  const handleAddProperty = () => {
    const newKey = `key${keyCount}`;
    setProperties(
      (prevProperties) =>
        new Map(prevProperties.set(newKey, { key: "", value: "" }))
    );
    setKeyCount((prevCount) => prevCount + 1);
  };

  const handleDeleteProperty = (key: string) => {
    setProperties((prevProperties) => {
      const newProperties = new Map(prevProperties);
      newProperties.delete(key);
      return newProperties;
    });
  };

  const handlePropertyChange = (
    key: string,
    type: "key" | "value",
    newValue: string
  ) => {
    setProperties((prevProperties) => {
      const newProperties = new Map(prevProperties);
      const property = newProperties.get(key);
      if (property) {
        if (type === "key") property.key = newValue;
        else if (type === "value") property.value = newValue;
        newProperties.set(key, property);
      }
      return newProperties;
    });
  };

  const createNewDestination = async (values: Record<string, string>) => {
    const payload = {
      description: values["details"],
      type: _.find(destinationCatalog, { id: destinationId })?.type || "",
      schema: "schema321",
      vaults: [],
      config: convertMapToObject(properties),
      name: values["destination-name"],
    };

    const response = await createPost(`${API_URL}/api/destinations`, payload);

    if (response.error) {
      addNotification(
        "danger",
        `Destination creation failed`,
        `Failed to create ${(response.data as Destination).name}: ${response.error}`
      );
    } else {
      onSelection(response.data as Destination);
      addNotification(
        "success",
        `Create successful`,
        `Destination "${(response.data as Destination).name}" created successfully.`
      );
    }
  };

  const handleCreateDestination = async (values: Record<string, string>) => {
    setIsLoading(true);
    // TODO - Remove after demo: Add a 2-second delay
    // setTimeout(async () => {
    //   await createNewDestination(values);
    //   setIsLoading(false);
    //   navigateTo("/destination");
    // }, 2000);
    await createNewDestination(values);
    setIsLoading(false);
  };

  const handleItemClick = (
    event:
      | MouseEvent
      | React.MouseEvent<any, MouseEvent>
      | React.KeyboardEvent<Element>
  ) => {
    const id = event.currentTarget.id;
    setEditorSelected(id);
  };

  return (
    <>
      <PageSection isWidthLimited style={{ paddingTop: 0 }}>
        <Toolbar
          id="create-editor-toggle"
          className="create_destination-toolbar"
        >
          <ToolbarContent>
            <ToolbarItem>
              <ToggleGroup aria-label="Toggle between form and smart editor">
                <ToggleGroupItem
                  icon={<PencilAltIcon />}
                  text="Form editor"
                  aria-label="Form editor"
                  buttonId="form-editor"
                  isSelected={editorSelected === "form-editor"}
                  onChange={handleItemClick}
                />

                <ToggleGroupItem
                  icon={<CodeIcon />}
                  text="Smart editor"
                  aria-label="Smart editor"
                  buttonId="smart-editor"
                  isSelected={editorSelected === "smart-editor"}
                  onChange={handleItemClick}
                />
              </ToggleGroup>
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
      </PageSection>
      <FormContextProvider initialValues={{}}>
        {({ setValue, getValue, setError, values, errors }) => (
          <>
            <PageSection
              isWidthLimited={editorSelected === "form-editor"}
              isCenterAligned
              isFilled
              style={{ paddingTop: "0" }}
              className={"custom-page-section"}
            >
              {editorSelected === "form-editor" ? (
                <>
                  <Card className="custom-card-body">
                    <CardBody isFilled>
                      <Form isWidthLimited>
                        <FormGroup
                          label="Destination type"
                          isRequired
                          fieldId="destination-type-field"
                        >
                          <>
                            <ConnectorImage
                              connectorType={destinationId || ""}
                              size={35}
                            />
                            <Content component="p" style={{ paddingLeft: "10px" }}>
                              {getConnectorTypeName(destinationId || "")}
                            </Content>
                          </>
                        </FormGroup>
                        <FormGroup
                          label="Destination name"
                          isRequired
                          fieldId="destination-name-field"
                        >
                          <TextInput
                            id="destination-name"
                            aria-label="destination name"
                            onChange={(_event, value) => {
                              setValue("destination-name", value);
                              setError("destination-name", undefined);
                            }}
                            value={getValue("destination-name")}
                            validated={
                              errors["destination-name"] ? "error" : "default"
                            }
                          />
                        </FormGroup>
                        <FormGroup
                          label="Description"
                          fieldId="destination-details-field"
                        >
                          <TextInput
                            id="destination-details"
                            aria-label="Destination details"
                            onChange={(_event, value) =>
                              setValue("details", value)
                            }
                            value={getValue("details")}
                          />
                          <FormHelperText>
                            <HelperText>
                              <HelperTextItem>
                                Add a one-liner to describe your destination or
                                where you plan to capture.
                              </HelperTextItem>
                            </HelperText>
                          </FormHelperText>
                        </FormGroup>

                        <FormFieldGroup
                          header={
                            <FormFieldGroupHeader
                              titleText={{
                                text: "Configuration properties",
                                id: "field-group-destination-id",
                              }}
                              titleDescription="Enter both key and value pairs to configure a property"
                              actions={
                                <Button
                                  variant="secondary"
                                  icon={<PlusIcon />}
                                  onClick={handleAddProperty}
                                >
                                  Add property
                                </Button>
                              }
                            />
                          }
                        >
                          {Array.from(properties.keys()).map((key) => (
                            <Split hasGutter key={key}>
                              <SplitItem isFilled>
                                <Grid hasGutter md={6}>
                                  <FormGroup
                                    label=""
                                    isRequired
                                    fieldId={`destination-config-props-key-field-${key}`}
                                  >
                                    <TextInput
                                      isRequired
                                      type="text"
                                      placeholder="Key"
                                      id={`destination-config-props-key-${key}`}
                                      name={`destination-config-props-key-${key}`}
                                      value={properties.get(key)?.key || ""}
                                      onChange={(_e, value) =>
                                        handlePropertyChange(key, "key", value)
                                      }
                                    />
                                  </FormGroup>
                                  <FormGroup
                                    label=""
                                    isRequired
                                    fieldId={`destination-config-props-value-field-${key}`}
                                  >
                                    <TextInput
                                      isRequired
                                      type="text"
                                      id={`destination-config-props-value-${key}`}
                                      placeholder="Value"
                                      name={`destination-config-props-value-${key}`}
                                      value={properties.get(key)?.value || ""}
                                      onChange={(_e, value) =>
                                        handlePropertyChange(
                                          key,
                                          "value",
                                          value
                                        )
                                      }
                                    />
                                  </FormGroup>
                                </Grid>
                              </SplitItem>
                              <SplitItem>
                                <Button
                                  variant="plain"
                                  aria-label="Remove"
                                  onClick={() => handleDeleteProperty(key)}
                                >
                                  <TrashIcon />
                                </Button>
                              </SplitItem>
                            </Split>
                          ))}
                        </FormFieldGroup>
                      </Form>
                    </CardBody>
                  </Card>
                </>
              ) : (
                <CodeEditor
                  isUploadEnabled
                  isDownloadEnabled
                  isCopyEnabled
                  isLanguageLabelVisible
                  isMinimapVisible
                  language={Language.yaml}
                  height="450px"
                />
              )}
            </PageSection>

            <PageSection className="pf-m-sticky-bottom" isFilled={false}>
              <ActionGroup style={{ marginTop: 0 }}>
                <Button
                  variant="primary"
                  isLoading={isLoading}
                  isDisabled={isLoading}
                  type={ButtonType.submit}
                  onClick={(e) => {
                    e.preventDefault();

                    if (!values["destination-name"]) {
                      setError(
                        "destination-name",
                        "Destination name is required."
                      );
                    } else {
                      handleCreateDestination(values);
                    }
                  }}
                >
                  Create destination
                </Button>
                <Button variant="link" onClick={() => selectDestination("")}>
                  Back
                </Button>
              </ActionGroup>
            </PageSection>
          </>
        )}
      </FormContextProvider>
    </>
  );
};

export { CreateDestinationForm };
