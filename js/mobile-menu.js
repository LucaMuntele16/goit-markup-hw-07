(() => {
  const refs = {
    openModalBtn: document.querySelector("[hamburger-open]"),
    closeModalBtn: document.querySelector("[hamburger-close]"),
    modal: document.querySelector("[hamburger-menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleCloseModal);

  function toggleModal() {
    // refs.modal.classList.toggle("is-hidden-menu");
    refs.modal.classList.toggle("is-on");
  }
  function toggleCloseModal(){
    refs.modal.classList.toggle("is-on");
    // refs.modal.classList.toggle("is-hidden-menu");
  }
})();
