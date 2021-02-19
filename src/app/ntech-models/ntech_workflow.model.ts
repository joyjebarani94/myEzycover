import { NtechWorkflow } from './ntech_worflow';
import { NtechWorkflowPagelist } from './ntech_workflow_pagelist';

export class NtechWorkflowModel
{
    private _ntechworkflow: NtechWorkflow;
    public get ntechworkflow(): NtechWorkflow {
        return this._ntechworkflow;
    }
    public set ntechworkflow(value: NtechWorkflow) {
        this._ntechworkflow = value;
    }
    private _ntechworkflowpagelist: NtechWorkflowPagelist[];
    public get ntechworkflowpagelist(): NtechWorkflowPagelist[] {
        return this._ntechworkflowpagelist;
    }
    public set ntechworkflowpagelist(value: NtechWorkflowPagelist[]) {
        this._ntechworkflowpagelist = value;
    }

}