import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)'
  }
})
export class SafeLinkDirective {

  @Input() queryParam: string = 'skill-sphere';

  constructor(private hostElementRef: ElementRef<HTMLAnchorElement>) {}

  onConfirmLeavePage($event: MouseEvent) {

    const confirmation = confirm('Are you sure you want to leave this page?');
    if (!confirmation) {
      $event.preventDefault();
    } else {
      const href = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href = href + '?from=' + this.queryParam;
      return;
    }
  }

}
