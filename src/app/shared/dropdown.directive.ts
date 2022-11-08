import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropDownDirective {
  @HostBinding('class.open') itsOpen = false;

  @HostListener('click') toggleOpen() {
    this.itsOpen = !this.itsOpen;
  }
}
