import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)'
  }
})
export class SafeLinkDirective {

  @Input() queryParam: string = 'skill-sphere';

  constructor() {
  }

  onConfirmLeavePage($event: MouseEvent) {

    const confirmation = confirm('Are you sure you want to leave this page?');
    if (!confirmation) {
      $event.preventDefault();
    } else {
      const href = ($event.target as HTMLAnchorElement).href;
      ($event.target as HTMLAnchorElement).href = href + '?from=' + this.queryParam;
      return;
    }
  }

}
