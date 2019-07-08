import { Component, OnInit } from '@angular/core';
import {Group} from '../shared/group.model';
import {GroupsService} from './groups.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
  providers: []
})
export class GroupsComponent implements OnInit {

  selectedGroup: Group;

  constructor(private grpService: GroupsService,
              private router: Router) { }

  ngOnInit() {
    this.grpService.groupSelected
      .subscribe(
        (g: Group) => {
          this.selectedGroup = g;
        }
      );
  }

  createClicked() {
    this.router.navigate(['groups/new']);
  }
}
