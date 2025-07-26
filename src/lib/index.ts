export async function getProductData(id: string | undefined) {
	switch (id) {
		// replace with folder name
		case 'fata-pe-leagan':
			return {
				content: (
					await import(
						'$lib/produse/' +
							// replace with folder name
							'fata-pe-leagan' +
							'/data.json'
					)
				).default,
				images: import.meta.glob<string>(
					'$lib/produse/' +
						// replace with folder name
						'fata-pe-leagan' +
						'/poze/*.{jpg,jpeg,png}',
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
