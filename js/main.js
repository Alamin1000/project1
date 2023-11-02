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

// slider
{
  let pSlider = document.querySelector(".product-slider-active");
  if (pSlider !== null) {
    let pSliderDotsParent = document.querySelector(".product-slider-dots");
    let pSliderDots = document.querySelectorAll(".product-slider-dots .dot");
    let pSliderElements = pSlider.children;
    console.log(typeof pSliderElements);
    pSliderDots.forEach((dot) => {
      dot.addEventListener("click", function () {
        //dots-update
        pSliderDots.forEach((dotE) => {
          dotE.classList.remove("active");
        });
        dot.classList.add("active");

        // slider-update
        Array.from(pSliderElements).forEach((eachElm) => {
          eachElm.classList.remove("active");
        });
        let dotIndex = Array.prototype.indexOf.call(
          pSliderDotsParent.children,
          dot
        );
        let targetSlide = document.querySelector(
          `.product-slider-active .slider-item:nth-child(${dotIndex + 1})`
        );
        targetSlide.classList.add("active");
      });
    });
  }
}

//filter-dropdown-height
{
  let productCase = document.querySelector(".product__case");
  let filterPanelDesktop = document.querySelector(
    "#case-filter__panel__desktop"
  );
  filterPanelDesktop.style.setProperty(
    "--height-data",
    productCase.offsetHeight + "px"
  );
}
