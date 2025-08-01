export async function getProductDataById(id: string | undefined) {
	switch (id) {
		case 'fata-pe-leagan':
			return {
				content: (await import('$lib/produse/' + 'fata-pe-leagan' + '/data.json')).default,
				images: import.meta.glob<string>(
					'$lib/produse/' + 'fata-pe-leagan' + '/poze/*.{jpg,jpeg,png}',
					{
						query: '?w=500&format=webp',
						eager: true,
						import: 'default'
					}
				)
			};

		default:
			return null;
	}
}
