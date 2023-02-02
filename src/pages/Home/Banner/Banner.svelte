<script>
	import FlexContainer from '@components/Atoms/FlexContainer/FlexContainer.svelte';
	import Typography from '@components/Atoms/Typography/Typography.svelte';
	import Button from '@components/Button/Button.svelte';
	import Container from '@components/Container/Container.svelte';
</script>

<section class="banner">
	<Container>
		<FlexContainer>
			<div>
				<Typography element="h1" size="2XL" color="white" weight="bold"
					>Создайте лучший опрос</Typography
				>
				<Typography element="h3" size="2MD" color="white" className="banner__subtitle">
					Можно гадать, но лучше узнать наверняка: но лучше опросить клиентов, коллег или
					подписчиков при помощи нашего конструктора для сбора и анализа отзывов
				</Typography>
				<Button type="bordered" color="white" size="2MD" className="banner__create-btn">
					Создать
				</Button>
			</div>
			<img class="banner__image" src="/womenSlides.svg" alt="Women slides banner" />
		</FlexContainer>
	</Container>
</section>

<style lang="scss">
	@import '@styles/colors.scss';

	$imageBottomShift: 30px;

	.banner {
		padding: 100px 0 calc(70px + $imageBottomShift) 0;
		background-color: $primary;

		:global(#{&}__subtitle) {
			margin-top: 30px;
		}

		:global(#{&}__create-btn) {
			margin-top: 100px;
		}

		&__image {
			position: relative;
			left: -60px;
			top: $imageBottomShift;
		}
	}
</style>
