export default class PuppyView {
  constructor(info) {
    this.element = document.createElement(`div`);
    this.element.classList.add(`puppy-entry`);
    this.info = info;
    this.element.innerHTML = `
    <div class="puppy-photo">
      <img src="" alt="">
    </div>
    <div class="puppy-info">
      <h5>Name</h5>
      <div class="puppy-name">
      </div>
      <h5>Age</h5>
      <div class="puppy-age">
      </div>
      <h5>Photo URL</h5>
      <div class="puppy-url">
      </div>
      <h5>Profile</h5>
      <div class="puppy-profile">
      </div>
      <div class="buttons">
        <button class="delete-button">Delete</button>
        <button class="update-button">Update</button>
      </div>
    </div>`;

    this.renderPuppyPhoto();
    this.renderPuppyName();
    this.renderPuppyAge();
    this.renderPuppyUrl();
    this.renderPuppyProfile();
  }


  renderPuppyPhoto() {
    this.element.querySelector(`.puppy-photo`).innerHTML = `<img src="${this.info.photoUrl}" alt="" class="puppy-img"/>`;
 }
  renderPuppyName() {
    this.element.querySelector(`.puppy-name`).innerHTML = `${this.info.name}`;
 }
  renderPuppyAge() {
    this.element.querySelector(`.puppy-age`).innerHTML = `${this.info.age}`;
 }
  renderPuppyUrl() {
    this.element.querySelector(`.puppy-url`).innerHTML = `${this.info.url}`;
 }
  renderPuppyProfile() {
    this.element.querySelector(`.puppy-profile`).innerHTML = `${this.info.profile}`;
 }

   render() {
     this.info.forEach((puppyview) => {
       const PuppyView = new PuppyView(item);
       this.element.appendChild(PuppyView.element);
     });
   }

  //  render() {
  //    this.info.forEach((puppyList) => {
  //      const PuppyList = new PuppyList(item);
  //      this.element.appendChild(PuppyList.element);
  //  });
  // }
 }
