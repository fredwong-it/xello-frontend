import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';
import { NgModule } from '@angular/core';
import { TooltipService } from './tooltip.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TooltipComponent,
    TooltipDirective
  ],
  providers: [
    TooltipService
  ],
  exports: [
    TooltipDirective
  ],
  entryComponents: [ TooltipComponent ]
})
export class TooltipModule { }
