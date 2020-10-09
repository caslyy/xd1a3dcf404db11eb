import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})


// @ts-ignore
export class DropdownDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  // tslint:disable-next-line:no-inferrable-types
  opened: boolean = false;

  @HostListener('click') onElementClicked(): void {
    const children = Array.from(this.element.nativeElement.children);

    if (!this.opened) {
      children.forEach(element => {
        this.renderer.addClass(element, 'show');
      });
      this.opened = !this.opened;
    } else {
      children.forEach(element => {
        this.renderer.removeClass(element, 'show');
      });
      this.opened = !this.opened;
    }
  }

  // // tslint:disable-next-line:no-inferrable-types
  // @HostBinding('class.show') opened: boolean = false;

  // @HostListener('click') onElementClicked(): void {
  //     const test = this.element.nativeElement.children;
  //
  //     contest[0]
  //   // const children = Array.from(this.element.nativeElement.children);
  //   // children.forEach(element => {
  //   //   this.renderer.addClass(element, 'show');
  //   // });
  // }


}

