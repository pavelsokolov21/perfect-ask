import type { Meta, StoryObj } from '@storybook/svelte';

import ButtonComponent from './Button.svelte';

const meta = {
	title: 'components',
	component: ButtonComponent,
	argTypes: {
		type: {
			options: ['filled', 'bordered', 'text'],
			control: { type: 'radio' },
			defaultValue: 'filled'
		}
	}
} satisfies Meta<ButtonComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Button: Story = {
	args: {}
};
