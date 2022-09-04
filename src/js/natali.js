(() => {
    const refs = {
      openModalBtn: document.querySelector("[natali-modal-open]"),
      closeModalBtn: document.querySelector("[natali-modal-close]"),
      modal: document.querySelector("[natali-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("modal--open");
    }
  })();