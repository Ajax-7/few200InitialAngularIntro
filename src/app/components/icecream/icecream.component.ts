import { Component } from '@angular/core';

@Component(
  {
    selector: 'app-icecream',
    templateUrl: './icecream.component.html'
  }
)
export class IceCreamComponent {
  title = 'few200';

  iceCreamFlavors = [
    'Chocolate',
    'Vanilla',
    'Cherry Garcia'
  ];
  addFlavor(flavor: HTMLInputElement) {
    this.iceCreamFlavors = [flavor.value, ...this.iceCreamFlavors];
    flavor.value = '';
    flavor.focus();
  }

}
