import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav;

  title = 'app';
  isPopState = false;

  close() {
    this.sidenav.close();
  }

  constructor(
    private router: Router,
    private analytics: Angulartics2GoogleAnalytics,
    private locStrat: LocationStrategy) {
  }

  /**
   * Solution from https://github.com/angular/angular/issues/7791
   */
  private scrollOnRouteChange() {
    this.locStrat.onPopState(() => {
      this.isPopState = true;
    });

    this.router.events.subscribe(event => {
      // Scroll to top if accessing a page, not via browser history stack
      if (event instanceof NavigationEnd && !this.isPopState) {
        window.scrollTo(0, 0);
        this.isPopState = false;
      }

      // Ensures that isPopState is reset
      if (event instanceof NavigationEnd) {
        this.isPopState = false;
      }
    });
  }

  ngOnInit(): void {
    this.scrollOnRouteChange();
  }
}
