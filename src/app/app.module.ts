import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component, Input, ComponentFactory, ComponentRef,
        ComponentFactoryResolver, ViewContainerRef,
        ChangeDetectorRef, TemplateRef, ViewChild,
        Output, EventEmitter } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [TooltipComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
