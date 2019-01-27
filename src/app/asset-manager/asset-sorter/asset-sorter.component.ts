import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-asset-sorter',
  templateUrl: './asset-sorter.component.html',
  styleUrls: ['./asset-sorter.component.css'],
})
export class AssetSorterComponent implements OnInit {
  @Input() sortBy: string;
  @Output() sorted = new EventEmitter<object>();

  sortByLabel = '';
  direction = '';

  constructor() {}

  ngOnInit() {
    this.sortByLabel = this.sortBy;
    this.sortByLabel =
      this.sortByLabel.charAt(0).toUpperCase() + this.sortByLabel.slice(1);
  }

  toggleSort() {
    const sorter = {};
    if (this.direction === 'asc') {
      this.direction = 'desc';
    } else {
      this.direction = 'asc';
    }
    sorter['_sort'] = this.sortBy;
    sorter['_order'] = this.direction;
    console.log(sorter);
    this.sorted.emit(sorter);
  }
}
