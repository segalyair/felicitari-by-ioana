import * as fs from 'fs';
function generateCase(folder: string) {
	return `case '${folder}':
			return {
				content: (
					await import(
						'$lib/produse/' +
							// replace with folder name
							'${folder}' +
							'/data.json'
					)
				).default,
				images: import.meta.glob<string>(
					'$lib/produse/' +
						// replace with folder name
						'${folder}' +
						'/poze/*.{jpg,jpeg,png}',
					{
						query: '?w=500&format=webp',
						eager: true,
						import: 'default'
					}
				)
			};
`;
}
const productFolders = fs.readdirSync('src/lib/produse');
const func = `export async function getProductData(id: string | undefined) {
	switch (id) {
		// replace with folder name
		${productFolders.map((folder) => generateCase(folder)).join('')}
		default:
			return null;
	}
}
`;

fs.writeFileSync('src/lib/index.ts', func);
