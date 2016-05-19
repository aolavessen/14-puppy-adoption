'use strict';
// import ApplicationView from "application-view";
import PuppyView from "puppy-view";


export default function () {
  fetch(`http://tiny-tn.herokuapp.com/collections/ryan-puppy`)
    .then((response) => response.json())
    .then((info) => {
      const element = document.querySelector(`.puppy-profile`);
      const puppyProfile = new PuppyView(element, info);
    });
}
