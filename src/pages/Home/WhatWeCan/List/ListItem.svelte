<script lang="ts">
	import Typography from '@components/Atoms/Typography/Typography.svelte';
	import Icon from '@components/Icons/Icon.svelte';
	import type { Icons } from '@components/Icons/Icon.svelte';
	import FlexContainer from '@components/Atoms/FlexContainer/FlexContainer.svelte';

	export let icon: Icons;
	export let title: string;
	export let description: string;
</script>

<div class="list-item">
	<FlexContainer
		className="list-item__container"
		direction="column"
		justify="center"
		align="center"
	>
		<Icon {icon} className="list-item__icon" />
		<div>
			<Typography align="center" element="h4" size="2MD" color="black" className="list-item__title">
				{title}
			</Typography>
			<Typography align="center" size="MD" color="gray" className="list-item__description">
				{description}
			</Typography>
		</div>
	</FlexContainer>
</div>

<style lang="scss">
	.list-item {
		:global(#{&}__container) {
			max-width: 268px;
		}

		:global(#{&}__icon) {
			display: flex;
			justify-content: center;
		}

		:global(#{&}__title) {
			margin-top: 70px;
		}

		:global(#{&}__description) {
			margin-top: 12px;
		}
	}
</style>
