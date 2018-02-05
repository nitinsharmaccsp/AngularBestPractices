import { GlobalService } from '@app/core';
import { SharedModule } from './shared/shared.module';

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';  
 
  buttontriggeredEvent($event){
    console.log($event.type);
  }
}
