import { DynamicScriptLoaderService } from './Services/DynamicScriptLoaderService/dynamic-script-loader.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlinemanagementsystem';
  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { 
    this.loadScripts();
  }

  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('1','2','3','4','5','6','7','8', '9', '10', '11','12','13','14','15','16','17', '18','19','20','21').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }

}
