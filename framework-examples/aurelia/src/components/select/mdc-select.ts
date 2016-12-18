import {bindable, bindingMode, children, inject, DOM, TaskQueue} from 'aurelia-framework';

import {MDCSelect} from '@material/select';
import '@material/list/dist/mdc.list.css';
import '@material/menu/dist/mdc.menu.css';
import '@material/select/dist/mdc.select.css';

@inject(DOM.Element, TaskQueue)
export class MdcSelect {
  mdcSelect: MDCSelect;
  @bindable() mdcSelectText: string = 'choose a value';
  @children('li') options;

  constructor(private element: Element, private taskQueue: TaskQueue) { }

  bind() {
    this.mdcSelect = new MDCSelect(this.element);
    this.mdcSelect.listen('MDCSelect:change', this.handleChange.bind(this));
  }

  handleChange() {
    const hasModel = !!this.mdcSelect.selectedOptions[0].au && !!this.mdcSelect.selectedOptions[0].au['mdc-select-option'];
    const model = hasModel ? this.mdcSelect.selectedOptions[0].au['mdc-select-option'].viewModel : null;
    const detail = {
      index:  this.mdcSelect.selectedOptions[0].selectedIndex,
      value: this.mdcSelect.selectedOptions[0].textContent,
      model
    };
    const event = new CustomEvent('change', { bubbles: true, detail });
    this.element.dispatchEvent(event);
  }

  optionsChanged(newValue) {
    this.taskQueue.queueTask(() => {
      this.mdcSelect.foundation_.resize();
    });
  }
}
