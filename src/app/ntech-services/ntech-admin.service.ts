import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SharedDataService } from './ntech-core-services/shared-data.service';
import { NtechSharedModel } from '../ntech-models/ntech-shared.model';

@Injectable()
export class NtechAdminService {

  constructor(private http: HttpClient, private shareDate: SharedDataService) {
  }

  saveOrganization(data: any) {
    return this.http.post(environment.backendUrl + 'ntechadmin/saveorganization', { "ntech_request": data });
  }

  getOrganizationdata(data: any) {
    return this.http.post(environment.backendUrl + 'ntechadmin/getorganization', { "ntech_request": data });
  }

  getGroupdata(data: any) {
    return this.http.post(environment.backendUrl + 'ntechadmin/getgroup', { "ntech_request": data });
  }

  saveGroup(data: any) {
    return this.http.post(environment.backendUrl + 'ntechadmin/savegroup', { "ntech_request": data });
  }

  getProductdata(data: any) {
    return this.http.post(environment.backendUrl + 'ntechadmin/getproduct', { "ntech_request": data });
  }

  saveProduct(data: any) {
    return this.http.post(environment.backendUrl + 'ntechadmin/saveproduct', { "ntech_request": data });
  }
  getWorkflowdata(data: any) {
    return this.http.post(environment.backendUrl + 'ntechadmin/getworkflow', { "ntech_request": data });
  }

  saveWorkflow(data: any) {
    return this.http.post(environment.backendUrl + 'ntechadmin/saveworkflow', { "ntech_request": data });
  }
  saveUser(data: any) {
    return this.http.post(environment.backendUrl + 'ntechadmin/createuser', { "ntech_request": data });
  }
  getUser(data: any) {
    return this.http.post(environment.backendUrl + 'ntechadmin/getuser', { "ntech_request": data });
  }
  deleteUser(data: any) {
    return this.http.post(environment.backendUrl + 'ntechadmin/deleteuser', { "ntech_request": data });
  }
  getConfigOptions(data: any) {
    return this.http.post(environment.backendUrl + 'ntechadmin/getconfigvalues', { 'ntech_request': data });
  }
  saveConfigValues(data: any) {
    return this.http.post(environment.backendUrl + 'ntechadmin/saveconfigvalues', { 'ntech_request': data });
  }
  getNextuserid(data: any) {
    return this.http.post(environment.backendUrl + 'ntechadmin/getuniqueid', { "ntech_request": data });
  }
  getOrgmapping(data: any) {
    return this.http.post(environment.backendUrl + 'ntechadmin/getorgmapping', { "ntech_request": data });
  }
  getUnmaporg(data: any) {
    return this.http.post(environment.backendUrl + 'ntechadmin/getunmaporg', { "ntech_request": data });
  }
}