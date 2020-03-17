import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  @HostBinding('style.color') color;
  @HostBinding('style.borderColor') bc;
  constructor() { }
  changeColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  @HostListener('keypress') keyPress() {
    this.bc = this.changeColor();
    this.color = this.changeColor();
  }
}
