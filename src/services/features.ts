import type { Feature } from "../components/feature-card/feature-card";

export const featuresData: Feature[] = [
  {
    id: "server-side-processing",
    title: "Server-Side Processing",
    description:
      "Handle massive datasets efficiently by processing data on the server with pagination, sorting, and filtering.",
    category: "data",
    complexity: "advanced",
    color: "blue",
    icon: "mdi mdi-server",
  },
  {
    id: "client-side-processing",
    title: "Client-Side Processing",
    description:
      "Fast, responsive data manipulation directly in the browser for smaller datasets with instant feedback.",
    category: "data",
    complexity: "intermediate",
    color: "yellow",
    icon: "mdi mdi-desktop-mac",
  },
  {
    id: "virtual-scrolling",
    title: "Virtual Scrolling",
    description:
      "Render only visible rows for optimal performance with datasets containing millions of records.",
    category: "performance",
    complexity: "advanced",
    color: "red",
    icon: "mdi mdi-rocket",
  },
  {
    id: "inline-editing",
    title: "Inline Editing",
    description:
      "Edit cells directly with validation, auto-save, and custom editor components for different data types.",
    category: "ui",
    complexity: "intermediate",
    color: "green",
    icon: "mdi mdi-table-edit",
  },
  {
    id: "advanced-sorting",
    title: "Advanced Sorting",
    description:
      "Multi-column sorting, custom sort functions, and data type-specific sorting algorithms.",
    category: "ui",
    complexity: "beginner",
    color: "orange",
    icon: "mdi mdi-sort",
  },
  {
    id: "pagination",
    title: "Pagination",
    description:
      "Client and server-side pagination with customizable page sizes and navigation controls.",
    category: "ui",
    complexity: "beginner",
    color: "purple",
    icon: "mdi mdi-step-forward",
  },
  {
    id: "row-selection",
    title: "Row Selection",
    description:
      "Single and multiple row selection with checkboxes, keyboard shortcuts, and bulk actions.",
    category: "ui",
    complexity: "intermediate",
    color: "green",
    icon: "mdi mdi-square",
  },
  {
    id: "drag-drop",
    title: "Drag & Drop",
    description:
      "Reorder rows and columns with drag and drop functionality, including visual feedback.",
    category: "ui",
    complexity: "advanced",
    color: "purple",
    icon: "mdi mdi-drag",
  },
  {
    id: "column-resizing",
    title: "Resizable Columns",
    description:
      "Interactive column resizing with mouse and touch support, maintaining responsive layout.",
    category: "ui",
    complexity: "intermediate",
    color: "yellow",
    icon: "mdi mdi-arrow-expand",
  },
  {
    id: "fixed-headers",
    title: "Fixed Headers & Columns",
    description:
      "Sticky headers and columns that remain visible during scrolling for better data navigation.",
    category: "ui",
    complexity: "intermediate",
    color: "red",
    icon: "mdi mdi-pin",
  },
  {
    id: "data-export",
    title: "Data Export",
    description:
      "Export table data to CSV, Excel, PDF, and JSON formats with customizable options.",
    category: "data",
    complexity: "intermediate",
    color: "blue",
    icon: "mdi mdi-download",
  },
  {
    id: "real-time-updates",
    title: "Real-Time Updates",
    description:
      "Live data synchronization with WebSocket connections and optimistic UI updates.",
    category: "data",
    complexity: "advanced",
    color: "green",
    icon: "mdi mdi-sync",
  },
  {
    id: "filtering-search",
    title: "Filtering & Search",
    description:
      "Global search, column-specific filters, range filters, and advanced query builders.",
    category: "ui",
    complexity: "intermediate",
    color: "teal",
    icon: "mdi mdi-filter",
  },
  {
    id: "bulk-operations",
    title: "Bulk Operations",
    description:
      "Perform actions on multiple selected rows including edit, delete, export, and custom operations.",
    category: "ui",
    complexity: "intermediate",
    color: "blue",
    icon: "mdi mdi-format-list-checks",
  },
  {
    id: "responsive-design",
    title: "Responsive Design",
    description:
      "Mobile-first responsive tables with column hiding, horizontal scroll, and touch gestures.",
    category: "ui",
    complexity: "intermediate",
    color: "purple",
    icon: "mdi mdi-tablet-android",
  },
  {
    id: "keyboard-navigation",
    title: "Keyboard Navigation",
    description:
      "Full keyboard accessibility with arrow keys, tab navigation, and keyboard shortcuts.",
    category: "accessibility",
    complexity: "intermediate",
    color: "gray",
    icon: "mdi mdi-keyboard",
  },
  {
    id: "data-validation",
    title: "Data Validation",
    description:
      "Client and server-side validation with custom rules, error display, and real-time feedback.",
    category: "data",
    complexity: "intermediate",
    color: "green",
    icon: "mdi mdi-check-circle-outline",
  },
  {
    id: "column-grouping",
    title: "Column Grouping",
    description:
      "Group related columns under common headers with expandable sections and nested structures.",
    category: "ui",
    complexity: "advanced",
    color: "purple",
    icon: "mdi mdi-layers",
  },
  {
    id: "row-grouping",
    title: "Row Grouping",
    description:
      "Group rows by column values with collapsible sections and aggregate calculations.",
    category: "ui",
    complexity: "advanced",
    color: "orange",
    icon: "mdi mdi-group",
  },
  {
    id: "lazy-loading",
    title: "Lazy Loading",
    description:
      "Load data progressively as user scrolls or navigates with skeleton loading states.",
    category: "performance",
    complexity: "intermediate",
    color: "orange",
    icon: "mdi mdi-group",
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization",
    description:
      "Memoization, virtualization, and efficient rendering techniques for large datasets.",
    category: "performance",
    complexity: "advanced",
    color: "red",
    icon: "mdi mdi-av-timer",
  },
  {
    id: "conditional-formatting",
    title: "Conditional Formatting",
    description:
      "Dynamic styling based on cell values, rules, and custom conditions with color coding.",
    category: "ui",
    complexity: "intermediate",
    color: "green",
    icon: "mdi mdi-palette",
  },
  {
    id: "tree-view",
    title: "Tree View",
    description:
      "Hierarchical data display with expandable nodes, parent-child relationships, and nested structures.",
    category: "ui",
    complexity: "advanced",
    color: "yellow",
    icon: "mdi mdi-sitemap",
  },
  {
    id: "custom-cell-renderers",
    title: "Custom Cell Renderers",
    description:
      "Rich content in cells including images, buttons, progress bars, and interactive components.",
    category: "ui",
    complexity: "intermediate",
    color: "blue",
    icon: "mdi mdi-view-column",
  },
  {
    id: "data-aggregation",
    title: "Data Aggregation",
    description:
      "Calculate sums, averages, counts, and custom aggregations with footer totals.",
    category: "data",
    complexity: "data",
    color: "blue",
    icon: "mdi mdi-calculator",
  },
  {
    id: "multi-select-filters",
    title: "Multi-Select Filters",
    description:
      "Dropdown filters with multiple selection options and advanced filter combinations.",
    category: "complex",
    complexity: "advanced",
    color: "green",
    icon: "mdi mdi-format-list-numbers",
  },
  {
    id: "data-import",
    title: "Data Import",
    description:
      "Import data from CSV, Excel, JSON files with validation, mapping, and error handling.",
    category: "data",
    complexity: "advanced",
    color: "green",
    icon: "mdi mdi-file-import",
  },
  {
    id: "column-pinning",
    title: "Column Pinning",
    description:
      "Pin important columns to left or right side while scrolling horizontally through data.",
    category: "complexity",
    complexity: "easy",
    color: "red",
    icon: "mdi mdi-pin",
  },
  {
    id: "contextual-menus",
    title: "Contextual Menus",
    description:
      "Right-click context menus with row and cell-specific actions and keyboard shortcuts.",
    category: "ui",
    complexity: "intermediate",
    color: "gray",
    icon: "mdi mdi-cursor-default",
  },
  {
    id: "aria-support",
    title: "ARIA Support",
    description:
      "Full screen reader support with proper ARIA labels, roles, and live regions for accessibility compliance.",
    category: "accessibility",
    complexity: "advanced",
    color: "green",
  },
  {
    id: "dynamic-data-sources",
    title: "Dynamic Data Sources",
    description:
      "Connect to multiple data sources and switch between them dynamically with automatic schema detection.",
    category: "data",
    complexity: "advanced",
    color: "purple",
  },
  {
    id: "async-data-loading",
    title: "Async Data Loading",
    description:
      "Non-blocking data loading with loading states, progress indicators, and error handling for better UX.",
    category: "data",
    complexity: "intermediate",
    color: "indigo",
  },
  {
    id: "typeahead-search",
    title: "Typeahead Search",
    description:
      "Auto-complete search with suggestions, fuzzy matching, and search result highlighting.",
    category: "ui",
    complexity: "intermediate",
    color: "blue",
  },
  {
    id: "fixed-headers-columns",
    title: "Fixed Headers/Columns",
    description:
      "Sticky headers and columns that remain visible during scrolling for better data navigation.",
    category: "ui",
    complexity: "intermediate",
    color: "red",
  },
  {
    id: "context-menus",
    title: "Context Menus",
    description:
      "Right-click context menus with customizable actions for rows, cells, and headers.",
    category: "ui",
    complexity: "intermediate",
    color: "gray",
  },
  {
    id: "drill-down-tables",
    title: "Drill-Down Tables",
    description:
      "Hierarchical data display with expandable rows and nested table structures.",
    category: "ui",
    complexity: "advanced",
    icon: "fas fa-sitemap",
    color: "indigo",
  },
  {
    id: "responsive-design",
    title: "Responsive Design",
    description:
      "Mobile-first responsive layouts with column stacking and touch-friendly interactions.",
    category: "ui",
    complexity: "intermediate",
    icon: "fas fa-mobile-alt",
    color: "green",
  },
  {
    id: "theming-styling",
    title: "Theming and Styling",
    description:
      "Customizable themes, CSS variables, and design system integration.",
    category: "ui",
    complexity: "intermediate",
    icon: "fas fa-palette",
    color: "pink",
  },
  {
    id: "complex-headers",
    title: "Complex Headers",
    description:
      "Multi-level headers, grouped columns, and header cell merging.",
    category: "ui",
    complexity: "advanced",
    icon: "fas fa-layer-group",
    color: "purple",
  },
  {
    id: "custom-renderers",
    title: "Custom Renderers",
    description:
      "Custom cell renderers for images, charts, progress bars, and interactive components.",
    category: "ui",
    complexity: "intermediate",
    icon: "fas fa-paint-brush",
    color: "orange",
  },
  {
    id: "conditional-formatting",
    title: "Conditional Formatting",
    description:
      "Dynamic styling based on cell values, data ranges, and custom rules.",
    category: "ui",
    complexity: "intermediate",
    icon: "fas fa-highlighter",
    color: "yellow",
  },
  {
    id: "resizable-columns",
    title: "Resizable Columns",
    description:
      "Drag to resize column widths with persistence and automatic adjustment.",
    category: "ui",
    complexity: "intermediate",
    icon: "fas fa-expand-arrows-alt",
    color: "blue",
  },
  {
    id: "lazy-loading",
    title: "Lazy Loading",
    description:
      "Load data on demand as users scroll or navigate to reduce initial load times.",
    category: "performance",
    complexity: "intermediate",
    icon: "fas fa-hourglass-half",
    color: "orange",
  },
  {
    id: "virtualization",
    title: "Virtualization",
    description:
      "Advanced virtualization techniques for both rows and columns in large datasets.",
    category: "performance",
    complexity: "advanced",
    icon: "fas fa-layer-group",
    color: "red",
  },
  {
    id: "cached-data",
    title: "Cached Data",
    description:
      "Intelligent caching strategies with cache invalidation and refresh mechanisms.",
    category: "performance",
    complexity: "intermediate",
    icon: "fas fa-database",
    color: "blue",
  },
  {
    id: "batch-updates",
    title: "Batch Updates",
    description:
      "Efficient batch operations for updating multiple rows with conflict resolution.",
    category: "data",
    complexity: "advanced",
    icon: "fas fa-layer-group",
    color: "purple",
  },
  {
    id: "keyboard-navigation",
    title: "Keyboard Navigation",
    description:
      "Full keyboard accessibility with arrow keys, tab navigation, and shortcuts.",
    category: "accessibility",
    complexity: "intermediate",
    icon: "fas fa-keyboard",
    color: "gray",
  },
  {
    id: "internationalization",
    title: "Internationalization (i18n)",
    description:
      "Multi-language support with locale-specific formatting and RTL text support.",
    category: "accessibility",
    complexity: "intermediate",
    icon: "fas fa-globe",
    color: "green",
  },
  {
    id: "api-callbacks",
    title: "API and Callbacks",
    description:
      "Comprehensive API with lifecycle hooks and event callbacks for customization.",
    category: "data",
    complexity: "advanced",
    icon: "fas fa-code",
    color: "blue",
  },
  {
    id: "custom-features",
    title: "Custom Features",
    description:
      "Plugin architecture for extending functionality with custom features.",
    category: "data",
    complexity: "advanced",
    icon: "fas fa-puzzle-piece",
    color: "purple",
  },
  {
    id: "third-party-integration",
    title: "Third-Party Integration",
    description: "Seamless integration with popular libraries and frameworks.",
    category: "data",
    complexity: "intermediate",
    icon: "fas fa-link",
    color: "blue",
  },
  {
    id: "column-control",
    title: "Column Control",
    description:
      "Show/hide columns, reorder columns, and save column preferences.",
    category: "ui",
    complexity: "intermediate",
    icon: "fas fa-columns",
    color: "green",
  },
  {
    id: "state-saving",
    title: "State Saving",
    description:
      "Persist table state including filters, sorting, and pagination across sessions.",
    category: "data",
    complexity: "intermediate",
    icon: "fas fa-save",
    color: "blue",
  },
  {
    id: "default-settings",
    title: "Default Settings",
    description:
      "Configurable default settings with inheritance and override mechanisms.",
    category: "data",
    complexity: "beginner",
    icon: "fas fa-cog",
    color: "gray",
  },
  {
    id: "custom-layouts",
    title: "Custom Layouts",
    description:
      "Alternative table layouts including card view, list view, and grid arrangements.",
    category: "ui",
    complexity: "intermediate",
    icon: "fas fa-th",
    color: "purple",
  },
  {
    id: "comprehensive-editing",
    title: "Comprehensive Editing",
    description:
      "Advanced editing modes including form overlays, modal editing, and bulk editing.",
    category: "ui",
    complexity: "advanced",
    icon: "fas fa-edit",
    color: "cyan",
  },
  {
    id: "master-detail-views",
    title: "Master-Detail Views",
    description:
      "Linked master-detail interfaces with synchronized selection and navigation.",
    category: "ui",
    complexity: "advanced",
    icon: "fas fa-list-alt",
    color: "indigo",
  },
  {
    id: "row-grouping",
    title: "Row Grouping",
    description:
      "Group rows by column values with collapsible groups and aggregation.",
    category: "ui",
    complexity: "advanced",
    icon: "fas fa-object-group",
    color: "orange",
  },
  {
    id: "batch-actions",
    title: "Batch Actions",
    description:
      "Perform actions on multiple selected rows with progress tracking.",
    category: "ui",
    complexity: "intermediate",
    icon: "fas fa-tasks",
    color: "green",
  },
  {
    id: "export-buttons",
    title: "Export Buttons",
    description:
      "Quick export buttons for common formats with customizable options.",
    category: "data",
    complexity: "beginner",
    icon: "fas fa-download",
    color: "blue",
  },
  {
    id: "custom-export-formats",
    title: "Custom Export Formats",
    description:
      "Support for custom export formats and transformation pipelines.",
    category: "data",
    complexity: "advanced",
    icon: "fas fa-file-export",
    color: "orange",
  },
  {
    id: "report-generation",
    title: "Report Generation",
    description:
      "Generate formatted reports with templates, charts, and print layouts.",
    category: "data",
    complexity: "advanced",
    icon: "fas fa-chart-bar",
    color: "green",
  },
  {
    id: "spreadsheet-interface",
    title: "Spreadsheet-Like Interface",
    description:
      "Excel-like interface with cell selection, copy/paste, and formula support.",
    category: "ui",
    complexity: "advanced",
    icon: "fas fa-table",
    color: "green",
  },
  {
    id: "nested-grids",
    title: "Nested Grids",
    description:
      "Hierarchical grid structures with parent-child relationships.",
    category: "ui",
    complexity: "advanced",
    icon: "fas fa-sitemap",
    color: "purple",
  },
  {
    id: "frozen-rows-columns",
    title: "Frozen Rows/Columns",
    description: "Freeze specific rows and columns in place during scrolling.",
    category: "ui",
    complexity: "intermediate",
    icon: "mdi mdi-lock",
    color: "blue",
  },
  {
    id: "custom-column-types",
    title: "Custom Column Types",
    description:
      "Define custom column types with specialized rendering and editing.",
    category: "ui",
    complexity: "advanced",
    color: "purple",
  },
  {
    id: "saved-views",
    title: "Saved Views",
    description:
      "Save and restore table configurations including filters and layout.",
    category: "data",
    complexity: "intermediate",
    color: "blue",
  },
];

export const featureDetails: Record<
  string,
  {
    overview: string;
  }
> = {
  "server-side-processing": {
    overview:
      "Server-side processing enables handling massive datasets efficiently by delegating data operations to the server. This approach is essential for applications dealing with millions of records where client-side processing would be impractical. The server handles pagination, sorting, filtering, and searching, returning only the necessary data for the current view.",
  },
  "complex-headers": {
    overview:
      "Advanced complex header system for datatables with multi-level hierarchical headers, grouped columns, collapsible sections, and comprehensive header management. Features drag-and-drop reordering, real-time resizing, column configuration, group management, and detailed analytics for optimal data organization and user experience.",
  },
  pagination: {
    overview:
      "Advanced pagination system with customizable page sizes, navigation controls, page jumping, and comprehensive statistics. Supports both client-side and server-side pagination with search integration and responsive design.",
  },
};

export default featuresData;
