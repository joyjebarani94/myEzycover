import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = 
  [    
    {
      path: 'ntechapppolicy',
      loadChildren: () => import('../ntech-modules/ntech-app-policy.module')
      .then(ntmod =>ntmod.NtechAppPolicyModule)
    },
    {
      path: 'ntechappadmin',
      loadChildren: () => import('../ntech-modules/ntech-app-admin.module')
      .then(ntmod =>ntmod.NtechAppAdminModule)
    },
    {
      path: 'ntechappuser',
      loadChildren: () => import('../ntech-modules/ntech-app-user.module')
      .then(ntmod =>ntmod.NtechAppUserModule)
    },
    {
      path: 'ntechappdash',
      loadChildren: () => import('../ntech-modules/ntech-app-dashboard.module')
      .then(ntmod =>ntmod.NtechAppDashboardModule)
    },
    {
      path: 'ntechappsetup',
      loadChildren: () => import('../ntech-modules/ntech-app-setup.module')
      .then(ntmod =>ntmod.NtechAppSetupModule)
    },
    {
      path: 'ntechappvendor',
      loadChildren: () => import('../ntech-modules/ntech-app-vendor.module')
      .then(ntmod =>ntmod.NtechAppVendorModule)
    },
    {
      path: 'ntechapppayment',
      loadChildren: () => import('../ntech-modules/ntech-app-payment.module')
      .then(ntmod =>ntmod.NtechAppPaymentModule)
    }

  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
 export class NtechLazyRoutingModule { }