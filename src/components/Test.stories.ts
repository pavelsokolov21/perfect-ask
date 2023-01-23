import type { Meta, StoryObj } from '@storybook/svelte';

import Test from './Test.svelte';

const meta = {
	title: 'Example/Test',
	component: Test
} satisfies Meta<Test>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TestStory: Story = {};
