import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SharedDataService } from './ntech-core-services/shared-data.service';

@Injectable()
export class NtechPaymentService
{

  constructor(private http: HttpClient, private shareDate: SharedDataService) {
  }

  saveLead(data : any){
    return this.http.post(environment.backendUrl+'ntechcontract/savelead',{"ntech_request": data  });
  }

  getLeadInbox(data : any){
    return this.http.post(environment.backendUrl+'ntechcontract/getleadmail',{"ntech_request": data  });
  }
  getLead(data : any){
    return this.http.post(environment.backendUrl+'ntechcontract/getlead',{"ntech_request": data  });
  }
  saveLeadEntry(data : any){
    return this.http.post(environment.backendUrl+'ntechcontract/saveleadentry',{"ntech_request": data  });
  }
  getLeadEntry(data : any){
    return this.http.post(environment.backendUrl+'ntechcontract/getleadentry',{"ntech_request": data  });
  }
  gotonextFlow(data : any){
    return this.http.post(environment.backendUrl+'ntechcontract/gotonextflow',{"ntech_request": data  });
  }
  getLeadGroupmailbox(data : any){
    return this.http.post(environment.backendUrl+'ntechcontract/getleadgroupmail',{"ntech_request": data  });
  }
  allocateGroupmail(data : any){
    return this.http.post(environment.backendUrl+'ntechcontract/allocategroupmail',{"ntech_request": data  });
  }
  saveFollowup(data : any){
    return this.http.post(environment.backendUrl+'ntechcontract/savefollowup',{"ntech_request": data  });
  }
  getFollowup(data : any){
    return this.http.post(environment.backendUrl+'ntechcontract/allocategroupmail',{"ntech_request": data  });
  }
}