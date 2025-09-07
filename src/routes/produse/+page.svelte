<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '$lib/components/button.svelte';

	export let data;
	const mock = [
		...data.products,
		...data.products,
		...data.products,
		...data.products,
		...data.products,
		...data.products,
		...data.products
	];
</script>

<section>
	{#each mock as product}
		<a href={resolve(`/produse/${product.content.id}`)} class="card">
			{#if product.thumbnail}
				<img class="image" src={Object.values(product.thumbnail)[0]} alt="O poza" />
			{/if}
			<div class="caption">
				<p class="title">{product.content.title}</p>
				<div class="icon-container">
					<sl-icon class="icon" name={'send-fill'}></sl-icon>
				</div>
			</div>
		</a>
	{/each}
</section>

<style>
	section {
		width: 100%;
		max-width: var(--page-max-width);
		margin: auto;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 30px;
	}
	.card {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		max-width: 400px;
		box-shadow:
			rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
			rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
		border-radius: 4px;
		transition: outline-color 100ms;
		outline-color: transparent;
	}
	.card:hover {
		outline: 2px solid var(--highlight-color);
	}
	.card:hover .icon-container {
		background-color: var(--highlight-color);
	}

	.card .caption {
		background: white;
		padding: 16px;
		width: 100%;
		max-width: 400px;
		height: 66px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 20px;
		border-bottom-right-radius: 4px;
		border-bottom-left-radius: 4px;
	}
	.image {
		max-width: 400px;
		max-height: 400px;
		aspect-ratio: 1;
		object-fit: cover;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 1px 0px;
	}
	.icon-container {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		min-width: 34px;
		min-height: 34px;
		background-color: var(--primary-color);
		border-radius: 50%;
		transition: background-color 100ms;
	}
	.icon {
		font-size: 18px;
		color: var(--text-color-light);
	}
</style>
