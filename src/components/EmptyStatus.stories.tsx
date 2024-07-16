import type { Meta, StoryObj } from "@storybook/react";
// import { within, userEvent, expect } from '@storybook/test';

import EmptyStatus from "./EmptyStatus";
import { Button } from "@patternfly/react-core";
import { PlusIcon } from "@patternfly/react-icons";

const meta = {
  title: "App/Components/EmptyStatus",
  component: EmptyStatus,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof EmptyStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    heading: "Empty State (Stub Support Module)",
    message:
      "This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.",
    primaryAction: (
      <Button variant="primary" icon={<PlusIcon />}>
        New Sink
      </Button>
    ),
  },
};
