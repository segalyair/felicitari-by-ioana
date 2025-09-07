<script lang="ts">
	export let href: string | undefined = undefined,
		icon = '',
		active = false,
		pill: boolean | undefined = undefined;
</script>

{#if icon.length > 0}
	<sl-button
		{href}
		class="icon primary"
		data-active={active}
		variant="default"
		size="medium"
		circle
	>
		<sl-icon name={icon}></sl-icon>
	</sl-button>
{:else}
	<sl-button {href} variant="text" data-active={active} {pill} class="sl-button primary">
		<slot />
	</sl-button>
{/if}

<style>
	.primary::part(base) {
		color: var(--text-color-light);
		background-color: var(--primary-color);
	}
	.primary[data-active='true']::part(base) {
		background-color: var(--highlight-color);
	}
	.icon::part(base) {
		font-size: 24px;
	}
	.sl-button::part(base) {
		/* Set design tokens for height and border width */
		--sl-input-height-medium: 48px;
		--sl-input-border-width: 4px;
		min-width: 120px;
		/* border-radius: 32px; */
		font-size: 1.125rem;
	}

	.sl-button.primary::part(base):focus-visible {
	}
</style>
