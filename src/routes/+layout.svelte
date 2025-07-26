<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<header>
	<nav>
		<a href={resolve('/produse/fata-pe-leagan')}>Produse</a>
	</nav>
</header>

<main>
	<slot />
</main>

<footer></footer>

<style>
</style>
