export class SelectDemo {
  options = [
    { id: 0, text: 'Bread, Cereal, Rice, and Pasta' },
    { id: 1, text: 'Vegetables' },
    { id: 2, text: 'Fruit' },
    { id: 3, text: 'Milk, Yogurt, and Cheese' },
    { id: 4, text: 'Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts' },
    { id: 5, text: 'Fats, Oils, and Sweets' }
  ];
  selectedOption = null;
  selectedValue = '';

  handleOptionChange($event) {
    if ($event.detail.model) {
      this.selectedOption = $event.detail.model.value;
    } else {
      this.selectedOption = $event.detail.value;
    }
  }

  handleValueChange($event) {
    this.selectedValue = $event.detail.value;
  }
}
