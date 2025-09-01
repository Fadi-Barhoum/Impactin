import * as React from 'react';
import { IServicesProps } from './IServicesProps';
import { FilterBar } from './FilterBar/FilterBar';
import { ServicesList } from './ServicesList/ServicesList';
import { Pager } from './Pager/Pager';
import { servicesData } from '../data/servicesData';
import { IServiceItem } from '../models/IServiceModels';
import styles from './Services.module.scss';

export interface IServicesState {
    selectedCategoryId: string;
    searchQuery: string;
    debouncedSearchQuery: string;
    loading: boolean;
    currentPage: number;
    filteredServices: IServiceItem[];
    paginatedServices: IServiceItem[];
    totalPages: number;
    totalFilteredItems: number;
}

export class Services extends React.Component<IServicesProps, IServicesState> {
    private searchTimeout: any;

    constructor(props: IServicesProps) {
        super(props);
        
        this.state = {
            selectedCategoryId: props.defaultCategoryId || 'all',
            searchQuery: '',
            debouncedSearchQuery: '',
            loading: true,
            currentPage: 1,
            filteredServices: [],
            paginatedServices: [],
            totalPages: 0,
            totalFilteredItems: 0
        };
    }

    public componentDidMount(): void {
        this.updateFilteredServices();
        setTimeout(() => {
            this.setState((prevState) => ({
                ...prevState,
                loading: false
            }));
        }, 500);
    }

    public componentDidUpdate(prevProps: IServicesProps, prevState: IServicesState): void {
        const stateChanged = (
            prevState.selectedCategoryId !== this.state.selectedCategoryId ||
            prevState.debouncedSearchQuery !== this.state.debouncedSearchQuery ||
            prevState.currentPage !== this.state.currentPage
        );

        const propChanged = prevProps.defaultCategoryId !== this.props.defaultCategoryId;

        if (propChanged) {
            this.setState((prevState) => ({
                ...prevState,
                selectedCategoryId: this.props.defaultCategoryId || 'all'
            }));
        }

        if (stateChanged) {
            this.updateFilteredServices();
        }

        if (prevState.selectedCategoryId !== this.state.selectedCategoryId ||
                prevState.debouncedSearchQuery !== this.state.debouncedSearchQuery) {
            this.setState((prevState) => ({
                ...prevState,
                currentPage: 1
            }));
        }
    }

    private getCategoryName = (categoryId: string): string => {
        for (let i = 0; i < servicesData.categories.length; i++) {
            if (servicesData.categories[i].id === categoryId) {
                return servicesData.categories[i].name;
            }
        }
        return '';
    }

    private updateFilteredServices = (): void => {
        let filtered = [...servicesData.items];

        if (this.state.selectedCategoryId && this.state.selectedCategoryId !== 'all') {
            filtered = filtered.filter(service => service.categoryId === this.state.selectedCategoryId);
        }

        if (this.state.debouncedSearchQuery.trim()) {
            const query = this.state.debouncedSearchQuery.toLowerCase().trim();
            filtered = filtered.filter(service => {
                if (this.props.defaultSearchField === 'title') {
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

        const totalPages = Math.ceil(filtered.length / this.props.pageSize);
        const startIndex = (this.state.currentPage - 1) * this.props.pageSize;
        const endIndex = startIndex + this.props.pageSize;
        const paginatedServices = filtered.slice(startIndex, endIndex);

        this.setState((prevState) => ({
            ...prevState,
            filteredServices: filtered,
            paginatedServices,
            totalPages,
            totalFilteredItems: filtered.length
        }));
    }

    private handleCategoryChange = (categoryId: string): void => {
        this.setState((prevState) => ({ 
            ...prevState,
            selectedCategoryId: categoryId,
            loading: true
        }));
        
        setTimeout(() => {
            this.setState((prevState) => ({
                ...prevState,
                loading: false
            }));
        }, 500);
    }

    private handleSearchChange = (query: string): void => {
        this.setState((prevState) => ({
            ...prevState,
            searchQuery: query
        }));
        
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        
        this.searchTimeout = setTimeout(() => {
            this.setState((prevState) => ({ 
                ...prevState,
                debouncedSearchQuery: query,
                loading: true
            }));
            
            setTimeout(() => {
                this.setState((prevState) => ({
                    ...prevState,
                    loading: false
                }));
            }, 300);
        }, 300);
    }

    private handlePageChange = (page: number): void => {
        this.setState((prevState) => ({
            ...prevState,
            currentPage: page
        }));
    }

    public render(): JSX.Element {
        const {
            selectedCategoryId,
            searchQuery,
            loading,
            paginatedServices,
            totalPages,
            totalFilteredItems,
            currentPage,
            debouncedSearchQuery
        } = this.state;

        return (
            <div className={styles.services}>
                <div className={styles.container}>
                    {/* Header */}
                    <div className={styles.header}>
                        <h1 className={styles.title}>
                            Government Services
                        </h1>
                        <p className={styles.subtitle}>
                            Browse and access government services by category
                        </p>
                    </div>

                    {/* Filter Bar */}
                    <FilterBar
                        categories={servicesData.categories}
                        selectedCategoryId={selectedCategoryId}
                        searchQuery={searchQuery}
                        onCategoryChange={this.handleCategoryChange}
                        onSearchChange={this.handleSearchChange}
                    />

                    {/* Results Summary */}
                    {!loading && (
                        <div className={styles.resultsSummary}>
                            <span>
                                {totalFilteredItems === 0 
                                    ? 'No services found'
                                    : totalFilteredItems === 1
                                    ? '1 service found'
                                    : `${totalFilteredItems} services found`
                                }
                                {selectedCategoryId && selectedCategoryId !== 'all' && (
                                    <span className={styles.categoryFilter}>
                                        {' '}in {this.getCategoryName(selectedCategoryId)}
                                    </span>
                                )}
                                {debouncedSearchQuery && (
                                    <span className={styles.searchFilter}>
                                        {' '}matching "{debouncedSearchQuery}" in {this.props.defaultSearchField}
                                    </span>
                                )}
                            </span>
                        </div>
                    )}

                    {/* Services List */}
                    <ServicesList
                        services={paginatedServices}
                        showFeeColumn={this.props.showFeeColumn}
                        loading={loading}
                    />

                    {/* Pagination */}
                    {!loading && totalPages > 1 && (
                        <Pager
                            currentPage={currentPage}
                            totalPages={totalPages}
                            totalItems={totalFilteredItems}
                            pageSize={this.props.pageSize}
                            onPageChange={this.handlePageChange}
                        />
                    )}
                </div>
            </div>
        );
    }
}