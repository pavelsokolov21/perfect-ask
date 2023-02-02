<script lang="ts">
	import Typography from '@components/Atoms/Typography/Typography.svelte';
	import Container from '@components/Container/Container.svelte';
	import Icon from '@components/Icons/Icon.svelte';
	import List from './List/List.svelte';
	import type { Action } from './WhatWeCanInterfaces';

	const actions: Action[] = [
		{
			icon: 'ClipFolder',
			title: 'Создать опрос',
			description: 'Создавайте опросы с помощью простого в использовании редактора анкет'
		},
		{
			icon: 'SmileFace',
			title: 'Собрать ответы',
			description: 'Собирайте и распространяйте ваши опросы.'
		},
		{
			icon: 'Pie',
			title: 'Получить результаты',
			description: 'Автоматически обрабатывайте данные опросов'
		}
	];
</script>

<section class="what-we-can">
	<Container>
		<Typography align="center" element="h2" size="X2L" color="gray" weight="medium">
			Что мы умеем?
		</Typography>
		<List {actions} />
	</Container>
</section>

<style lang="scss">
	.what-we-can {
		padding: 100px 0;
	}
</style>
