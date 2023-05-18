let bookClose = document.querySelector(".book-close-btn");
let bookOpen = document.querySelector(".book-open-btn");
let menuBar =document.querySelector(".menu-bar");

bookClose.onclick = () => {
  menuBar.classList.toggle("active");
  bookClose.classList.toggle("active");
  bookOpen.classList.toggle("active");
};

bookOpen.onclick = () => {
  menuBar.classList.toggle("active");
  bookClose.classList.toggle("active");
  bookOpen.classList.toggle("active");
};
