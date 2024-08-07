/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import {
  ActionGroup,
  Button,
  ButtonType,
  Card,
  CardBody,
  Flex,
  FlexItem,
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
  Skeleton,
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
import { useLocation, useNavigate } from "react-router-dom";
import "./ConfigurePipeline.css";
import { CodeEditor, Language } from "@patternfly/react-code-editor";
import { useEffect, useState } from "react";
import {
  createPost,
  Destination,
  fetchDataTypeTwo,
  Source,
} from "../../apis/apis";
import { API_URL } from "../../utils/constants";
import { useData } from "../../appLayout/AppContext";

const ConfigurePipeline: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const sourceId = params.get("sourceId");
  const destinationId = params.get("destinationId");

  const navigateTo = (url: string) => {
    navigate(url);
  };

  const { navigationCollapsed } = useData();

  const [editorSelected, setEditorSelected] = useState("form-editor");

  const [isLoading, setIsLoading] = useState(false);

  const [source, setSource] = useState<Source>();
  const [isSourceLoading, setIsSourceLoading] = useState<boolean>(true);
  const [, setSourceError] = useState<string | null>(null);

  const [destination, setDestination] = useState<Destination>();
  const [, setIsDestinationLoading] =
    useState<boolean>(true);
  const [, setDestinationError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSources = async () => {
      setIsSourceLoading(true);
      const response = await fetchDataTypeTwo<Source>(
        `${API_URL}/api/sources/${sourceId}`
      );

      if (response.error) {
        setSourceError(response.error);
      } else {
        setSource(response.data as Source);
      }

      setIsSourceLoading(false);
    };

    fetchSources();
  }, [sourceId]);

  useEffect(() => {
    const fetchDestination = async () => {
      setIsDestinationLoading(true);
      const response = await fetchDataTypeTwo<Destination>(
        API_URL + `/api/destinations/${destinationId}`
      );

      if (response.error) {
        setDestinationError(response.error);
      } else {
        setDestination(response.data as Destination);
      }

      setIsDestinationLoading(false);
    };

    fetchDestination();
  }, [destinationId]);

  const createNewPipline = async (values: Record<string, string>) => {
    const payload = {
      description: values["description"],
      logLevel: logLevel,
      source: {
        name: source?.name,
        id: source?.id,
      },
      destination: {
        name: destination?.name,
        id: destination?.id,
      },
      transforms: [],
      name: values["pipeline-name"],
    };

    const response = await createPost(`${API_URL}/api/pipelines`, payload);

    if (response.error) {
      console.error("Failed to create source:", response.error);
    } else {
      console.log("Source created successfully:", response.data);
    }
  };

  const handleCreatePipline = async (values: Record<string, string>) => {
    setIsLoading(true);
    // TODO - Remove after demo: Add a 2-second delay
    // setTimeout(async () => {
    //   await createNewPipline(values);
    //   setIsLoading(false);
    //   navigateTo("/pipeline");
    // }, 2000);
    await createNewPipline(values);
    setIsLoading(false);
    navigateTo("/pipeline");
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
        <Toolbar id="create-editor-toggle" className="create_pipeline-toolbar">
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
              // To do: Add custom class to the pf-v6-c-page__main-body for center alignment in collapsed navigation
              className={navigationCollapsed ? "pipeline-page-section" : ""}
            >
              {editorSelected === "form-editor" ? (
                <Card className="pipeline-card-body">
                  <CardBody isFilled>
                    <Form isWidthLimited>
                      <FormGroup
                        label="Pipeline flow"
                        isRequired
                        fieldId="pipeline-flow-field"
                      >
                        <Flex alignItems={{ default: "alignItemsCenter" }}>
                          {isSourceLoading ? (
                            <>
                              <FlexItem spacer={{ default: "spacerMd" }}>
                                <Skeleton
                                  shape="circle"
                                  width="15%"
                                  screenreaderText="Loading source"
                                />
                              </FlexItem>
                              <FlexItem>
                                <Skeleton
                                  shape="circle"
                                  width="15%"
                                  screenreaderText="Loading source"
                                />
                              </FlexItem>
                            </>
                          ) : (
                            <FlexItem spacer={{ default: "spacerMd" }}>
                              <ConnectorImage
                                connectorType={source?.type || ""}
                                size={30}
                              />
                            </FlexItem>
                          )}

                          <FlexItem spacer={{ default: "spacerMd" }}>
                            {source?.name}
                          </FlexItem>
                          <FlexItem spacer={{ default: "spacerMd" }}>
                            <ArrowRightIcon />
                          </FlexItem>
                          <FlexItem spacer={{ default: "spacerMd" }}>
                            <ConnectorImage
                              connectorType={destination?.type || ""}
                              size={30}
                            />
                          </FlexItem>
                          <FlexItem spacer={{ default: "spacerMd" }}>
                            {destination?.name}
                          </FlexItem>
                        </Flex>
                      </FormGroup>
                      <FormGroup
                        label="Pipeline name"
                        isRequired
                        fieldId="pipeline-name-field"
                      >
                        <TextInput
                          id="pipeline-name"
                          aria-label="pipeline name"
                          onChange={(_event, value) => {
                            setValue("pipeline-name", value);
                            setError("pipeline-name", undefined);
                          }}
                          value={getValue("pipeline-name")}
                          validated={
                            errors["pipeline-name"] ? "error" : "default"
                          }
                        />
                        <FormHelperText>
                          <HelperText>
                            <HelperTextItem
                              variant={
                                errors["pipeline-name"] ? "error" : "default"
                              }
                              {...(errors["pipeline-name"] && {
                                icon: <ExclamationCircleIcon />,
                              })}
                            >
                              {errors["pipeline-name"]}
                            </HelperTextItem>
                          </HelperText>
                        </FormHelperText>
                      </FormGroup>
                      <FormGroup
                        label="Description"
                        fieldId="description-field"
                      >
                        <TextInput
                          id="description"
                          aria-label="Pipeline description"
                          onChange={(_event, value) =>
                            setValue("description", value)
                          }
                          value={getValue("description")}
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
                      <FormSection
                        title="Configuration properties"
                        titleElement="h2"
                        className="custom-form-group"
                      >
                        <FormGroup
                          label="Log level"
                          isRequired
                          fieldId="logLevel-field"
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

                    if (!values["pipeline-name"]) {
                      setError("pipeline-name", "Pipeline name is required.");
                    } else {
                      handleCreatePipline(values);
                    }
                  }}
                >
                  Create pipeline
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
