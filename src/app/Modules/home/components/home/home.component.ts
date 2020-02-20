import { DynamicScriptLoaderService } from './../../../../Services/DynamicScriptLoaderService/dynamic-script-loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { 
    this.loadScripts();
  }

  ngOnInit(): void {
  }
  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('1','2','3','4','5','6','7','8', '9', '10', '11','12','13','14').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }
}
