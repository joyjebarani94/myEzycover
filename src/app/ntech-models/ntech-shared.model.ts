export class NtechSharedModel{
    
    private _commonMap: any;
    private _userNative: string; 
    private _userGroup: string;
    private _workFlowid: string;
    private _ntUserId: string;
    private _leadno: string; 

    public get leadno(): string {
        return this._leadno;
    }
    public set leadno(value: string) {
        this._leadno = value;
    }
    public get ntUserId(): string {
        return this._ntUserId;
    }
    public set ntUserId(value: string) {
        this._ntUserId = value;
    }
    public get workFlowid(): string {
        return this._workFlowid;
    }
    public set workFlowid(value: string) {
        this._workFlowid = value;
    }
    public get commonMap(): any {
        return this._commonMap;
    }
    public set commonMap(value: any) {
        this._commonMap = value;
    }
    public get userGroup(): string {
        return this._userGroup;
    }
    public set userGroup(value: string) {
        this._userGroup = value;
    }
    public get userNative(): string {
        return this._userNative;
    }
    public set userNative(value: string) {
        this._userNative = value;
    }
}