import { Component, Input } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-expandable-table',
  templateUrl: './expandable-table.component.html',
  styleUrls: ['./expandable-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ExpandableTableComponent {
  @Input() dataSource;
  @Input() columnsToDisplay: string[];
  @Input() expandedElement: any;
  selectedIndex;

  handleClick(elem) {
    if (this.expandedElement === elem) {
      this.expandedElement = null;
    } else {
      this.expandedElement = elem;
    }
  }

  doClick(i) {
    console.log(i);
    this.selectedIndex = i;
  }
}
