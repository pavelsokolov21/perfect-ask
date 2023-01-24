import type { Meta, StoryObj } from '@storybook/svelte';

import InputComponent from './Input.svelte';

const meta = {
	title: 'components',
	component: InputComponent
} satisfies Meta<InputComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Input: Story = {
	args: {
		placeholder: 'Placeholder',
		value: ''
	}
};
