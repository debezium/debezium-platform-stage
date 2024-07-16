import type { Meta, StoryObj } from '@storybook/react';
// import { within, userEvent, expect } from '@storybook/test';

import { Sink } from './Sink';

const meta = {
  title: 'App/Pages/Sink',
  component: Sink,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Sink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Landing: Story = {};


