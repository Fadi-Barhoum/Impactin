import * as React from 'react';
import { Component } from 'react';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { ICategory } from '../../models/IServiceModels';
import styles from './FilterBar.module.scss';

export interface IFilterBarProps {
    categories: ICategory[];
    selectedCategoryId: string;
    searchQuery: string;
    onCategoryChange: (categoryId: string) => void;
    onSearchChange: (query: string) => void;
}

export const FilterBar = (props: IFilterBarProps): JSX.Element => {
    const {
        categories,
        selectedCategoryId,
        searchQuery,
        onCategoryChange,
        onSearchChange
    } = props;
    const categoryOptions: IDropdownOption[] = [
        { key: 'all', text: 'All Categories' },
        ...categories.map(cat => ({ key: cat.id, text: `${cat.name} (${cat.count})` }))
    ];

    const handleCategoryChange = (option?: IDropdownOption): void => {
        if (option) {
            onCategoryChange(option.key as string);
        }
    };

    const handleSearchChange = (newValue?: string): void => {
        onSearchChange(newValue || '');
    };

    return (
        <div className={styles.filterBar}>
            <div className={styles.filterSection}>
                <Dropdown
                    label="Category"
                    options={categoryOptions}
                    selectedKey={selectedCategoryId || 'all'}
                    onChanged={handleCategoryChange}
                    className={styles.categoryDropdown}
                />
            </div>
            <div className={styles.searchSection}>
                <SearchBox
                    value={searchQuery}
                    onChanged={handleSearchChange}
                    className={styles.searchBox}
                />
            </div>
        </div>
    );
};