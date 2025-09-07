<script lang="ts">
	import Logo from '$lib/images/logo.png?w=400&imagetools';
	import Splash from '$lib/images/splash.png?w=150&imagetools';
	import { resolve } from '$app/paths';
	import Button from '$lib/components/button.svelte';
	import { page } from '$app/state';
</script>

<header>
	<a href={resolve('/')} aria-label="Go to homepage">
		<img class="logo" src={Logo} width="400" alt="Felicitări by Ioana logo" />
	</a>
	<nav class="nav">
		<Button href={resolve('/produse')} active={page.url.pathname.includes('/produse')}>
			Produse
		</Button>
		<div style="height:100%;width:2px;min-width:1px;background-color:white;"></div>
		<Button href={resolve('/despre-mine')} active={page.url.pathname === '/despre-mine'}>
			Despre Mine
		</Button>
		<div style="height:100%;width:2px;min-width:1px;background-color:white;"></div>
		<Button href={resolve('/contact')} active={page.url.pathname === '/contact'}>Contact</Button>
	</nav>
</header>

<main>
	<slot />
	<div class="anchor">
		<div class="main-background">
			<img class="splash" src={Splash} alt="Splash" width="150" />
		</div>
	</div>
</main>

<footer class="cardboard-bg">
	<div class="max-page-width content">
		<a href={resolve('/')} aria-label="Go to homepage">
			<img class="logo" src={Logo} width="250" alt="Felicitări by Ioana logo" />
		</a>
		<div class="socials">
			<a
				href="https://www.facebook.com/share/1JiRAMQwCc/"
				target="_blank"
				rel="nofollow"
				aria-label="Go to Facebook"
			>
				<sl-icon name={'facebook'}></sl-icon>
			</a>
			<a
				href="https://www.instagram.com/felicitari_by_ioana/"
				target="_blank"
				rel="nofollow"
				aria-label="Go to Instagram"
			>
				<sl-icon name={'instagram'}></sl-icon>
			</a>
		</div>
	</div>
</footer>

<style>
	.nav {
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		border-radius: 32px;
		height: 48px;
		overflow: hidden;
	}
	.splash {
		z-index: -1;
		position: absolute;
		top: 64px;
		right: 64px;
		opacity: 0.8;
	}
	header {
		max-width: var(--page-max-width);
		width: 100%;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
		margin-top: 32px;
	}

	main {
		position: relative;
		padding: 64px 0;
		height: 100%;
	}
	.anchor {
		position: absolute;
		top: 0;
		width: 1680px;
		height: inherit;
		pointer-events: none;
	}
	.main-background {
		position: relative;
		top: 0;
		right: 0;
		width: inherit;
		height: inherit;
		overflow: hidden;
	}

	footer {
		margin-top: 64px;
		position: relative;
		width: 100%;
		height: 120px;
		background-color: color-mix(in srgb, var(--background-color-light), transparent 20%);
		box-shadow: rgba(33, 35, 38, 0.1) 0px -15px 14px -4px;
	}
	footer .content {
		display: flex;
		align-items: center;
		height: 100%;
		color: #30343f;
	}
	footer .socials {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 16px;
		font-size: 40px;
		line-height: 1;
		width: fit-content;
		margin-left: auto;
	}
	footer .socials a {
		height: 40px;
	}
</style>
