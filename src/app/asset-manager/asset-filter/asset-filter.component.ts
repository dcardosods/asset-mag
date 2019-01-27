import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-asset-filter',
  templateUrl: './asset-filter.component.html',
  styleUrls: ['./asset-filter.component.css'],
})
export class AssetFilterComponent implements OnInit {
  @Input() filterBy: string;
  @Input() filterOptions: string[];
  @Output() filtered = new EventEmitter<object>();

  currentFilter = '';

  constructor() {}

  ngOnInit() {}

  onFilter(currentFilter: string) {
    const filter = {};
    if (currentFilter) {
      filter[this.filterBy] = currentFilter;
    }
    this.filtered.emit(filter);
  }
}
