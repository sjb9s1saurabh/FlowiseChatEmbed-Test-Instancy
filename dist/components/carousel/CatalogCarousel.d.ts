import './CatalogCarousel.css';
export type CatalogItem = {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    detailsUrl?: string;
    metadata?: Record<string, any>;
};
export declare const CatalogCarousel: (props: any) => import("solid-js").JSX.Element;
//# sourceMappingURL=CatalogCarousel.d.ts.map