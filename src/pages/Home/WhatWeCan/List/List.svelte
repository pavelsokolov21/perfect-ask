<script lang="ts">
	import FlexContainer from '@components/Atoms/FlexContainer/FlexContainer.svelte';
	import Typography from '@components/Atoms/Typography/Typography.svelte';
	import Icon from '@components/Icons/Icon.svelte';
	import type { Action } from '../WhatWeCanInterfaces';
	import ListItem from './ListItem.svelte';

	export let actions: Action[] = [];
</script>

<div class="list">
	<FlexContainer justify="center" className="list__items">
		{#each actions as action}
			<ListItem {...action} />
		{/each}
	</FlexContainer>
</div>

<style lang="scss">
	.list {
		padding-top: 60px;

		:global(#{&}__items) {
			gap: 70px;
		}
	}
</style>
