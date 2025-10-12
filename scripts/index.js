// Utility functions
function openModal(modalElement) {
  modalElement.classList.add("modal_is-opened");
}

function closeModal(modalElement) {
  modalElement.classList.remove("modal_is-opened");
}

// select edit profile modal and elements
const profileEditBtn = document.querySelector(".profile__edit-btn");
const profileEditModal = document.querySelector("#edit-profile-modal");
const profileModalCloseBtn =
  profileEditModal.querySelector(".modal__close-btn");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const profileNameInput = profileEditModal.querySelector("#profile-name-input");
const profileDescriptionInput = profileEditModal.querySelector(
  "#profile-description-input"
);

// select profile text elements
const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);

// open edit profile modal
profileEditBtn.addEventListener("click", function () {
  profileNameInput.value = profileNameElement.textContent;
  profileDescriptionInput.value = profileDescriptionElement.textContent;
  openModal(profileEditModal);
});

// submit profile edits
function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = profileNameInput.value;
  profileDescriptionElement.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
}

profileEditForm.addEventListener("submit", handleEditProfileSubmit);

// close edit profile modal
profileModalCloseBtn.addEventListener("click", function () {
  closeModal(profileEditModal);
});

// select new post modal and elements
const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostFormElement = newPostModal.querySelector(".modal__form");
const newPostNameInput = newPostModal.querySelector("#card-caption-input");
const newPostLinkInput = newPostModal.querySelector("#card-image-input");

// submit new post
function handleNewPostSubmit(evt) {
  evt.preventDefault();
  console.log(newPostNameInput.value, newPostLinkInput.value);
  closeModal(newPostModal);
}

newPostFormElement.addEventListener("submit", handleNewPostSubmit);

// open new post modal
newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

// close new post modal
newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});
