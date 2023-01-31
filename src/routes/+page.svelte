<script lang="ts">
	import FlexRow from '@components/Atoms/FlexRow/FlexRow.svelte';
	import Button from '@components/Button/Button.svelte';
	import Container from '@components/Container/Container.svelte';
	import Icon from '@components/Icons/Icon.svelte';
</script>

<header class="header">
	<Container>
		<FlexRow justify="space-between">
			<Icon icon="Logo" />
			<FlexRow gap="XL">
				<Button type="filled">Создать</Button>
				<Button type="text">Шаблоны</Button>
				<Button type="text">Результаты</Button>
			</FlexRow>
			<Button type="bordered">Войти</Button>
		</FlexRow>
	</Container>
</header>

<style lang="scss">
	.header {
		padding: 22px 0;
	}
</style>
