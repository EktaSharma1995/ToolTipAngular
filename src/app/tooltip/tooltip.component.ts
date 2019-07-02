import { Component, OnInit, Input, ComponentRef, Output, EventEmitter, HostListener, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `
  <div class = "mytooltip">
    <span (click)="output.next('output')" class="tooltiptext" [hidden]="hidden">Alert {{type}}</span>
  </div>
`,
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {
  [x: string]: any;
  hidden = false;

  @Input() type: string = 'success';
  @Output() output = new EventEmitter();
  @ViewChild('toolTipContainer', { read: ViewContainerRef }) container;

  constructor() { }

  ngOnInit() {
  }

  clear() {
    alert('cleared');
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.hidden = !this.hidden;
}



}

