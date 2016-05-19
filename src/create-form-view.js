'use strict';

export default class CreateFormView {
  constructor(element, application) {
    this.element = element;
    this.application = application;
  }

  togglePuppyForm() {
    const dropDown = document.querySelector(`#dropdownId`);
    const dropDownBtn = document.querySelector(`.icon`);
    dropDownBtn.addEventListener(`click`, () => {
      dropDown.classlist.toggle(`dropdown--active`);
      console.log(`.dropdown`);
    });
  }
}
