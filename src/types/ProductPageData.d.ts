export type ProductPageType = {
	images: Record<string, string>;
	carouselThumbnails: Record<string, string>;
	content: {
		id: string;
		title: string;
		description: string;
		price: string;
		size: string;
		weight: string;
	};
} | null;
