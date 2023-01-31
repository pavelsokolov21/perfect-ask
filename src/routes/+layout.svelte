<script>
	import 'normalize.css';
</script>

<slot />

<style lang="scss">
	@import '@styles/font-family.scss';

	:global(*) {
		font-family: $primaryFontFamily;
	}
</style>
