<script lang="ts">
	import { resolve } from '$app/paths';

	export let data;
</script>

{#each data.products as product}
	<a href={resolve(`/produse/${product.content.id}`)} class="card">
		<p class="title">{product.content.title}</p>
		{#if product.thumbnail}<img
				class="image"
				src={Object.values(product.thumbnail)[0]}
				alt="O poza"
			/>
		{/if}
	</a>
{/each}

<style>
	.card {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.card .title {
		font-size: 24px;
		margin-bottom: 16px;
	}
	.image {
		max-height: 500px;
	}
</style>
