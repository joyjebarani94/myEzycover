import { NtechCoreComponentModule } from '../ntech-core-components/ntech-core-components/ntech-core.module';
import { NgModule } from '@angular/core';
import { Demo1 } from './demo1/demo1.component';
import { DevloperTestRoutingModule } from './devloper-test.routing.module';
import { Demo2 } from './demo2/demo2.component';

@NgModule({
    imports : [NtechCoreComponentModule,DevloperTestRoutingModule],
    exports : [],
    declarations : [Demo1,Demo2],
    providers: []
})
export class DevloperTestModule
{

}