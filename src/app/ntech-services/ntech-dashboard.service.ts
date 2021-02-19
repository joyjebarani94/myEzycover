import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SharedDataService } from './ntech-core-services/shared-data.service';

@Injectable()
export class NtechDashboardService
{

  constructor(private http: HttpClient, private shareDate: SharedDataService) {
  }

  saveOrganization(data :any){
    return this.http.post(environment.backendUrl+'ntechcore/saveorganization',{"ntech_request": data  });
  }
}