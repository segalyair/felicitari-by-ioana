<script lang="ts">
	export let href: string | undefined = undefined,
		icon = { name: '', size: '24px', label: 'none' },
		outline: boolean | undefined = undefined,
		active = false,
		pill: boolean | undefined = undefined;
</script>

{#if icon.name.length > 0}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<sl-button
		{href}
		class="icon primary"
		style:--icon-size={icon.size ?? '24px'}
		data-active={active}
		data-outline={outline}
		variant="default"
		size="medium"
		aria-label={icon.label}
		circle
		on:click
	>
		<sl-icon name={icon.name}></sl-icon>
	</sl-button>
{:else}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<sl-button {href} variant="text" data-active={active} {pill} class="sl-button primary" on:click>
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
		font-size: var(--icon-size);
	}
	.icon[data-outline='true']::part(base) {
		background-color: unset;
		color: var(--primary-color);
		border: none;
	}
	.sl-button::part(base) {
		/* Set design tokens for height and border width */
		--sl-input-height-medium: 48px;
		--sl-input-border-width: 4px;
		min-width: 120px;
		/* border-radius: 32px; */
		font-size: 1.125rem;
	}
</style>
