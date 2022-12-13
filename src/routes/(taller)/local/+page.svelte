<script lang="ts">

	import theme from '$lib/storage/tema';
	import theme2 from '$lib/storage/tema'
	


	$: themeIsSummer = $theme === 'summer';
	
</script>

<!-- svelte-ignore component-name-lowercase -->
<main  >

		<h1 >SvelteKit Local Storage</h1>
<h2>{$theme}</h2>
<h2>{$theme2}</h2>
</main>