import type { Meta, StoryObj } from '@storybook/react';
// import { within, userEvent, expect } from '@storybook/test';

import { Destination } from './Destination';

const meta = {
  title: 'App/Pages/Sink',
  component: Destination,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Destination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Landing: Story = {};


