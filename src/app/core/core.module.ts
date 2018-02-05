import { GlobalService } from './singleton-services/global/global.service';
import { AuthenticationService } from './singleton-services/authentication/authentication.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [],
  providers: [
    AuthenticationService , GlobalService
  ]
})
export class CoreModule { 
   /* make sure CoreModule is imported only by one NgModule the AppModule */
   constructor (
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
