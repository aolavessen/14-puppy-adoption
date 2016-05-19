'use strict';

export default class PuppyView {
  constructor(info) {
    this.info = info;
    this.element = document.createElement(`div`);
    this.renderDogList();
  }

  renderDogList() {
    this.element.classList.add(`puppy-profile`);

    this.element.innerHTML =
    `
    <div class="puppy-pic-parent">
      <div class="puppy-pic">
      <img src="${this.info.photoUrl}" alt="" class="puppy-img">
      </div>
      </div>
      <div id="puppyForm" class="puppy-form">
        <div class="puppy-input">
          <p class="puppy-input-heading">Name</p>
          <div class="puppy-name">${this.info.name}</div>
        </div>
        <div class="puppy-input">
          <p class="puppy-input-heading">Age</p>
          <div class="puppy-age">${this.info.age}</div>
        </div>
        <div class="puppy-input">
          <p class="puppy-input-heading">Photo URL</p>
          <div class="puppy-url">${this.info.photoUrl}</div>
        </div>
        <div class="puppy-input">
          <p class="puppy-input-heading">Profile</p>
          <div class="puppy-writeup">${this.info.profile}</div>
        </div>
        <div class="puppy-button-list">
        <button class="delete">Delete</button>
        <button class="update">Update</button>
        </div>
      </div>
`;
  }
}
