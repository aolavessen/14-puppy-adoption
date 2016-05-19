'use strict';
// import ApplicationView from "application-view";
import PuppyView from "puppy-view";

export default function () {
  fetch(`http://tiny-tn.herokuapp.com/collections/ryan-puppy`)
    .then((response) => response.json())
    .then((info) => {
      const puppyEntry = new PuppyView(info[0]);
      document.querySelector(`.puppy-list`).appendChild(puppyEntry.element);
    });
}
