<script lang="ts">
	import Logo from '$lib/logo.png?w=256&imagetools';
	import { resolve } from '$app/paths';
</script>

<header>
	<nav class="nav">
		<sl-button variant="text" size="large" href={resolve('/produse')}>Produse</sl-button>
		<sl-button variant="text" href={resolve('/')}>
			<img src={Logo} width="200" height="200" alt="Felicitări by Ioana logo" />
		</sl-button>
		<sl-button variant="text" size="large" href={resolve('/contact')}>Contact</sl-button>
	</nav>
</header>

<main>
	<slot />
</main>

<footer></footer>

<style>
	.nav {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}
</style>
