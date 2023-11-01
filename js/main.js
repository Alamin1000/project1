// for mobile offcanvas menu function
{
  let offcanvasOpener = document.querySelector(".offmenu-open");
  let offcanvasCloser = document.querySelector(".offcanvas-close");
  let offcanvasMenu = document.querySelector(".offcanvas-menu");
  let offcanvasOverlay = document.querySelector(".offcanvas-overlay");
  let offcanvasHider = document.querySelectorAll(".off-close");

  // actions
  offcanvasOpener.addEventListener("click", function () {
    offcanvasOpen();
  });
  offcanvasCloser.addEventListener("click", function () {
    offcanvasClose();
  });
  window.addEventListener("click", function (e) {
    let container = document.querySelector(".offmenu");
    if (!container.contains(e.target) && !offcanvasOpener.contains(e.target)) {
      console.log("outside");
      offcanvasClose();
    }
  });
  offcanvasHider.forEach((elm) => {
    elm.addEventListener("click", function () {
      offcanvasClose();
    });
  });

  // offcanvasMenu Open function
  function offcanvasOpen() {
    offcanvasMenu.classList.add("active");
    offcanvasOverlay.classList.add("active");
    document.querySelector("body").classList.add("offcanvas-opened");
  }
  // offcanvasMenu Close function
  function offcanvasClose() {
    offcanvasMenu.classList.remove("active");
    offcanvasOverlay.classList.remove("active");
    document.querySelector("body").classList.remove("offcanvas-opened");
  }
}
