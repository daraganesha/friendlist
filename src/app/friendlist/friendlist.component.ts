import { Component, OnInit } from '@angular/core';
import { Friend } from './friend-functions';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.scss'],
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
export class FriendlistComponent {
  friendList: Friend[] = [
    { name: 'Emille', id: 2, age: 9, hobby: 'Lesen' },
    { name: 'Aline', id: 3, age: 6, hobby: 'Malen' },
    { name: 'Edith', id: 4, age: 3, hobby: 'Singen' },
  ];
  columnsToDisplay = ['name', 'age', 'hobby'];
  open: boolean[] = [false, true, false];
  expandedElement: Friend | null;
}
