
declare interface IServicesWebPartStrings {
    PropertyPaneDescription: string;
    BasicGroupName: string;
    PageSizeFieldLabel: string;
    DefaultSearchFieldLabel: string;
    ShowFeeColumnFieldLabel: string;
    DefaultCategoryFieldLabel: string;
    AppLocalEnvironmentSharePoint: string;
    AppLocalEnvironmentTeams: string;
    AppLocalEnvironmentOffice: string;
    AppLocalEnvironmentOutlook: string;
    AppSharePointEnvironment: string;
    AppTeamsEnvironment: string;
    AppOfficeEnvironment: string;
    AppOutlookEnvironment: string;
}

declare module 'ServicesWebPartStrings' {
    const strings: IServicesWebPartStrings;
    export = strings;
}

define([], function() {
    return {
        "PropertyPaneDescription": "Configure the Services Web Part settings",
        "BasicGroupName": "Display Settings",
        "PageSizeFieldLabel": "Items per page",
        "DefaultSearchFieldLabel": "Default search field",
        "ShowFeeColumnFieldLabel": "Show fee column",
        "DefaultCategoryFieldLabel": "Default category",
        "AppLocalEnvironmentSharePoint": "The app is running on your local environment as SharePoint web part",
        "AppLocalEnvironmentTeams": "The app is running on your local environment as Microsoft Teams app",
        "AppLocalEnvironmentOffice": "The app is running on your local environment in office.com",
        "AppLocalEnvironmentOutlook": "The app is running on your local environment in Outlook",
        "AppSharePointEnvironment": "The app is running on SharePoint page",
        "AppTeamsEnvironment": "The app is running in Microsoft Teams",
        "AppOfficeEnvironment": "The app is running in office.com",
        "AppOutlookEnvironment": "The app is running in Outlook"
    }
});