import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSidebarToggle]'
})
export class SidebarToggleDirective {
  @HostBinding('class.sidebar-minimized') isMinimized = false;

  @HostListener('click') toggleSidebar() {
    this.isMinimized = !this.isMinimized;
    document.body.classList.toggle('sidebar-minimized', this.isMinimized);
  }
}
