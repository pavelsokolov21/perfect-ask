<script lang="ts">
	export let placeholder: string = 'Введите текст';
	export let value: string = '';
</script>

<input class="input" {placeholder} bind:value />

<style lang="scss">
	@import '@styles/colors.scss';

	.input {
		padding: 18px 8px;
		border: 1px solid $lightGray;
		border-radius: 10px;
		box-sizing: border-box;
		font-size: 24px;
		font-weight: 500;
		color: $primary;
		outline: none;
		transition: all 0.2s ease;

		&:focus {
			border-color: $primary;
			filter: drop-shadow(2px 6px 10px $primary);
		}

		&::placeholder {
			color: $lightGray;
		}
	}
</style>
