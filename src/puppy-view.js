'use strict';

export default class PuppyView {
  constructor(info) {
    this.info = info;
    this.element = document.createElement(`div`);
    this.setupElement();

    this.deletePuppy();
    this.updatePuppy();

    this.render();
  }

  setupElement() {
    this.element.classList.add(`puppy-profile`);

    this.element.innerHTML =
    `
    <div class="puppy-pic-parent">
      <div class="puppy-pic">
      <img src="" alt="" class="puppy-img">
      </div>
      </div>
      <div id="puppyForm" class="puppy-form">
        <div class="puppy-input">
          <p class="puppy-input-heading">Name</p>
          <input type= "text" class="puppy-name" value=""></input>
        </div>
        <div class="puppy-input">
          <p class="puppy-input-heading">Age</p>
          <input type= "text" class="puppy-age" value=""></input>
        </div>
        <div class="puppy-input">
          <p class="puppy-input-heading">Photo URL</p>
          <input type= "text" class="puppy-url" value=""></input>
        </div>
        <div class="puppy-input">
          <p class="puppy-input-heading">Profile</p>
          <input type= "text" class="puppy-writeup" value=""></input>
        </div>
        <div class="puppy-button-list">
        <button class="delete">Delete</button>
        <button class="update">Update</button>
        </div>
      </div>`;
  }

  render() {
    this.element.querySelector(`.puppy-img`).setAttribute(`src`, this.info.photoUrl);
    this.element.querySelector(`.puppy-name`).value = this.info.name;
    this.element.querySelector(`.puppy-age`).value = this.info.age;
    this.element.querySelector(`.puppy-url`).value = this.info.photoUrl;
    this.element.querySelector(`.puppy-writeup`).value = this.info.profile;
  }

  updatePuppy() {
    this.element.querySelector(`.update`).addEventListener(`click`, (ev) => {
      ev.preventDefault();
      fetch(`http://tiny-tn.herokuapp.com/collections/ao-puppies/${this.info._id}`, {
        method: `PUT`,
        headers: {
          Accept: `application/json`,
          'Content-Type': `application/json`,
        },
        body: JSON.stringify({
          _id: this.info._id,
          name: this.element.querySelector(`.puppy-name`).value,
          age: this.element.querySelector(`.puppy-age`).value,
          url: this.element.querySelector(`.puppy-url`).value,
          profile: this.element.querySelector(`.puppy-writeup`).value,
        }),
      }).then((res) => res.json())
    .then((data) => {
      this.info = data;

      this.render();
    });
    });
  }

  deletePuppy() {
    this.element.querySelector(`.delete`).addEventListener(`click`, (ev) => {
      ev.preventDefault();

      fetch(`http://tiny-tn.herokuapp.com/collections/ao-puppies/${this.info._id}`, {
        method: `DELETE`,
        body: JSON.stringify(this.element),
      }).then((res) => res.json())
    .then(() => {
      alert(`Item deleted`);
    });
    });
  }
}
