import { Injectable }from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class HeaderService {

  subject = new Subject<any>();

  setTitle(message: string) {
    this.subject.next({ text: message });
  }

  getTitle(): Observable<string> {
    return this.subject.asObservable();
  }
}
