`use strict`;

export default class PuppyView {
  constructor(element, info) {
    this.element = element;
    this.info = info;

    this.renderPuppyPhoto();
    this.renderPuppyName();
    this.renderPuppyAge();
    this.renderPuppyUrl();
    this.renderPuppyProfile();
  }


  renderPuppyPhoto() {
    document.querySelector(`.puppy-photo`).innerHTML = `<img src="${this.info.photoUrl}" alt="" class="puppy-img"/>`;
 }
  renderPuppyName() {
    document.querySelector(`.puppy-name`).innerHTML = `${this.info.name}`;
 }
  renderPuppyAge() {
    document.querySelector(`.puppy-age`).innerHTML = `${this.info.age}`;
 }
  renderPuppyUrl() {
    document.querySelector(`.puppy-url`).innerHTML = `${this.info.url}`;
 }
  renderPuppyProfile() {
    document.querySelector(`.puppy-profile`).innerHTML = `${this.info.profile}`;
 }
 }
