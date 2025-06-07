import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core"

@Directive({
  selector: '[openNewTab]',
})
export class OpenNewTabDirective {
  @Input() tabLink = ''
  @Input() isOpeningAllowed = true


  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mousedown', ["$event"]) onMiddleClick(e: MouseEvent) {
    e.preventDefault()
    if(e.button === 1 && this.isOpeningAllowed) {
      this.openNewTab()
    }
  }

  openNewTab(): void {
    window.open('/'+this.tabLink)
  }
}
