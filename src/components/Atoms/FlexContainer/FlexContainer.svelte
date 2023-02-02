<script lang="ts">
	import cn from 'classnames';

	import { createClassWithModifier } from '@utils/createClassWithModifier';
	import { CLASS_ALIGN, CLASS_INNER, CLASS_JUSTIFY, BASE_CLASS } from './FlexContainerConstants';
	import type { Align, Direction, Gap, Justify } from './FlexContainerInterfaces';

	export let justify: Justify = 'left';
	export let align: Align = 'center';
	export let gap: Gap = 'MD';
	export let fullWidth: boolean = false;
	export let direction: Direction = 'row';
	export let className: string = '';

	const justifyClass = createClassWithModifier<Justify>(CLASS_JUSTIFY, justify);
	const alignClass = createClassWithModifier<Align>(CLASS_JUSTIFY, align);
	const gapClass = createClassWithModifier<Gap>(`${CLASS_INNER}_gap`, gap);
	const fullWidthClass = createClassWithModifier(BASE_CLASS, 'full-width');
	const directionClass = createClassWithModifier(BASE_CLASS, direction);
</script>

<div class={cn(BASE_CLASS, { [fullWidthClass]: fullWidth })}>
	<div
		class={cn(
			CLASS_INNER,
			CLASS_JUSTIFY,
			CLASS_ALIGN,
			className,
			justifyClass,
			alignClass,
			gapClass,
			directionClass
		)}
	>
		<slot />
	</div>
</div>

<style lang="scss">
	.flex-container {
		&_full-width {
			width: 100%;
		}

		&__inner {
			display: flex;

			// Gaps
			&_gap {
				&_SM {
					gap: 4px;
				}

				&_MD {
					gap: 8px;
				}

				&_LG {
					gap: 16px;
				}

				&_XL {
					gap: 28px;
				}
			}
		}

		// Justifies
		&__justify {
			&_center {
				justify-content: center;
			}

			&_left {
				justify-content: flex-start;
			}

			&_right {
				justify-content: flex-end;
			}

			&_space-between {
				justify-content: space-between;
			}

			&_space-around {
				justify-content: space-around;
			}
		}

		// Aligns
		&__align {
			&_center {
				align-items: center;
			}

			&_top {
				align-items: flex-start;
			}

			&_bottom {
				align-items: flex-end;
			}
		}

		// Directions
		&_column {
			flex-direction: column;
		}

		&_row {
			flex-direction: row;
		}
	}
</style>
