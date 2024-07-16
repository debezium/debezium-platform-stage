import type { Meta, StoryObj } from '@storybook/react';
// import { within, userEvent, expect } from '@storybook/test';

import { Source } from './Source';

const meta = {
  title: 'App/Pages/Source',
  component: Source,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Source>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Landing: Story = {};


