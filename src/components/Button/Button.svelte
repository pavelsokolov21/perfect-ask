<script lang="ts">
	import cn from 'classnames';

	import type { ButtonTypes } from './Button-interfaces';

	export let type: ButtonTypes = 'filled';
</script>

<button class={cn('button', type)}><slot>Отправить</slot></button>

<style lang="scss">
	@import '@styles/colors.scss';
	@import '@styles/common.scss';

	.button {
		outline: none;
		transition: all $primaryTransitionTime $primaryAnimationType;
		cursor: pointer;

		&.filled,
		&.bordered {
			padding: 12px 20px;
			border: 1px solid $primary;
			border-radius: $primaryBorderRadius;
			font-weight: 500;

			&:hover {
				filter: drop-shadow(0px 3px 10px $primary);
			}
		}

		&.filled {
			background-color: $primary;
			color: $white;

			&:hover {
				background-color: $transparent;
				color: $gray;
			}
		}

		&.bordered {
			background-color: $transparent;
			color: $primary;

			&:hover {
				background-color: $primary;
				color: $white;
			}
		}

		&.text {
			color: $lightGray;
			background-color: $transparent;
			border: none;

			&:hover {
				color: $primary;
			}
		}
	}
</style>
