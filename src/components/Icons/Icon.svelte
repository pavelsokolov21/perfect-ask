<script lang="ts" context="module">
	import Logo from './svgs/Logo.svelte';
	import Pie from './svgs/Pie.svelte';
	import SmileFace from './svgs/SmileFace.svelte';
	import ClipFolder from './svgs/ClipFolder.svelte';

	const icons = {
		Logo,
		Pie,
		SmileFace,
		ClipFolder
	} as const;

	export type Icons = keyof typeof icons;
</script>

<script lang="ts">
	export let icon: keyof typeof icons;
	export let className: string = '';
</script>

<div class={className}>
	<svelte:component this={icons[icon]} />
</div>
