import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SharedDataService } from './ntech-core-services/shared-data.service';

@Injectable()
export class NtechSetupService
{
  constructor(private http: HttpClient, private shareDate: SharedDataService) {
  }

  getNtechpages(data : any)
  {
    return this.http.post(environment.backendUrl+'ntechsetup/getpages',{"ntech_request": data  });
  }

  ntechSavepages(data: any)
  {
    return this.http.post(environment.backendUrl+'ntechcore/savepages',{"ntech_request": data  });
  }
}