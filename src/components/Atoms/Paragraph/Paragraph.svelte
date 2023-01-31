<script lang="ts">
	import cn from 'classnames';

	import { createClassWithModifier } from '@utils/createClassWithModifier';
	import type { Colors, Sizes, Weight } from './ParagraphInterfaces';
	import { BASE_CLASS } from './ParagraphConstants';

	export let size: Sizes = 'MD';
	export let color: Colors = 'gray';
	export let weight: Weight = 'regular';
	export let className: string = '';

	const classSize = createClassWithModifier(BASE_CLASS, size);
	const classColor = createClassWithModifier(BASE_CLASS, color);
	const classWeight = createClassWithModifier(BASE_CLASS, weight);
</script>

<p class={cn('paragraph', classSize, classColor, classWeight, className)}>
	<slot />
</p>

<style lang="scss">
	@import '@styles/colors.scss';
	@import '@styles/font-sizes.scss';

	.paragraph {
		margin: 0;

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
