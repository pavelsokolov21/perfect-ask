import type { Meta, StoryObj } from '@storybook/svelte';

import Input from './Input.svelte';

const meta = {
	title: 'components/Input',
	component: Input
} satisfies Meta<Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputStory: Story = {
	args: {
		placeholder: 'Placeholder',
		value: ''
	}
};
