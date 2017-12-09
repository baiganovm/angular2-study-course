import {Injectable} from '@angular/core';
import {Promotion} from '../shared/promotion';
import {Observable} from 'rxjs/Observable';
import {Restangular} from 'ngx-restangular';

@Injectable()
export class PromotionService {

  constructor(private restangular: Restangular) {
  }

  getPromotions(): Observable<Promotion[]> {
    return this.restangular.all('promotions').getList();
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.restangular.one('promotion', id).get();
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.restangular.all('promotions').getList({featured: true})
      .map(promotions => promotions[0]);
  }
}
