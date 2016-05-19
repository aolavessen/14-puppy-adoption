'use strict';

export default class CreateFormView {
  constructor(element, application) {
    this.element = element;
    this.application = application;
    this.togglePuppyForm();
    this.puppyAddToList();
  }

  puppyAddToList() {
    this.element.querySelector(`.dropdown-button`).addEventListener(`click`, (ev) => {
      ev.preventDefault();

      this.formData = {
        name: this.element.querySelector(`.dropdown-name`).value,
        age: this.element.querySelector(`.dropdown-age`).value,
        photoUrl: this.element.querySelector(`.dropdown-photoUrl`).value,
        profile: this.element.querySelector(`.dropdown-profile`).value,
      };

      fetch(`http://tiny-tn.herokuapp.com/collections/ao-puppies`, {
        method: `post`,
        headers: {
          Accept: `application/json`,
          'Content-Type': `application/json`,
        },
        body: JSON.stringify(this.formData),
      }).then((res) => res.json())
    .then((data) => {
      this.element.querySelector(`.dropdown-name`).value = ``;
      this.element.querySelector(`.dropdown-age`).value = ``;
      this.element.querySelector(`.dropdown-photoUrl`).value = ``;
      this.element.querySelector(`.dropdown-profile`).value = ``;

      this.application.addPuppyData(data);
    });
  });
}

  togglePuppyForm() {
    const dropDown = this.element.querySelector(`.dropdown`);
    const dropDownBtn = this.element.querySelector(`.icon`);
    dropDownBtn.addEventListener(`click`, () => {
      dropDown.classList.toggle(`dropdown--active`);
    });
  }

}
