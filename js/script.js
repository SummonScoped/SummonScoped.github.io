  /* Kompakte Version beim Scrollen Teil 2/5 */ 
  window.addEventListener("scroll", function () {
    const nav = document.getElementById("main-nav");
    if (window.scrollY > 50) {
      nav.classList.add("shrink");
    } else {
      nav.classList.remove("shrink");
    }
  });

