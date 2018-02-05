import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: 'provider-network-setup' , loadChildren: 'app/feature/provider-network/provider-network.module#ProviderNetworkModule'},
            {path: '', redirectTo: '/provider-network-setup', pathMatch: 'full'},
            {path: '**', redirectTo: '/provider-network-setup', pathMatch: 'full'}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
