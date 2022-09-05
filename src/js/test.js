// console.log("test: Hello team!!!")
(() => {
    const refs = {
      openModalBtnMenu: document.querySelector("[menu-mobile-open]"),
      closeModalBtnMenu: document.querySelector("[menu-mobile-close]"),
      closeModalBtnMenu1: document.querySelector("[menu-mobile-close-link1]"),
      closeModalBtnMenu2: document.querySelector("[menu-mobile-close-link2]"),
      closeModalBtnMenu3: document.querySelector("[menu-mobile-close-link3]"),
      closeModalBtnMenu4: document.querySelector("[menu-mobile-close-link4]"),
      closeModalBtnMenu5: document.querySelector("[menu-mobile-close-link5]"),
      modalMenu: document.querySelector("[menu-mobile]"),
    };
  
    refs.openModalBtnMenu.addEventListener("click", toggleModal);
    refs.closeModalBtnMenu.addEventListener("click", toggleModal);
    refs.closeModalBtnMenu1.addEventListener("click", toggleModal);
    refs.closeModalBtnMenu2.addEventListener("click", toggleModal);
    refs.closeModalBtnMenu3.addEventListener("click", toggleModal);
    refs.closeModalBtnMenu4.addEventListener("click", toggleModal);
    refs.closeModalBtnMenu5.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modalMenu.classList.toggle("mobile--open");
    }
  })();