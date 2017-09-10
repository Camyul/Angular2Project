import { WelcomePipe } from './../pipes/welcome.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [HeaderComponent, FooterComponent, WelcomePipe],
  exports: [
  CommonModule,
  HeaderComponent,
  FooterComponent
  ]
})
export class SharedModule { }
