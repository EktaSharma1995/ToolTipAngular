import { TooltipComponent } from './tooltip/tooltip.component';
import {
  Component, NgModule, Input,
  ComponentFactory, ComponentRef,
  ComponentFactoryResolver, ViewContainerRef,
  ChangeDetectorRef, TemplateRef, ViewChild,
  Output, EventEmitter, AfterViewInit
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <span #alertContainer class="tooltip"></span>
    <button style="margin-top: 30px;" (click)="createComponent('success')">Button A</button>
    <button (click)="createComponent('danger')">Button B</button>
  `,
})

// @NgModule({
//   entryComponents: [TooltipComponent],
//   bootstrap: [ AppComponent ]
// })

export class AppComponent implements AfterViewInit {
  // title = 'Xello-assessment';
  @ViewChild('alertContainer', { read: ViewContainerRef }) container;
  componentRef: ComponentRef<TooltipComponent>;

  constructor(private resolver: ComponentFactoryResolver) { }

  createComponent(type) {
    this.container.clear();
    const toolTip: ComponentFactory<TooltipComponent> = this.resolver.resolveComponentFactory(TooltipComponent);

    this.componentRef = this.container.createComponent(toolTip);

    this.componentRef.instance.type = type;

    this.componentRef.instance.output.subscribe(event => console.log(event));

  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

}
