import {Component, OnInit} from '@angular/core';
import {Group} from '../../shared/group.model';
import {GroupsService} from '../groups.service';
import {User} from '../../shared/user.model';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit {

  groups: Group[] = [];

  constructor(private grpService: GroupsService) {
  }

  ngOnInit() {
    this.grpService.groups = [];
    this.grpService.getGroups().subscribe(
      (response: any[]) => {
        for (const g of response) {
          this.grpService.addGroup(g);
          // console.log(g);
        }
      }
    );
    this.groups = this.grpService.groups;
  }

  groupSelected(index: number) {
    this.grpService.selectedIndex = index;
  }
}
