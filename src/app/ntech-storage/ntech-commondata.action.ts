import { Action } from '@ngrx/store'
import { NtechCommonDataModel } from './ntech-commondata.model';

export const ADD_COMMONDATA = 'Add'
export const REMOVE_COMMONDATA = 'Remove'

export class AddNtechCommonData implements Action {
    readonly type = ADD_COMMONDATA;
    constructor(public ntechcommondata : NtechCommonDataModel){
    }
}

export class RemoveNtechCommonData implements Action {
    readonly type = REMOVE_COMMONDATA;
    constructor(){
    }
}

export type Actions = AddNtechCommonData | RemoveNtechCommonData