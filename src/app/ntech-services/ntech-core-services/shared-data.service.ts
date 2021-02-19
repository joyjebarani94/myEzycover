import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NtechSharedModel } from 'src/app/ntech-models/ntech-shared.model';

@Injectable({ providedIn: 'root' })
export class SharedDataService 
{
    /** Map With all the Shared Common Object**/
    private commonMap = new BehaviorSubject<any>( {} );
    /** Commmon Observable to get New Map or Update the map**/
    getData = this.commonMap.asObservable();

    setData( change: NtechSharedModel ) {
        this.commonMap.next( change );
    }

    clearData()
    {
        this.commonMap.next(null);
    }
}