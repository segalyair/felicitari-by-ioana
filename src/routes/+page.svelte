<script lang="ts">
	import {
		Header,
		HeaderNav,
		HeaderNavItem,
		HeaderNavMenu,
		SideNav,
		SideNavItems,
		SideNavMenu,
		SideNavMenuItem,
		SideNavLink,
		SideNavDivider,
		SkipToContent,
		Content,
		Grid,
		Row,
		Column,
		HeaderSearch,
		HeaderUtilities
	} from 'carbon-components-svelte';
	import 'carbon-components-svelte/css/g10.css';

	let isSideNavOpen = false;

	const data = [
		{
			href: '/',
			text: 'Kubernetes Service',
			description:
				'Deploy secure, highly available apps in a native Kubernetes experience. IBM Cloud Kubernetes Service creates a cluster of compute hosts and deploys highly available containers.'
		},
		{
			href: '/',
			text: 'Red Hat OpenShift on IBM Cloud',
			description:
				'Deploy and secure enterprise workloads on native OpenShift with developer focused tools to run highly available apps. OpenShift clusters build on Kubernetes container orchestration that offers consistency and flexibility in operations.'
		},
		{
			href: '/',
			text: 'Container Registry',
			description:
				'Securely store container images and monitor their vulnerabilities in a private registry.'
		},
		{
			href: '/',
			text: 'Code Engine',
			description: 'Run your application, job, or container on a managed serverless platform.'
		}
	];

	let ref: HTMLInputElement | null | undefined = null;
	let active = false;
	let value = '';
	let selectedResultIndex = 0;
	let events: unknown[] = [];

	$: lowerCaseValue = value.toLowerCase();
	$: results =
		value.length > 0
			? data.filter((item) => {
					return (
						item.text.toLowerCase().includes(lowerCaseValue) ||
						item.description.includes(lowerCaseValue)
					);
				})
			: [];
</script>

<Header bind:isSideNavOpen>
	<span slot="company">
		<img src="https://picsum.photos/536/354" alt="Logo" height="40" /> Felicitari by Ioana
	</span>

	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<HeaderNav>
		<HeaderNavItem href="/" text="Link 1" />
		<HeaderNavItem href="/" text="Link 2" />
		<HeaderNavItem href="/" text="Link 3" />
		<HeaderNavMenu text="Menu">
			<HeaderNavItem href="/" text="Link 1" />
			<HeaderNavItem href="/" text="Link 2" />
			<HeaderNavItem href="/" text="Link 3" />
		</HeaderNavMenu>
		<HeaderNavItem href="/" text="Link 4" />
	</HeaderNav>
	<HeaderUtilities>
		<HeaderSearch
			bind:ref
			bind:active
			bind:value
			bind:selectedResultIndex
			placeholder="Caută produse..."
			{results}
			on:active={() => {
				events = [...events, { type: 'active' }];
			}}
			on:inactive={() => {
				events = [...events, { type: 'inactive' }];
			}}
			on:clear={() => {
				events = [...events, { type: 'clear' }];
			}}
			on:select={(e) => {
				events = [...events, { type: 'select', ...e.detail }];
			}}
		/>
	</HeaderUtilities>
</Header>

<Content>
	<h1>Welcome to Felicitări by Ioana</h1>
</Content>

<style>
	h1{
		text-align: center;
	}
	span[slot='company'] {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
	}
</style>
