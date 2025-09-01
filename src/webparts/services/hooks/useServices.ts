import { IServiceItem, ICategory } from '../models/IServiceModels';

export const filterServices = (
    allServices: IServiceItem[],
    selectedCategoryId: string,
    searchQuery: string,
    defaultSearchField: 'title' | 'tags'
): IServiceItem[] => {
    let filtered = [...allServices];

    if (selectedCategoryId && selectedCategoryId !== 'all') {
        filtered = filtered.filter(service => service.categoryId === selectedCategoryId);
    }

    if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(service => {
            if (defaultSearchField === 'title') {
                return service.title.toLowerCase().indexOf(query) !== -1;
            } else {
                const titleMatch = service.title.toLowerCase().indexOf(query) !== -1;
                let tagMatch = false;
                for (let i = 0; i < service.tags.length; i++) {
                    if (service.tags[i].toLowerCase().indexOf(query) !== -1) {
                        tagMatch = true;
                        break;
                    }
                }
                return titleMatch || tagMatch;
            }
        });
    }

    return filtered;
};

export const paginateServices = (
    services: IServiceItem[],
    currentPage: number,
    pageSize: number
): {
    paginatedServices: IServiceItem[];
    totalPages: number;
} => {
    const totalPages = Math.ceil(services.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedServices = services.slice(startIndex, endIndex);

    return {
        paginatedServices,
        totalPages
    };
};

