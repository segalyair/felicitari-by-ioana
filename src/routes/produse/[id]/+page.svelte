<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { ProductPageType } from '../../../types/ProductPageData';

	export let data: ProductPageType;
	emblaCarouselSvelte.globalOptions = { loop: true, align: 'center' };
</script>

{#if data}
	<section class="max-page-width">
		<h1>{data.content.title}</h1>
		<div class="embla" use:emblaCarouselSvelte>
			<div class="embla__container">
				{#each Object.values(data.images ?? {}) as image}
					<div class="slide">
						<img class="image" src={image} alt="O poza" />
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}

<style>
	h1 {
		text-align: center;
		margin: 2rem 0 4rem;
	}
	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
	}
	.slide {
		min-width: 0;
		max-height: 500px;
		flex: 0 0 500px;
		margin-left: 1rem;
		padding: 1rem;
	}
</style>
