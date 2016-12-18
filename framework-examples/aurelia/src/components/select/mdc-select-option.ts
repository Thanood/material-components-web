import {customAttribute, inject, DOM} from 'aurelia-framework';

@customAttribute('mdc-select-option')
@inject(DOM.Element)
export class MdcSelectOption {
  constructor(private element: Element) { }
  // implicitly added bound property "value"

  attached() {
    this.element.classList.add('mdc-list-item');
    this.element.setAttribute('role', 'option');
  }

  detached() {
    this.element.classList.remove('mdc-list-item');
    this.element.removeAttribute('role');
  }
}
