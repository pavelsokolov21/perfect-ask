<script lang="ts">
	import cn from 'classnames';

	import { createClassWithModifier } from '@utils/createClassWithModifier';
	import { BASE_CLASS } from './ButtonConstants';
	import type { ButtonTypes, Colors } from './ButtonInterfaces';

	export let type: ButtonTypes = 'filled';
	export let color: Colors = 'primary';

	const classTypeBtn = createClassWithModifier(BASE_CLASS, type);
	const classColorBtn = createClassWithModifier(BASE_CLASS, color);
</script>

<button class={cn('button', classTypeBtn, classColorBtn)}><slot>Отправить</slot></button>

<style lang="scss">
	@import '@styles/colors.scss';
	@import '@styles/common.scss';

	.button {
		outline: none;
		transition: all $primaryTransitionTime $primaryAnimationType;
		cursor: pointer;

		&_filled,
		&_bordered {
			padding: 6px 20px;
			border: 1px solid $primary;
			border-radius: calc($radiusLg * 2);
			font-weight: 500;

			&:hover {
				filter: drop-shadow(0px 3px 10px $primary);
			}
		}

		&_filled {
			background-color: $primary;
			color: $white;

			&:hover {
				background-color: $transparent;
				color: $gray;
			}
		}

		&_bordered {
			background-color: $transparent;
			color: $primary;

			&:hover {
				background-color: $primary;
				color: $white;
			}
		}

		&_text {
			color: $primary;
			background-color: $transparent;
			border: none;

			&:hover {
				color: $gray;
			}
		}
	}
</style>
