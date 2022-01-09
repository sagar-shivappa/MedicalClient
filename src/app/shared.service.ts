import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private data = new BehaviorSubject('');
  currentData = this.data.asObservable();
  constructor() {}

  updateMessage(item: any) {
    this.data.next(item);
  }
}
