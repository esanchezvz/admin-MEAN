import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/services.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  constructor(public _sideBarService: SidebarService) {}

  ngOnInit() {}
}
