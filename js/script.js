






// Showing scrollbar on mouse hover near the right edge of the window

document.addEventListener("mousemove", (e) => {
  const nearRight = (window.innerWidth - e.clientX) < 50;

    if (nearRight) {
      document.documentElement.setAttribute("data-show-scrollbar", "");
    } else {
      document.documentElement.removeAttribute("data-show-scrollbar");
    }
});
