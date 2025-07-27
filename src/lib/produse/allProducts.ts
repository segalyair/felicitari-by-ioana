import * as fs from 'fs';

export async function getProducts() {
	const productFolders = fs
		.readdirSync('src/lib/produse', { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.map((entry) => entry.name);
	const allImages = import.meta.glob<string>('$lib/produse/**/*.{jpg,jpeg,png}', {
		query: '?w=500&format=webp',
		eager: true,
		import: 'default'
	});

	const result = [];
	const imageKeys = Object.keys(allImages);
	for (const product of productFolders) {
		const foundThumbnailKey = imageKeys.find((k) => k.includes(`${product}-1`));
		result.push({
			content: (await import(`$lib/produse/${product}/data.json`)).default,
			thumbnail: foundThumbnailKey ? { [foundThumbnailKey]: allImages[foundThumbnailKey] } : null
		});
	}

	return result;
}
