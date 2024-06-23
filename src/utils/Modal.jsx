const modalContainer = document.querySelector("body");
const modal = document.querySelector(".modal");

const createModal = () => {
  const imgModal = document.querySelector(".modal-image");
  const imgsModal = modalContainer.querySelectorAll("img");

  for (let i = 0; i < imgsModal.length; i++) {
    imgsModal[i].addEventListener("click", () => {
      imgModal.src = imgsModal[i].src;

      modal.style.display = "flex";
    });
  }

  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
};
createModal();

// check out if this modal will work with react
