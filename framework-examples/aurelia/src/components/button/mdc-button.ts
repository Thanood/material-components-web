import {bindable, customAttribute, inject, DOM} from 'aurelia-framework';
import '@material/button/dist/mdc.button.css';

@customAttribute('mdc-button')
@inject(Element)
export class MdcButton {
    @bindable() accent = false;
    @bindable() compact = false;
    @bindable() dense = false;
    @bindable() primary = false;
    @bindable() raised = false;

    constructor(private element: Element) { }

    attached() {
        this.element.classList.add('mdc-button');
    }

    detached() {
        const classes = [
            'mdc-button',
            'mdc-button--accent',
            'mdc-button--compact',
            'mdc-button--dense',
            'mdc-button--primary',
            'mdc-button--raised'
        ];
        this.element.classList.remove(...classes);
    }

    accentChanged(newValue) {
      if (newValue) {
          this.element.classList.add('mdc-button--accent');
      } else {
          this.element.classList.remove('mdc-button--accent');
      }
    }

    compactChanged(newValue) {
      if (newValue) {
          this.element.classList.add('mdc-button--compact');
      } else {
          this.element.classList.remove('mdc-button--compact');
      }
    }

    denseChanged(newValue) {
      if (newValue) {
          this.element.classList.add('mdc-button--dense');
      } else {
          this.element.classList.remove('mdc-button--dense');
      }
    }

    primaryChanged(newValue) {
      if (newValue) {
          this.element.classList.add('mdc-button--primary');
      } else {
          this.element.classList.remove('mdc-button--primary');
      }
    }

    raisedChanged(newValue) {
      if (newValue) {
          this.element.classList.add('mdc-button--raised');
      } else {
          this.element.classList.remove('mdc-button--raised');
      }
    }
}
