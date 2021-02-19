import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class NtechDatatableService
{
  constructor(private http: HttpClient){ 
  }

  getTabledata(api : string,data : any)
  {
      return this.http.post(environment.backendUrl+api,{"requestdata":data});
  }
}