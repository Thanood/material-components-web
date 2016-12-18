export class CheckboxDemo {
  isChecked = true;
  isDisabled = false;
  isIndeterminate = false;
  changeEventCount: number = 0;

  handleChange() {
    this.changeEventCount++;
  }

  makeIndeterminate() {
    this.isIndeterminate = true;
  }

  toggleChecked() {
    this.isChecked = !this.isChecked;
  }

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
}
