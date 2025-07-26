import * as fs from 'fs';
const productFolders = fs.readdirSync('src/lib/produse');

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
const func = `
export async function getProductData(id: string | undefined) {
	switch (id) {
		// replace with folder name
		${productFolders.map((folder) => generateCase(folder)).join('')}
		default:
			return null;
	}
}
`;
fs.writeFile('src/lib/index.ts', func, (err) => console.error(err));
