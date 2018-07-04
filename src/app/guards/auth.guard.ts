import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {

        // tslint:disable-next-line:comment-format
        //logic here
        console.log('VERIFY');
        console.log(localStorage['token']);

        if (localStorage['token'] === undefined) {
            this.router.navigate(['/login']);
        }

        if (localStorage['token'] !== 'null') {
            return true;
        } else {
            this.router.navigate(['/login']);
        }

    }
}
