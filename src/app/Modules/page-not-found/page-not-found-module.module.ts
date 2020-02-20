import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenotFoundModuleRoutes } from 'src/app/Routes/routes';



@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(PagenotFoundModuleRoutes),
    CommonModule
  ],
  exports : [
    RouterModule
  ],
})
export class PageNotFoundModuleModule { }
