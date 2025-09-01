export interface ICategory {
    id: string;
    name: string;
    count: number;
}

export interface IServiceItem {
    id: string;
    title: string;
    categoryId: string;
    categoryName: string;
    ownerDept: string;
    slaTargetDays: number;
    feeAED: number;
    channel: string;
    status: 'active' | 'beta' | 'retired';
    updated: string;
    tags: string[];
    links: {
        applyUrl: string;
        guideUrl: string;
    };
}

export interface IServiceData {
    metadata: {
        source: string;
        generatedAt: string;
        schemaVersion: string;
    };
    categories: ICategory[];
    items: IServiceItem[];
}

export interface IServicesWebPartProps {
    pageSize: number;
    defaultSearchField: 'title' | 'tags';
    showFeeColumn: boolean;
    defaultCategoryId: string;
}