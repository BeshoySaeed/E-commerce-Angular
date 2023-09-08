import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservService {
  private behaviorS = new BehaviorSubject<number>(0);
  constructor() {}

  getObs() {
    return this.behaviorS.asObservable();
  }

  setObs(number: number) {
    return this.behaviorS.next(number);
  }
}
