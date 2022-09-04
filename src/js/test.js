// console.log("test: Hello team!!!")
(() => {
    const refs = {
      openModalBtnMenu: document.querySelector("[menu-mobile-open]"),
      closeModalBtnMenu: document.querySelector("[menu-mobile-close]"),
      modalMenu: document.querySelector("[menu-mobile]"),
    };
  
    refs.openModalBtnMenu.addEventListener("click", toggleModal);
    refs.closeModalBtnMenu.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modalMenu.classList.toggle("mobile--open");
    }
  })();