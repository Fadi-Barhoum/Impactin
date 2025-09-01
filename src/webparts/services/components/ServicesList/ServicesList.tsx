import * as React from 'react';
import { 
    DetailsList, 
    IColumn, 
    SelectionMode
} from 'office-ui-fabric-react/lib/DetailsList';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';
import { IServiceItem } from '../../models/IServiceModels';
import styles from './ServicesList.module.scss';

export interface IServicesListProps {
    services: IServiceItem[];
    showFeeColumn: boolean;
    loading?: boolean;
}

export const ServicesList = (props: IServicesListProps): JSX.Element => {
    const { services, showFeeColumn, loading = false } = props;

    const formatDate = (dateString: string): string => {
        return new Date(dateString).toLocaleDateString();
    };

    const columns: IColumn[] = [
        {
            key: 'title',
            name: 'Service Title',
            fieldName: 'title',
            minWidth: 200,
            maxWidth: 300,
            isResizable: true,
            onRender: (item: IServiceItem) => (
                <div className={styles.titleCell}>
                    <Link 
                        href={item.links.applyUrl} 
                        target="_blank" 
                        className={styles.serviceTitle}
                    >
                        {item.title}
                    </Link>
                    <div className={styles.serviceTags}>
                        {item.tags.map((tag, index) => (
                            <span key={index} className={styles.tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )
        },
        {
            key: 'category',
            name: 'Category',
            fieldName: 'categoryName',
            minWidth: 120,
            maxWidth: 180,
            isResizable: true
        },
        {
            key: 'ownerDept',
            name: 'Owner Dept',
            fieldName: 'ownerDept',
            minWidth: 100,
            maxWidth: 150,
            isResizable: true
        },
        {
            key: 'sla',
            name: 'SLA (days)',
            fieldName: 'slaTargetDays',
            minWidth: 80,
            maxWidth: 100,
            isResizable: true,
            onRender: (item: IServiceItem) => (
                <span className={styles.slaValue}>
                    {item.slaTargetDays}
                </span>
            )
        },
        ...(showFeeColumn ? [{
            key: 'fee',
            name: 'Fee (AED)',
            fieldName: 'feeAED',
            minWidth: 90,
            maxWidth: 120,
            isResizable: true,
            onRender: (item: IServiceItem) => (
                <span className={styles.feeValue}>
                    {item.feeAED === 0 ? 'Free' : `${item.feeAED} AED`}
                </span>
            )
        }] : []),
        {
            key: 'channel',
            name: 'Channel',
            fieldName: 'channel',
            minWidth: 80,
            maxWidth: 120,
            isResizable: true,
            onRender: (item: IServiceItem) => (
                <TooltipHost content={item.channel}>
                    <div className={styles.channelCell}>
                        <span className={styles.channelText}>{item.channel}</span>
                    </div>
                </TooltipHost>
            )
        },
        {
            key: 'status',
            name: 'Status',
            fieldName: 'status',
            minWidth: 80,
            maxWidth: 100,
            isResizable: true,
            onRender: (item: IServiceItem) => (
                <TooltipHost content={item.status}>
                    <div className={styles.statusCell}>
                        <span className={styles.statusText}>{item.status}</span>
                    </div>
                </TooltipHost>
            )
        },
        {
            key: 'updated',
            name: 'Updated',
            fieldName: 'updated',
            minWidth: 100,
            maxWidth: 120,
            isResizable: true,
            onRender: (item: IServiceItem) => (
                <span className={styles.dateValue}>
                    {formatDate(item.updated)}
                </span>
            )
        }
    ];

    if (loading) {
        return (
            <div className={styles.loadingContainer}>
                <Icon iconName="Sync" className={styles.loadingSpinner} />
                <span>Loading services...</span>
            </div>
        );
    }

    if (services.length === 0) {
        return (
            <MessageBar messageBarType={MessageBarType.info} className={styles.emptyState}>
                No services found matching your criteria. Try adjusting your search or category filter.
            </MessageBar>
        );
    }

    return (
        <div className={styles.servicesList}>
            <DetailsList
                items={services}
                columns={columns}
                selectionMode={SelectionMode.none}
                setKey="services"
                layoutMode={1} 
                isHeaderVisible={true}
                className={styles.detailsList}
            />
        </div>
    );
};