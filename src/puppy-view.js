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
 }
