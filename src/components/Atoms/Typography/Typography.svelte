<script lang="ts">
	import cn from 'classnames';

	import { createClassWithModifier } from '@utils/createClassWithModifier';
	import type { Align, Colors, Element, Sizes, Weight } from './TypographyInterfaces';
	import { BASE_CLASS } from './TypographyConstants';

	export let size: Sizes = 'MD';
	export let color: Colors = 'gray';
	export let weight: Weight = 'regular';
	export let className: string = '';
	export let element: Element = 'p';
	export let align: Align = 'left';

	const classSize = createClassWithModifier(BASE_CLASS, size);
	const classColor = createClassWithModifier(BASE_CLASS, color);
	const classWeight = createClassWithModifier(BASE_CLASS, weight);
	const classAlign = createClassWithModifier(BASE_CLASS, align);
</script>

<svelte:element
	this={element}
	class={cn(BASE_CLASS, classSize, classColor, classWeight, classAlign, className)}
>
	<slot />
</svelte:element>

<style lang="scss">
	@import '@styles/colors.scss';
	@import '@styles/font-sizes.scss';

	.typography {
		margin: 0;

		// Aligns
		&_left {
			text-align: start;
		}

		&_center {
			text-align: center;
		}

		&_right {
			text-align: end;
		}

		// Sizes
		&_MD {
			font-size: $fontSizeMD;
		}

		&_2MD {
			font-size: $fontSize2MD;
		}

		&_XL {
			font-size: $fontSizeXL;
		}

		&_X2L {
			font-size: $fontSizeX2L;
		}

		&_2XL {
			font-size: $fontSize2XL;
		}

		// Weights
		&_light {
			font-weight: 300;
		}

		&_regular {
			font-weight: 400;
		}

		&_medium {
			font-weight: 500;
		}

		&_bold {
			font-weight: 700;
		}

		// Colors
		&_gray {
			color: $gray;
		}

		&_white {
			color: $white;
		}

		&_black {
			color: $black;
		}
	}
</style>
