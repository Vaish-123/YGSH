import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';
import { SortableDirective, SortEvent } from './sortable.directive';

@Component({
    selector: 'app-table',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        NgbPaginationModule,
        SortableDirective
    ],
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent<T extends Record<string, any>> implements OnInit {
    @Input() data: T[] = []; // Input data array
    @Input() columns: { key: string; label: string; width: string }[] = []; // Column definitions

    private initialData: T[] = [];
    private sortState: 'asc' | 'desc' | 'reset' = 'reset';

    @ViewChildren(SortableDirective) headers?: QueryList<SortableDirective>;

    searchTerm: string = '';
    sortColumn: string = '';
    sortDirection: 'asc' | 'desc' | '' = '';
    page: number = 1;
    pageSize: number = 5;
    filteredData$ = new BehaviorSubject<T[]>([]);

    // tracks which columns are visible
    visibleColumns: { [key: string]: boolean } = {};

    darkMode: boolean = false;
    bordered: boolean = true;

    ngOnInit(): void {
        // clone initial data
        this.initialData = [...this.data];
        // initialize visibleColumns
        this.columns.forEach(col => (this.visibleColumns[col.key] = true));
        this.filterData();
    }

    onSort({ column }: SortEvent) {
        // reset other headers
        this.headers?.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });

        // cycle through sort states: reset → asc → desc → reset
        if (this.sortState === 'reset') {
            this.sortState = 'asc';
            this.sortColumn = column;
            this.sortDirection = 'asc';
        } else if (this.sortState === 'asc') {
            this.sortState = 'desc';
            this.sortDirection = 'desc';
        } else {
            this.sortState = 'reset';
            this.sortColumn = '';
            this.sortDirection = '';
            this.data = [...this.initialData];
        }

        this.filterData();
    }

    onSearch() {
        this.filterData();
    }

    onPageChange(page: number) {
        this.page = page;
        this.filterData();
    }

    filterData() {
        let filteredData = this.data;

        // 1) Search
        if (this.searchTerm) {
            const term = this.searchTerm.toLowerCase();
            filteredData = filteredData.filter((item: any) =>
                Object.values(item).some(value =>
                    String(value).toLowerCase().includes(term)
                )
            );
        }

        // 2) Sorting
        if (this.sortState !== 'reset' && this.sortColumn && this.sortDirection) {
            filteredData = [...filteredData].sort((a: any, b: any) => {
                const res = a[this.sortColumn] < b[this.sortColumn] ? -1 : 1;
                return this.sortDirection === 'asc' ? res : -res;
            });
        }

        // 3) Pagination
        const startIndex = (this.page - 1) * this.pageSize;
        const paginatedData = filteredData.slice(startIndex, startIndex + this.pageSize);

        this.filteredData$.next(paginatedData);
    }

    exportToCSV() {
        const headerLabels = this.columns.map(col => col.label);
        const rows = this.data.map((item: any) => this.columns.map(col => item[col.key]));
        const csvContent = [headerLabels, ...rows].map(r => r.join(',')).join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'table_data.csv';
        a.click();
        window.URL.revokeObjectURL(url);
    }

    toggleColumnVisibility(columnKey: string): void {
        this.visibleColumns[columnKey] = !this.visibleColumns[columnKey];
    }

    toggleDarkMode() {
        this.darkMode = !this.darkMode;
    }

    toggleTableBorder() {
        this.bordered = !this.bordered;
    }
}
