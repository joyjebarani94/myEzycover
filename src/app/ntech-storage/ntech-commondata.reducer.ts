import { NtechCommonDataModel } from 'src/app/ntech-storage/ntech-commondata.model'
import * as NtechCommonDataAction from 'src/app/ntech-storage/ntech-commondata.action'

export function reducer(state: NtechCommonDataModel = null, action: NtechCommonDataAction.Actions) {
    switch (action.type) {
        case NtechCommonDataAction.ADD_COMMONDATA:
            return action.ntechcommondata;
        case NtechCommonDataAction.REMOVE_COMMONDATA:
            {
                state = undefined;
                return state;
            }

        default:
            return state;
    }
}