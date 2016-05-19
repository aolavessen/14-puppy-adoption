'use strict';

import CreateFormView from 'create-form-view';
import PuppyView from 'puppy-view';

export default class App {
  constructor(element) {
    this.element = element;

    fetch(`http://tiny-tn.herokuapp.com/collections/ao-puppies`)
      .then((response) => response.json())
      .then((info) => {
        info.forEach((puppy) => {
          const generic = new PuppyView(puppy);
          const pupList = document.querySelector(`.puppy-list`);
          pupList.appendChild(generic.element);
        });
      });

    this.formView = new CreateFormView(this.element.querySelector(`.top-nav`), this.application);
  }

  addPuppyData(puppy) {
    this.data = [...this.data, puppy];
  }
}
