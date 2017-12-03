import {Injectable} from '@angular/core';
import {LEADERS} from '../shared/leaders';
import {Leader} from '../shared/leader';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LeaderService {

  constructor() {
  }

  getLeaders(): Observable<Leader[]> {
    return Observable.of(LEADERS).delay(2000);
  }

  getLeader(id: number): Observable<Leader> {
    return Observable.of(LEADERS.filter((leader) => (leader.id === id))[0]).delay(2000);
  }

  getFeaturedLeader(): Observable<Leader> {
    return Observable.of(LEADERS.filter((leader) => leader.featured)[0]).delay(2000);
  }

}
