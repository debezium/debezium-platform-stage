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
  ExclamationCircleIcon,
} from "@patternfly/react-icons";
import ConnectorImage from "../../components/ComponentImage";
import { useNavigate, useParams } from "react-router-dom";
import "./CreateSource.css";
import { CodeEditor, Language } from "@patternfly/react-code-editor";
import { useState } from "react";
import { createPost, Source } from "../../apis/apis";
import { API_URL } from "../../utils/constants";
import { convertMapToObject, getConnectorTypeName } from "../../utils/helpers";
import sourceCatalog from "../../__mocks__/data/SourceCatalog.json";
import _ from "lodash";
import { useData } from "../../appLayout/AppContext";
import { useNotification } from "../../appLayout/AppNotificationContext";

const CreateSource: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { sourceId } = useParams<{ sourceId: string }>();

  const navigateTo = (url: string) => {
    navigate(url);
  };

  const { navigationCollapsed } = useData();

  const { addNotification } = useNotification();

  const [editorSelected, setEditorSelected] = React.useState("form-editor");

  const [isLoading, setIsLoading] = useState(false);

  const [properties, setProperties] = useState<
    Map<string, { key: string; value: string }>
  >(new Map([["key0", { key: "", value: "" }]]));
  const [keyCount, setKeyCount] = useState<number>(1);

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

  const createNewSource = async (values: Record<string, string>) => {
    const payload = {
      description: values["details"],
      type: _.find(sourceCatalog, { id: sourceId })?.type || "",
      schema: "schema321",
      vaults: [],
      config: convertMapToObject(properties),
      name: values["source-name"],
    };

    const response = await createPost(`${API_URL}/api/sources`, payload);

    if (response.error) {
      addNotification(
        "danger",
        `Source creation failed`,
        `Failed to create ${(response.data as Source).name}: ${response.error}`
      );
    } else {
      addNotification(
        "success",
        `Create successful`,
        `Source "${(response.data as Source).name}" created successfully.`
      );
    }
  };

  const handleCreateSource = async (values: Record<string, string>) => {
    setIsLoading(true);
     // TODO - Remove after demo: Add a 2-second delay
    // setTimeout(async () => {
    //   await createNewSource(values);
    //   setIsLoading(false);
    //   navigateTo("/source");
    // }, 2000);
    await createNewSource(values);
    setIsLoading(false);
    navigateTo("/source");
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
      <PageSection isWidthLimited>
          <Content component="h1">Create source </Content>
          <Content component="p">
            To configure and create a connector fill out the below form or use
            the smart editor to setup a new source connector. If you already
            have a configuration file, you can setup a new source connector by
            uploading it in the smart editor.
          </Content>
        <Toolbar id="create-editor-toggle" className="create_source-toolbar">
          <ToolbarContent style={{ padding: "0" }}>
            <ToolbarItem>
              <ToggleGroup aria-label="Toggle between form editor and smart editor">
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
              className={navigationCollapsed ? "custom-page-section" : ""}
              // To do: Add custom class to the pf-v6-c-page__main-body for center alignment in collapsed navigation
              // className="custom-card-body"
            >
              {editorSelected === "form-editor" ? (
                <Card className="custom-card-body">
                  <CardBody isFilled>
                    <Form isWidthLimited>
                      <FormGroup
                        label="Source type"
                        isRequired
                        fieldId="source-type-field"
                      >
                          <ConnectorImage
                            connectorType={sourceId || ""}
                            size={35}
                          />
                          <Content component="p" style={{ paddingLeft: "10px" }}>
                            {getConnectorTypeName(sourceId || "")}
                          </Content>
                      </FormGroup>
                      <FormGroup
                        label="Source name"
                        isRequired
                        fieldId="source-name-field"
                      >
                        <TextInput
                          id="source-name"
                          aria-label="Source name"
                          onChange={(_event, value) => {
                            setValue("source-name", value);
                            setError("source-name", undefined);
                          }}
                          value={getValue("source-name")}
                          validated={
                            errors["source-name"] ? "error" : "default"
                          }
                        />
                        <FormHelperText>
                          <HelperText>
                            <HelperTextItem
                              variant={
                                errors["source-name"] ? "error" : "default"
                              }
                              {...(errors["source-name"] && {
                                icon: <ExclamationCircleIcon />,
                              })}
                            >
                              {errors["source-name"]}
                            </HelperTextItem>
                          </HelperText>
                        </FormHelperText>
                      </FormGroup>
                      <FormGroup label="Description" fieldId="details-field">
                        <TextInput
                          id="details"
                          aria-label="Source details"
                          onChange={(_event, value) =>
                            setValue("details", value)
                          }
                          value={getValue("details")}
                        />
                        <FormHelperText>
                          <HelperText>
                            <HelperTextItem>
                              Add a one liner to describe your source or where
                              you plan to capture.
                            </HelperTextItem>
                          </HelperText>
                        </FormHelperText>
                      </FormGroup>

                      <FormFieldGroup
                        // className="custom-form-group"
                        header={
                          <FormFieldGroupHeader
                            titleText={{
                              text: (
                                <Content component="h4">
                                  Configuration properties
                                </Content>
                              ),
                              id: "configuration-properties-group",
                            }}
                            titleDescription="Enter the both key and value pair to configure a property"
                            actions={
                              <>
                                <Button
                                  variant="secondary"
                                  icon={<PlusIcon />}
                                  onClick={handleAddProperty}
                                >
                                  Add property
                                </Button>
                              </>
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
                                  fieldId={`configuration-properties-key-field-${key}`}
                                >
                                  <TextInput
                                    isRequired
                                    type="text"
                                    placeholder="Key"
                                    id={`configuration-properties-key-${key}`}
                                    name={`configuration-properties-key-${key}`}
                                    value={properties.get(key)?.key || ""}
                                    onChange={(_e, value) =>
                                      handlePropertyChange(key, "key", value)
                                    }
                                  />
                                </FormGroup>
                                <FormGroup
                                  label=""
                                  isRequired
                                  fieldId={`configuration-properties-value-field-${key}`}
                                >
                                  <TextInput
                                    isRequired
                                    type="text"
                                    id={`configuration-properties-value-${key}`}
                                    placeholder="Value"
                                    name={`configuration-properties-value-${key}`}
                                    value={properties.get(key)?.value || ""}
                                    onChange={(_e, value) =>
                                      handlePropertyChange(key, "value", value)
                                    }
                                  />
                                </FormGroup>
                              </Grid>
                            </SplitItem>
                            <SplitItem>
                              <Button
                                variant="plain"
                                aria-label="Remove property"
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
              ) : (
                <CodeEditor
                  isUploadEnabled
                  isDownloadEnabled
                  isCopyEnabled
                  isLanguageLabelVisible
                  isMinimapVisible
                  language={Language.yaml}
                  // code="your code goes here"
                  height="450px"
                  // className="custom-card-body"
                />
              )}
            </PageSection>
            <PageSection className="pf-m-sticky-bottom" isFilled={false}>
              <ActionGroup style={{ marginTop: 0 }}>
                <Button
                  variant="primary"
                  // onClick={handleCreateSource}
                  isLoading={isLoading}
                  isDisabled={isLoading}
                  type={ButtonType.submit}
                  onClick={(e) => {
                    e.preventDefault();

                    if (!values["source-name"]) {
                      setError("source-name", "Source name is required.");
                    } else {
                      handleCreateSource(values);
                    }
                  }}
                >
                  Create source
                </Button>
                <Button
                  variant="link"
                  onClick={() => navigateTo("/source/catalog")}
                >
                  Back to catalog
                </Button>
              </ActionGroup>
            </PageSection>
          </>
        )}
      </FormContextProvider>
    </>
  );
};

export { CreateSource };
