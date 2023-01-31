<script lang="ts">
	export let placeholder: string = 'Введите текст';
	export let value: string = '';
</script>

<input class="input" {placeholder} bind:value />

<style lang="scss">
	@import '@styles/colors.scss';
	@import '@styles/common.scss';

	.input {
		width: 100%;
		padding: 18px 8px;
		border: 1px solid $gray;
		border-radius: $radiusLg;
		box-sizing: border-box;
		font-size: 24px;
		font-weight: 500;
		color: $primary;
		outline: none;
		transition: all $primaryTransitionTime $primaryAnimationType;

		&:focus {
			border-color: $primary;
			filter: drop-shadow(2px 6px 10px $primary);
		}

		&::placeholder {
			color: $lightGray;
		}
	}
</style>
