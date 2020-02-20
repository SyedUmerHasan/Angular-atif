import { DynamicScriptLoaderService } from './../../../../Services/DynamicScriptLoaderService/dynamic-script-loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { 
  }

  ngOnInit(): void {
  }

}
