<script lang="ts">
	import FlexContainer from '@components/Atoms/FlexContainer/FlexContainer.svelte';
	import Button from '@components/Button/Button.svelte';
	import Container from '@components/Container/Container.svelte';
	import Icon from '@components/Icons/Icon.svelte';
</script>

<header class="header">
	<Container>
		<FlexContainer justify="space-between">
			<Icon icon="Logo" />
			<FlexContainer gap="XL">
				<Button type="bordered">Создать</Button>
				<Button type="text">Шаблоны</Button>
				<Button type="text">Результаты</Button>
			</FlexContainer>
			<Button type="bordered">Войти</Button>
		</FlexContainer>
	</Container>
</header>

<style lang="scss">
	.header {
		padding: 22px 0;
	}
</style>
