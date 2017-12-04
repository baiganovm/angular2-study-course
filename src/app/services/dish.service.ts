import {Injectable} from '@angular/core';
import {Dish} from '../shared/dish';
import {Restangular} from 'ngx-restangular';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DishService {

  constructor(private restangular: Restangular) {
  }

  getDishes(): Observable<Dish[]> {
    return this.restangular.all('dishes').getList();
  }

  getDish(id: number): Observable<Dish> {
    return this.restangular.one('dishes', id).get();
  }

  getFeaturedDish(): Observable<Dish> {
    return this.restangular.all('dishes').getList({featured: true})
      .map(dishes => dishes[0]);
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes()
      .map(dishes => dishes.map(dish => dish.id))
      .catch(error => Observable.of(error));
  }

}
