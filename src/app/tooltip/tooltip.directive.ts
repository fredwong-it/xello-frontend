import { Directive, Input, AfterViewInit, ViewContainerRef, HostListener } from '@angular/core';
import { TooltipService } from './tooltip.service';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {
  @Input() tooltip;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private tooltipService: TooltipService
  ) {
  }

  @HostListener('click', ['$event']) onClick($event) {
    this.tooltipService.update(this.tooltip, this.viewContainerRef.element);
  }

  @HostListener('blur', ['$event'])
  onBlur($event) {
    this.tooltipService.hide();
  }
}
