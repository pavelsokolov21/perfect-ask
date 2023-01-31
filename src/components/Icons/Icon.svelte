<script lang="ts">
	import Logo from './svgs/Logo.svelte';

	const icons = {
		Logo
	} as const;

	export let icon: keyof typeof icons;
</script>

<div>
	<svelte:component this={icons[icon]} />
</div>
