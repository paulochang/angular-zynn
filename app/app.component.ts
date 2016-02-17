import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { RoutesComponent} from './routes.component';
import { GeoFencesComponent} from './geofences.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
    ROUTER_PROVIDERS
    ]

})
@RouteConfig([
  {
    path: '/routes',
    name: 'Routes',
    component: RoutesComponent
  },
  {
    path: '/geofences',
    name: 'GeoFences',
    component: GeoFencesComponent
  }
])
export class AppComponent { 
    username = 'Fernando Cruz';
}
