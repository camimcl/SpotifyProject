import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSidebarToggle]'
})
export class SidebarToggleDirective {
  @HostBinding('class.sidebar-minimized') isMinimized = false;

  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event.target']) toggleSidebar(target: HTMLElement) {
    if (target.classList.contains('toggle-button') || target.closest('.toggle-button')) {
      this.isMinimized = !this.isMinimized;
      document.body.classList.toggle('sidebar-minimized', this.isMinimized);
    }
  }
}
