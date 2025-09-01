import * as React from 'react';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import styles from './Pager.module.scss';

export interface IPagerProps {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    pageSize: number;
    onPageChange: (page: number) => void;
}

export const Pager = (props: IPagerProps): JSX.Element => {
    const {
        currentPage,
        totalPages,
        totalItems,
        pageSize,
        onPageChange
    } = props;
    const startItem = (currentPage - 1) * pageSize + 1;
    const endItem = Math.min(currentPage * pageSize, totalItems);

    const handlePrevious = (): void => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = (): void => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handleFirst = (): void => {
        onPageChange(1);
    };

    const handleLast = (): void => {
        onPageChange(totalPages);
    };

    const getPageNumbers = (): number[] => {
        const pages: number[] = [];
        const maxVisiblePages = 5;
        
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
            const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
            
            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }
        }
        
        return pages;
    };

    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className={styles.pager}>
            <div className={styles.pagerContent}>
                <div className={styles.info}>
                    <span>
                        Showing {startItem}-{endItem} of {totalItems} services
                    </span>
                </div>
                
                <div className={styles.controls}>
                    <IconButton
                        iconProps={{ iconName: 'DoubleChevronLeft' }}
                        onClick={handleFirst}
                        disabled={currentPage === 1}
                        title="First page"
                    />
                    
                    <IconButton
                        iconProps={{ iconName: 'ChevronLeft' }}
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        title="Previous page"
                    />
                    
                    {getPageNumbers().map((page) => (
                        page === currentPage ? (
                            <PrimaryButton
                                key={page}
                                text={page.toString()}
                                className={styles.pageButton}
                            />
                        ) : (
                            <DefaultButton
                                key={page}
                                text={page.toString()}
                                onClick={() => onPageChange(page)}
                                className={styles.pageButton}
                            />
                        )
                    ))}
                    
                    <IconButton
                        iconProps={{ iconName: 'ChevronRight' }}
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        title="Next page"
                    />
                    
                    <IconButton
                        iconProps={{ iconName: 'DoubleChevronRight' }}
                        onClick={handleLast}
                        disabled={currentPage === totalPages}
                        title="Last page"
                    />
                </div>
            </div>
        </div>
    );
};