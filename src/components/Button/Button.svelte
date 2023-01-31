<script lang="ts">
	import cn from 'classnames';

	import { createClassWithModifier } from '@utils/createClassWithModifier';
	import { BASE_CLASS } from './ButtonConstants';
	import type { ButtonTypes, Colors, Sizes } from './ButtonInterfaces';

	export let type: ButtonTypes = 'filled';
	export let color: Colors = 'primary';
	export let size: Sizes = 'MD';
	export let className: string = '';

	const classTypeBtn = createClassWithModifier(BASE_CLASS, type);
	const classColorBtn = createClassWithModifier(BASE_CLASS, color);
	const classSizeBtn = createClassWithModifier(BASE_CLASS, size);
</script>

<button class={cn('button', classTypeBtn, classColorBtn, classSizeBtn, className)}
	><slot>Отправить</slot></button
>

<style lang="scss">
	@import '@styles/font-sizes.scss';
	@import '@styles/colors.scss';
	@import '@styles/common.scss';

	.button {
		outline: none;
		transition: all $primaryTransitionTime $primaryAnimationType;
		cursor: pointer;

		// Colors
		&_white {
			color: $white;
		}

		&_primary {
			color: $primary;
		}

		// Types
		&_filled,
		&_bordered {
			padding: 6px 20px;
			border-radius: calc($radiusLg * 2);
			font-weight: 500;
			border-width: 1px;
			border-style: solid;

			&:hover {
				box-shadow: 0px 3px 11px $primary;
			}

			&[class*='primary'] {
				border-color: $primary;
			}

			&[class*='white'] {
				border-color: $white;
			}
		}

		&_filled {
			&:hover {
				background-color: $transparent;
			}

			&[class*='primary'] {
				background-color: $primary;

				&:hover {
					color: $gray;
				}
			}

			&[class*='white'] {
				background-color: $white;

				&:hover {
					color: $gray;
				}
			}
		}

		&_bordered {
			background-color: $transparent;

			&[class*='white'] {
				&:hover {
					background-color: $white;
					color: $primary;
				}
			}

			&[class*='primary'] {
				&:hover {
					background-color: $primary;
					color: $white;
				}
			}
		}

		&_text {
			border: none;
			background-color: $transparent;

			&:hover {
				color: $gray;
			}
		}

		// Sizes
		&_MD {
			font-size: $fontSizeMD;
		}

		&_2MD {
			font-size: $fontSize2MD;
			padding-left: 32px;
			padding-right: 32px;
		}
	}
</style>
