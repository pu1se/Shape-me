import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot()
  ],
  exports: [TooltipModule, ModalModule, BsDropdownModule, CollapseModule, TabsModule]
})
export class BootstrapModule { }
