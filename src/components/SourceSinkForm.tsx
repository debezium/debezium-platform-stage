import {
  Card,
  CardBody,
  FormGroup,
  Content,
  TextInput,
  FormHelperText,
  HelperText,
  HelperTextItem,
  FormFieldGroup,
  FormFieldGroupHeader,
  Button,
  Split,
  SplitItem,
  Grid,
  Form,
} from "@patternfly/react-core";
import { PlusIcon, TrashIcon } from "@patternfly/react-icons";
import { getConnectorTypeName } from "@utils/helpers";
import ConnectorImage from "./ComponentImage";

interface SourceSinkFormProps {
  ConnectorId: string;
  dataType?: string;
  errorWarning: string[];
  connectorType: "source" | "destination";
  properties: Map<string, { key: string; value: string }>;
  setValue: (key: string, value: string) => void;
  getValue: (key: string) => string;
  setError: (key: string, error: string | undefined) => void;
  errors: Record<string, string | undefined>;
  handleAddProperty: () => void;
  handleDeleteProperty: (key: string) => void;
  handlePropertyChange: (
    key: string,
    type: "key" | "value",
    value: string
  ) => void;
}
const SourceSinkForm = ({
  ConnectorId,
  dataType,
  connectorType,
  properties,
  setValue,
  getValue,
  setError,
  errorWarning,
  errors,
  handleAddProperty,
  handleDeleteProperty,
  handlePropertyChange,
}: SourceSinkFormProps) => {
  const connectorLabel = connectorType === "source" ? "Source" : "Destination";
  return (
    <Card className="custom-card-body">
      <CardBody isFilled>
        <Form isWidthLimited>
          <FormGroup
            label={`${connectorLabel} type`}
            isRequired
            fieldId={`${connectorType}-type-field`}
          >
            <>
              <ConnectorImage connectorType={dataType || ConnectorId || ""} size={35} />
              <Content component="p" style={{ paddingLeft: "10px" }}>
                {getConnectorTypeName(dataType || ConnectorId || "")}
              </Content>
            </>
          </FormGroup>
          <FormGroup
            label={`${connectorLabel} name`}
            isRequired
            fieldId={`${connectorType}-name-field`}
          >
            <TextInput
              id={`${connectorType}-name`}
              aria-label={`${connectorLabel} name`}
              onChange={(_event, value) => {
                setValue(`${connectorType}-name`, value);
                setError(`${connectorType}-name`, undefined);
              }}
              value={getValue(`${connectorType}-name`)}
              validated={errors[`${connectorType}-name`] ? "error" : "default"}
            />
          </FormGroup>
          <FormGroup
            label="Description"
            fieldId={`${connectorType}-description-field`}
          >
            <TextInput
              id={`${connectorType}-description`}
              aria-label={`${connectorLabel} description`}
              onChange={(_event, value) => setValue("description", value)}
              value={getValue(`description`)}
            />
            <FormHelperText>
              <HelperText>
                <HelperTextItem>
                  Add a one liner to describe your {connectorType} or where you
                  plan to capture.
                </HelperTextItem>
              </HelperText>
            </FormHelperText>
          </FormGroup>

          <FormFieldGroup
            header={
              <FormFieldGroupHeader
                titleText={{
                  text: "Configuration properties",
                  id: `field-group-${connectorType}-id`,
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
                      fieldId={`${connectorType}-config-props-key-field-${key}`}
                    >
                      <TextInput
                        isRequired
                        type="text"
                        placeholder="Key"
                        validated={errorWarning.includes(key) ? "error" : "default"}
                        id={`${connectorType}-config-props-key-${key}`}
                        name={`${connectorType}-config-props-key-${key}`}
                        value={properties.get(key)?.key || ""}
                        onChange={(_e, value) =>
                          handlePropertyChange(key, "key", value)
                        }
                      />
                    </FormGroup>
                    <FormGroup
                      label=""
                      isRequired
                      fieldId={`${connectorType}-config-props-value-field-${key}`}
                    >
                      <TextInput
                        isRequired
                        type="text"
                        id={`${connectorType}-config-props-value-${key}`}
                        placeholder="Value"
                        validated={errorWarning.includes(key) ? "error" : "default"}
                        name={`${connectorType}-config-props-value-${key}`}
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
  );
};

export default SourceSinkForm;
