'use strict';


// import ApplicationView from 'application-view';
import PuppyView from 'puppy-view';

export default class App {
  constructor() {
    fetch(`http://tiny-tn.herokuapp.com/collections/ryan-puppy`)
    .then((response) => response.json())
    .then((info) => {
      info.forEach((puppy) => {
        const generic = new PuppyView(puppy);
        const pupList = document.querySelector(`.puppy-list`);
        pupList.appendChild(generic.element);
        this.renderForm();
      });
    });
  }
  renderForm() {
    const dogForm = document.createElement(`div`);
    dogForm.classList.add(`dropdown-container`);
    dogForm.innerHTML =
    `<div class="dropdown-sub-container">
    <p class="dropdown-heading">Add a new puppy</p>
    <div class="input-field">
      <h5 class="input-heading">Name</h5>
      <input class="dropdown-name" type="text">
    </div>
    <div class="input-field">
      <h5 class="input-heading">Age</h5>
      <input class="dropdown-age" type="text">
    </div>
    <div class="input-field">
      <h5 class="input-heading">Photo URL</h5>
      <input class="dropdown-photoUrl" type="text">
    </div>
    <div class="input-field">
      <h5 class="input-heading">Profile</h5>
      <input class="dropdown-profile" type="text">
    </div>
    <button class="dropdown-button">Save</button>
  </div>`;
    document.querySelector(`.dropdown`).appendChild(dogForm);
  }

}
