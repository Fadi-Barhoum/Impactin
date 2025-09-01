import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
    BaseClientSideWebPart,
    IPropertyPaneConfiguration,
    PropertyPaneDropdown,
    PropertyPaneToggle,
    IPropertyPaneDropdownOption
} from '@microsoft/sp-webpart-base';

import * as strings from 'ServicesWebPartStrings';
import { Services } from './components/Services';
import { IServicesProps } from './components/IServicesProps';
import { IServicesWebPartProps } from './models/IServiceModels';
import { servicesData } from './data/servicesData';

export default class ServicesWebPart extends BaseClientSideWebPart<IServicesWebPartProps> {

    public render(): void {
        const element: React.ReactElement<IServicesProps> = React.createElement(
            Services,
            {
                pageSize: this.properties.pageSize || 10,
                defaultSearchField: this.properties.defaultSearchField || 'title',
                showFeeColumn: this.properties.showFeeColumn !== false, 
                defaultCategoryId: this.properties.defaultCategoryId || 'all'
            }
        );

        ReactDom.render(element, this.domElement);
    }

    protected onDispose(): void {
        ReactDom.unmountComponentAtNode(this.domElement);
    }

    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
        const categoryOptions: IPropertyPaneDropdownOption[] = [
            { key: 'all', text: 'All Categories' }
        ];
        
        for (let i = 0; i < servicesData.categories.length; i++) {
            categoryOptions.push({
                key: servicesData.categories[i].id,
                text: servicesData.categories[i].name
            });
        }

        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneDropdown('pageSize', {
                                    label: strings.PageSizeFieldLabel,
                                    options: [
                                        { key: 5, text: '5' },
                                        { key: 10, text: '10' },
                                        { key: 20, text: '20' }
                                    ],
                                    selectedKey: this.properties.pageSize || 10
                                }),
                                PropertyPaneDropdown('defaultSearchField', {
                                    label: strings.DefaultSearchFieldLabel,
                                    options: [
                                        { key: 'title', text: 'Title' },
                                        { key: 'tags', text: 'Tags' }
                                    ],
                                    selectedKey: this.properties.defaultSearchField || 'title'
                                }),
                                PropertyPaneToggle('showFeeColumn', {
                                    label: strings.ShowFeeColumnFieldLabel,
                                    checked: this.properties.showFeeColumn !== false
                                }),
                                PropertyPaneDropdown('defaultCategoryId', {
                                    label: strings.DefaultCategoryFieldLabel,
                                    options: categoryOptions,
                                    selectedKey: this.properties.defaultCategoryId || 'all'
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    }
}