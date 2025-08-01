import * as fs from 'fs';
function generateCase(folder: string) {
	return `case '${folder}':
			return {
				content: (
					await import(
						'$lib/produse/' +
							'${folder}' +
							'/data.json'
					)
				).default,
				images: import.meta.glob<string>(
					'$lib/produse/' +
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
const productFolders = fs
	.readdirSync('src/lib/produse', { withFileTypes: true })
	.filter((entry) => entry.isDirectory())
	.map((entry) => entry.name);
const func = `export async function getProductDataById(id: string | undefined) {
	switch (id) {
		${productFolders.map((folder) => generateCase(folder)).join('')}
		default:
			return null;
	}
}
`;

fs.writeFileSync('src/lib/produse/byProductId.ts', func);
