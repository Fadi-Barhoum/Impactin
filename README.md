# Services Web Part

A SharePoint Framework (SPFx) web part that displays services with filtering, search, and pagination.

## Objective

Build a SharePoint Framework (SPFx) Web Part (React + TypeScript) that lists services grouped by categories with:

- Category filter  
- Search (title/tags)  
- Client-side pagination  
- Property Pane controls  

## What to Build

### 1. Data
- Load from the provided JSON (contains categories + services).  
- Each item includes:  
  - `title`  
  - `categoryName`  
  - `ownerDept`  
  - `slaTargetDays`  
  - `feeAED`  
  - `channel`  
  - `status`  
  - `tags`  
  - `links`  

### 2. UI
- Category selector (All + specific category).  
- List/table with recommended columns:  
  - Service Title  
  - Category  
  - Owner Dept  
  - SLA (days)  
  - Fee (AED)  
  - Channel  
  - Status  
  - Updated  
- Search (by title and tags) with debounce.  
- Pagination (configurable page size).  
- Empty states (“No services found”).  

### 3. Property Pane
- `pageSize` (5/10/20).  
- `defaultSearchField` (“title” or “tags”).  
- `showFeeColumn` (toggle).  
- `defaultCategoryId`.  

### 4. Code Quality
- TypeScript interfaces for **Category** and **ServiceItem**.  
- Split components (`FilterBar`, `ServicesList`, `Pager`).  
- No lint errors.  

---

## Prerequisites

- **Node.js**: v10.24.1  
- **Yeoman**: v3.1.1 (`npm install -g yo@3.1.1`)  
- **SharePoint Generator**: v1.12.1 (`npm install -g @microsoft/generator-sharepoint@1.12.1`)  
- **React**: 16.8.5 (included in SPFx 1.12.1)  
- **Gulp CLI**: v2.3.0  

## Setup

1. **Clone/Download** the project  
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure serve.json** for HTTP (no HTTPS):
   ```json
   {
     "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/serve.schema.json",
     "port": 4321,
     "https": false,
     "initialPage": "http://localhost:4321/temp/workbench.html"
   }
   ```

## Development

```bash
gulp clean
gulp build
gulp bundle
gulp serve
```

Open: `http://localhost:4321/temp/workbench.html`

## Features

- Category filtering with dropdown  
- Search by title/tags with debounce  
- Client-side pagination (5/10/20 items)  
- Property pane controls for customization  
- Responsive design  

## Technology

- SPFx 1.12.1  
- React 16.8.5 (Class Components)  
- TypeScript (ES5 target)  
