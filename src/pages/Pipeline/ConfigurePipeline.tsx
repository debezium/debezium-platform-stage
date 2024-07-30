/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import {
  ActionGroup,
  Button,
  ButtonType,
  Card,
  CardBody,
  Form,
  FormContextProvider,
  FormGroup,
  FormHelperText,
  FormSection,
  FormSelect,
  FormSelectOption,
  HelperText,
  HelperTextItem,
  PageSection,
  Text,
  TextContent,
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
  ExclamationCircleIcon,
  ArrowRightIcon,
} from "@patternfly/react-icons";
import ConnectorImage from "../../components/ComponentImage";
import { useNavigate, useParams } from "react-router-dom";
import "./ConfigurePipeline.css";
import { CodeEditor, Language } from "@patternfly/react-code-editor";
import { useState } from "react";
import { createPost } from "../../apis/apis";
import { API_URL } from "../../utils/constants";
import { convertMapToObject } from "../../utils/helpers";
import sourceCatalog from "../../mocks/data/SourceCatalog.json";
import _ from "lodash";

const ConfigurePipeline: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { sourceId } = useParams<{ sourceId: string }>();

  const navigateTo = (url: string) => {
    navigate(url);
  };

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
      console.error("Failed to create source:", response.error);
    } else {
      console.log("Source created successfully:", response.data);
    }
  };

  const handleCreateSource = (values: Record<string, string>) => {
    setIsLoading(true);
     // TODO - Remove after demo: Add a 2-second delay
    setTimeout(async () => {
      await createNewSource(values);
      setIsLoading(false);
      navigateTo("/source");
    }, 2000);
  };

  const [logLevel, setLogLevel] = React.useState("");

  const onChange = (
    _event: React.FormEvent<HTMLSelectElement>,
    value: string
  ) => {
    setLogLevel(value);
  };

  const options = [
    { value: "", label: "Select log level", disabled: false },
    { value: "OFF", label: "OFF", disabled: false },
    { value: "FATAL", label: "FATAL", disabled: false },
    { value: "ERROR", label: "ERROR", disabled: false },
    { value: "WARN", label: "WARN", disabled: false },
    { value: "INFO", label: "INFO", disabled: false },
    { value: "DEBUG", label: "DEBUG", disabled: false },
    { value: "TRACE", label: "TRACE", disabled: false },
    { value: "ALL", label: "ALL", disabled: false },
  ];

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
        <TextContent style={{ marginBlockEnd: "10px" }}>
          <Text component="h1">Create pipeline </Text>
          <Text component="p">
            To configure and create a data pipeline fill out the below form or
            use the smart editor to setup a new data pipeline. If you already
            have a configuration file, you can setup a new data pipeline by
            uploading it in the smart editor.
          </Text>
        </TextContent>
      </PageSection>

      <FormContextProvider initialValues={{}}>
        {({ setValue, getValue, setError, values, errors }) => (
          <>
            <PageSection
              // isWidthLimited
              isCenterAligned
              isFilled
              style={{ paddingTop: "0" }}
              // To do: Add custom class to the pf-v6-c-page__main-body for center alignment in collapsed navigation
              // className="custom-card-body"
            >
              <Toolbar id="create-editor-toggle">
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

              {editorSelected === "form-editor" ? (
                <Card className="custom-card-body">
                  <CardBody isFilled>
                    <Form isWidthLimited>
                      <FormGroup
                        label="Source type"
                        isRequired
                        fieldId="source-type-field"
                      >
                        <TextContent
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <ConnectorImage
                            connectorType={"postgres"}
                            size={35}
                          />
                          {/* <Text component="p" style={{ paddingLeft: "10px" }}>
                            {getConnectorTypeName(sourceId || "")}
                          </Text> */}
                          <div
                            style={{
                              paddingLeft: "10px",
                              paddingRight: "10px",
                            }}
                          >
                            {" "}
                            <ArrowRightIcon />
                          </div>

                          <ConnectorImage
                            connectorType={"infinispan"}
                            size={35}
                          />
                        </TextContent>
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
                              Add a one liner to describe your pipeline or what
                              you plan to capture.
                            </HelperTextItem>
                          </HelperText>
                        </FormHelperText>
                      </FormGroup>
                      <FormSection title="Configuration properties" titleElement="h2"  
                      className="custom-form-group"
                      >
                      <FormGroup
                          label="Log level"
                          isRequired
                          fieldId="details-field"
                        >
                          <FormSelect
                            value={logLevel}
                            onChange={onChange}
                            aria-label="FormSelect Input"
                            ouiaId="BasicFormSelect"
                          >
                            {options.map((option, index) => (
                              <FormSelectOption
                                isDisabled={option.disabled}
                                key={index}
                                value={option.value}
                                label={option.label}
                              />
                            ))}
                          </FormSelect>
                        </FormGroup>
                      </FormSection>

                      {/* <FormFieldGroup
                        // className="custom-form-group"
                        header={
                          <FormFieldGroupHeader
                            titleText={{
                              text: "Configuration properties",
                              id: "configuration-properties-group",
                            }}
                          />
                        }
                      >
                       
                      </FormFieldGroup> */}
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
                  onClick={() => navigateTo("/pipeline/pipeline_designer")}
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

export { ConfigurePipeline };
