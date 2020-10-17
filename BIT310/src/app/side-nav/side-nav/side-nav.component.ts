import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd, NavigationStart  } from '@angular/router';
import { map, filter, scan } from 'rxjs/operators';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  showFiller = true;
  currentRoute: string;
  routerSubscription: any;

  constructor(private router: Router) {
    console.log(router.url);

    router.events
          .pipe(filter(event => event instanceof NavigationEnd))
          .subscribe((event: NavigationEnd) =>
           {
              this.currentRoute = event.url;
              console.log(event);
           });
  }

  ngOnInit(): void {
  }

}
