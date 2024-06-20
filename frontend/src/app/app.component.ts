import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardNavbarComponent } from './shared/dashboard/dashboard-navbar/dashboard-navbar.component';
import { DashboardHomepageComponent } from './dashboard/dashboard-homepage/dashboard-homepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardNavbarComponent, DashboardHomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
