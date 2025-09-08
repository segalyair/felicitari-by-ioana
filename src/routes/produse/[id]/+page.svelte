<script lang="ts">
	type EmblaAPI = { on: (evt: string, cb: Function) => void; scrollTo: (index: number) => void };
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { ProductPageType } from '../../../types/ProductPageData';
	import Fade from 'embla-carousel-fade';

	export let data: ProductPageType;
	let images = Object.values(data?.images ?? {}).map((img) => ({ src: img, loading: true }));

	let currentSlide = 0;

	const { title, price, description, size, weight } = data?.content ?? {};
	const options = {};
	const plugins = [Fade()];
	emblaCarouselSvelte.globalOptions = {
		loop: true,
		align: 'center',
		duration: 10,
		dragFree: false
	};

	let emblaApi: EmblaAPI | undefined;
	function onInit(event: CustomEvent) {
		emblaApi = event.detail as EmblaAPI;
		emblaApi.on('slidesInView', (e: { slidesInView: () => Array<number> }) => {
			currentSlide = e.slidesInView()[0];
		});
	}
</script>

{#if data}
	<section class="max-page-width">
		<div class="embla" use:emblaCarouselSvelte={{ options, plugins }} onemblaInit={onInit}>
			<div class="embla__container">
				{#each images as image, index}
					<div class="slide">
						<div class="spinner" data-loading={image.loading && index !== 0}>
							<sl-spinner
								style="--track-width: 8px; --indicator-color: var(--primary-color); --track-color: transparent;"
							>
							</sl-spinner>
						</div>
						<img
							class="image"
							src={image.src}
							loading={index === 0 ? 'eager' : 'lazy'}
							alt="O poza"
							onload={(e) => {
								image.loading = false;
								images = [...images];
							}}
						/>
					</div>
				{/each}
			</div>
			<div class="thumbnails">
				{#each Object.values(data.carouselThumbnails ?? {}) as image, index}
					<button
						class="thumbnail-button"
						data-active={currentSlide === index}
						type="button"
						aria-label={`Dute la slide-ul ${index + 1}`}
						onclick={() => {
							emblaApi?.scrollTo(index);
						}}
					>
						<img src={image} alt={`Slide ${index + 1}`} />
					</button>
				{/each}
			</div>
		</div>
		<h1>{title}</h1>
		<article>
			<p>{price}</p>
			<p>{description}</p>
			<p>{size}</p>
			<p>{weight}</p>
		</article>
	</section>
{/if}

<style>
	section {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto 1fr;
		column-gap: 16px;
		background-color: rgba(255, 255, 255, 0.75);
		padding: 16px;
		--carousel-size: 600px;
		border-radius: 8px;
		box-shadow: var(--card-shadow);
	}
	.embla {
		width: 100%;
		max-width: var(--carousel-size);
		overflow: hidden;
		cursor: grab;
		grid-row: span 2;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
	}
	.embla:active {
		cursor: grabbing;
	}
	.embla__container {
		display: flex;
		margin-bottom: 8px;
	}

	.slide {
		position: relative;
		min-width: 0;
		max-height: var(--carousel-size);
		flex: 0 0 var(--carousel-size);
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
	}

	.spinner {
		position: absolute;
		top: 0;
		left: 0;
		font-size: 80px;
		min-width: var(--carousel-size);
		height: var(--carousel-size);
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		background-color: transparent;
		transition:
			opacity 100ms,
			background-color 100ms;
	}
	.spinner[data-loading='true'] {
		opacity: 1;
		background-color: white;
	}

	.image {
		width: 100%;
		max-width: var(--carousel-size);
		height: auto;
	}

	.thumbnails {
		display: flex;
		flex-wrap: wrap;
		gap: 0;
	}
	.thumbnail-button {
		position: relative;
		--size: 100px;
		width: var(--size);
		height: var(--size);
		background: none;
		cursor: pointer;
		margin: 0;
		padding: 0;
		border: none;
	}
	.thumbnail-button::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		box-shadow: 0;
		transition: box-shadow 100ms;
	}
	.thumbnail-button[data-active='true']::after {
		box-shadow:
			inset 6px -6px 0 color-mix(in srgb, var(--primary-color), transparent 30%),
			inset -6px 6px 0 color-mix(in srgb, var(--primary-color), transparent 30%);
	}
	.thumbnail-button img {
		max-width: var(--size);
		max-height: var(--size);
		object-fit: contain;
	}

	h1 {
		font-size: 48px;
		text-align: left;
	}
</style>
