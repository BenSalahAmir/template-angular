import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-admin',
  templateUrl: './side-admin.component.html',
  styleUrls: ['./side-admin.component.css']
})
export class SideAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
          // Maintain Scroll Position
          if (typeof localStorage !== 'undefined') {
              if (localStorage.getItem('sidebar-left-position') !== null) {
                  var initialPosition = localStorage.getItem('sidebar-left-position'),
                      sidebarLeft:any = document.querySelector('#sidebar-left .nano-content');
                    
                      sidebarLeft.scrollTop = initialPosition;
              }
          }
  }

}
