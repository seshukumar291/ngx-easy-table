import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  AsyncComponent,
  BasicComponent,
  CheckboxDefaultComponent,
  CheckboxesComponent,
  ClickEventComponent,
  CollapsedRowsComponent,
  ColTemplateComponent,
  ColumnWidthComponent,
  CustomFiltersComponent,
  CustomIntableSortComponent,
  CustomizeThemeComponent,
  CustomSortComponent,
  DynamicConfigurationComponent,
  DynamicRowComponent,
  ExportsComponent,
  FilterTemplateComponent,
  FixedWidthComponent,
  GlobalSearchComponent,
  GroupRowsComponent,
  HorizontalScrollComponent,
  LiveUpdateComponent,
  ManyTablesComponent,
  ModalComponent,
  NoResultsTemplateComponent,
  PaginationComponent,
  PaginationRangeComponent,
  PersistStateComponent,
  ResizableComponent,
  RowTemplateComponent,
  SearchComponent,
  SelectAllTemplateComponent,
  SelectCellComponent,
  SelectColComponent,
  SelectRowComponent,
  ServerPaginationComponent,
  ServerSortComponent,
  SortComponent,
  StylesComponent,
  SummaryFooterComponent,
  TemplateComponent,
  ToggleColumnComponent,
  InlineComponent,
  InlineRowComponent,
  ContextMenuComponent,
  ApiComponent,
  ApiDocComponent,
  BootstrapComponent,
  DocComponent,
  InstallationComponent,
} from './demo';

export const routes = [
  { path: '', component: BasicComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'search', component: SearchComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'server-pagination', component: ServerPaginationComponent },
  { path: 'server-sort', component: ServerSortComponent },
  { path: 'global-search', component: GlobalSearchComponent },
  { path: 'sort', component: SortComponent },
  { path: 'click-event', component: ClickEventComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'live-update', component: LiveUpdateComponent },
  { path: 'select-row', component: SelectRowComponent },
  { path: 'select-col', component: SelectColComponent },
  { path: 'select-cell', component: SelectCellComponent },
  { path: 'row-template', component: RowTemplateComponent },
  { path: 'group-rows', component: GroupRowsComponent },
  { path: 'many-tables', component: ManyTablesComponent },
  { path: 'dynamic-row', component: DynamicRowComponent },
  { path: 'custom-sort', component: CustomSortComponent },
  { path: 'collapsed-rows', component: CollapsedRowsComponent },
  { path: 'checkboxes', component: CheckboxesComponent },
  { path: 'checkbox-default', component: CheckboxDefaultComponent },
  { path: 'horizontal-scroll', component: HorizontalScrollComponent },
  { path: 'custom-filters', component: CustomFiltersComponent },
  { path: 'toggle-column', component: ToggleColumnComponent },
  { path: 'dynamic-configuration', component: DynamicConfigurationComponent },
  { path: 'exports', component: ExportsComponent },
  { path: 'resizable', component: ResizableComponent },
  { path: 'column-width', component: ColumnWidthComponent },
  { path: 'fixed-width', component: FixedWidthComponent },
  { path: 'customize-theme', component: CustomizeThemeComponent },
  { path: 'styles', component: StylesComponent },
  { path: 'col-template', component: ColTemplateComponent },
  { path: 'summary-footer', component: SummaryFooterComponent },
  { path: 'filter-template', component: FilterTemplateComponent },
  { path: 'custom-intable-sort', component: CustomIntableSortComponent },
  { path: 'persist-state', component: PersistStateComponent },
  { path: 'pagination-range', component: PaginationRangeComponent },
  { path: 'async', component: AsyncComponent },
  { path: 'select-all-template', component: SelectAllTemplateComponent },
  { path: 'no-results-template', component: NoResultsTemplateComponent },
  { path: 'inline-cell', component: InlineComponent },
  { path: 'inline-row', component: InlineRowComponent },
  { path: 'context-menu', component: ContextMenuComponent },
  { path: 'api', component: ApiComponent },
  { path: 'bootstrap', component: BootstrapComponent },
  { path: 'doc', component: DocComponent },
  { path: 'api-doc', component: ApiDocComponent },
  { path: 'installation', component: InstallationComponent },
  { path: '**', component: BasicComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
