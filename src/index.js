'use strict';

import PuppyView from "puppy-view";
export default function () {
  fetch(`http://tiny-tn.herokuapp.com/collections/ryan-puppy`)
    .then((response) => response.json())
    .then((info) => {
      const element = document.querySelector(`.puppy-view`);
      const PuppyView = new PuppyView(element, info[0]);
    });
}
