import {bindable, customAttribute, inject, DOM} from 'aurelia-framework';
import {MDCRipple} from '@material/ripple';
import '@material/ripple/dist/mdc.ripple.css';

@customAttribute('mdc-ripple')
@inject(DOM.Element)
export class MdcRipple {
    @bindable() unbounded = false;
    mdcRipple: MDCRipple;

    constructor(private element: Element) { }

    bind() {
        this.mdcRipple = new MDCRipple(this.element);
    }

    attached() {
        this.element.classList.add('mdc-ripple-surface');
    }

    detached() {
        this.mdcRipple.destroy();
    }

    unboundedChanged(newValue) {
        this.mdcRipple.unbounded = (newValue === true || newValue === 'true');
    }
}
