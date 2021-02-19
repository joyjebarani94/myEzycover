import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SharedDataService } from './ntech-core-services/shared-data.service';

@Injectable()
export class NtechAuthService
{
 
  constructor(private http: HttpClient, private shareDate: SharedDataService) {  
  }

  signin(data : any)
  {
    return this.http.post(environment.backendUrl+'ntechauth/signin',{"ntech_request": data});
  }
}