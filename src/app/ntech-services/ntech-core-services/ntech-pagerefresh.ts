import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class NtechPagerefresh {
    private subject = new Subject<any>();
    
    refreshPage() {
        this.subject.next();
    }
    getRefreshstatus(): Observable<any> {
        return this.subject.asObservable();
    }
}