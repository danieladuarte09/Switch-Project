import { Component, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-side-nave',
  templateUrl: './side-nave.component.html',
  styleUrls: ['./side-nave.component.scss']
})
export class SideNaveComponent   {


  title= 'Switch'
  isSidenavOpenOnDesktop = true;
  isHandset: boolean= true;


  constructor(private breakpointObserver: BreakpointObserver) {

    // Observa cambios y actualiza el estado del sidenav
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isSidenavOpenOnDesktop = !result.matches;
    });
  }

  toggleSidenav() {
    this.isSidenavOpenOnDesktop = !this.isSidenavOpenOnDesktop;
  }
  
}


