import type { Meta, StoryObj } from "@storybook/react";

import AppHeader from "./AppHeader";

const meta: Meta<typeof AppHeader> = {
  title: "App/Components/Header/AppHeader",
  component: AppHeader,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof AppHeader>;

export const Primary: Story = {
  args: {
    updateSidebarOpen: () => {},
  },
};

export const WithTextLogo: Story = {
  args: {
    updateSidebarOpen: () => {},
    logoWithText: true,
  },
};

export const WithCompactAvatar: Story = {
  args: {
    updateSidebarOpen: () => {},
    compactAvatar: true,
  },
};
