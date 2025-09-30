//select edit profile modal and elements
profileEditBtn = document.querySelector(".profile__edit-btn");
profileEditModal = document.querySelector("#edit-profile-modal");
profileModalCloseBtn = profileEditModal.querySelector(".modal__close-btn");

//open edit profile modal
profileEditBtn.addEventListener("click", function () {
  profileEditModal.classList.add("modal_is-opened");
});

//close edit profile modal
profileModalCloseBtn.addEventListener("click", function () {
  profileEditModal.classList.remove("modal_is-opened");
});

//select new post modal and elements
newPostBtn = document.querySelector(".profile__add-btn");
newPostModal = document.querySelector("#new-post-modal");
newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

//open new post modal
newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

//close new post modal
newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});
