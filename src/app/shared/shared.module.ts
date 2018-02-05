import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ButtonComponent],
  exports:[
    /* Angular Stuff exported from here */
    CommonModule,
    FormsModule,
    /* Angular common components exported from here */
    ButtonComponent
  ]
})  
export class SharedModule { }
