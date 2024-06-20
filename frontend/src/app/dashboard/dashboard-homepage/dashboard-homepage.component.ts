import { Component } from '@angular/core';
import { DashboardNavbarComponent } from '../../shared/dashboard/dashboard-navbar/dashboard-navbar.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-dashboard-homepage',
  standalone: true,
  imports: [
    DashboardNavbarComponent,
    NgOptimizedImage
  ],
  templateUrl: './dashboard-homepage.component.html',
  styleUrl: './dashboard-homepage.component.css'
})
export class DashboardHomepageComponent {
}
