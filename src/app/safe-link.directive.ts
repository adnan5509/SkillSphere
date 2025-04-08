import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)'
  }
})
export class SafeLinkDirective {

  constructor() {
  }

  onConfirmLeavePage($event: MouseEvent) {

    const confirmation = confirm('Are you sure you want to leave this page?');
    if (!confirmation) {
      $event.preventDefault();
    }
  }

}
