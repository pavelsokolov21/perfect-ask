<script lang="ts">
	import cn from 'classnames';

	import { createClassWithModifier } from '@utils/createClassWithModifier';
	import { CLASS_ALIGN, CLASS_INNER, CLASS_JUSTIFY, BASE_CLASS } from './FlexRowConstants';
	import type { Align, Gap, Justify } from './FlexRowInterfaces';

	export let justify: Justify = 'left';
	export let align: Align = 'center';
	export let gap: Gap = 'MD';
	export let fullWidth: boolean = false;

	const justifyClass = createClassWithModifier<Justify>(CLASS_JUSTIFY, justify);
	const alignClass = createClassWithModifier<Align>(CLASS_JUSTIFY, align);
	const gapClass = createClassWithModifier<Gap>(`${CLASS_INNER}_gap`, gap);
	const fullWidthClass = createClassWithModifier(BASE_CLASS, 'full-width');
</script>

<div class={cn(BASE_CLASS, { [fullWidthClass]: fullWidth })}>
	<div class={cn(CLASS_INNER, CLASS_JUSTIFY, CLASS_ALIGN, justifyClass, alignClass, gapClass)}>
		<slot />
	</div>
</div>

<style lang="scss">
	.flex-row {
		&_full-width {
			width: 100%;
		}

		&__inner {
			display: flex;

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
	}
</style>
