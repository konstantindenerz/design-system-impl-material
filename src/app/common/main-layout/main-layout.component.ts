import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LogoComponent} from '../logo/logo.component';
import {NavigationComponent} from '../navigation/navigation.component';
import {TopAppBarComponent} from '../top-app-bar/top-app-bar.component';

@Component({
  selector: 'labs-main-layout',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, TopAppBarComponent, LogoComponent, MatListModule, MatBadgeModule, MatButtonModule, NavigationComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

}
