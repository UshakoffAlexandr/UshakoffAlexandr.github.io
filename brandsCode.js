/*

Глобальные переменные

*/

let readMoreButton = document.querySelector(".read__more--btn");
let brandList = document.querySelector(".brand__list");
let containerForSwiper = document.querySelector(".for-swiper");

/*

Все обработчики собитий

*/

readMoreButton.addEventListener("click", function () {
  let classes = brandList.className.split(/\s+/);

  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === "brand__list--show-part") {
      let classes = brandList.className.split(/\s+/);
      brandList.classList.remove("brand__list--show-part");
      readMoreButton.classList.remove("read__more--btn--close");
      readMoreButton.classList.add("read__more--btn--open");
      readMoreButton.firstChild.data = "Скрыть";
    } else {
      brandList.classList.add("brand__list--show-part");
      readMoreButton.classList.remove("read__more--btn--open");
      readMoreButton.classList.add("read__more--btn--slose");
      readMoreButton.firstChild.data = "Показать всё";
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let windowWidth = document.documentElement.clientWidth;

  if (windowWidth < 768) {
    addSwiperClasses();
    let globalSwiper = swiperInit();
  }
});

window.addEventListener("resize", function () {
  let windowWidth = document.documentElement.clientWidth;

  addSwiperClasses();
  let globalSwiper = swiperInit();
  if (windowWidth >= 768) {
    deleteSwiperClasses();
    globalSwiper.destroy();
  }
});

/*

Физика 

*/

function addSwiperClasses() {
  let containerForSwiper = document.querySelector(".for-swiper");
  let wrapper = containerForSwiper.querySelector(".for-wrapper");
  let slides = wrapper.querySelectorAll(".for-slide");
  let forPagination = containerForSwiper.querySelector(".for-pagination");

  containerForSwiper.classList.add("swiper");
  wrapper.classList.add("swiper-wrapper");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add("swiper-slide");
  }
  forPagination.classList.add("swiper-pagination");
  wrapper.classList.remove("brand__list--show-part");
}

let swiperInit = function () {
  let swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });
  return swiper;
};

let deleteSwiperClasses = () => {
  let containerForSwiper = document.querySelector(".for-swiper");
  let wrapper = containerForSwiper.querySelector(".for-wrapper");
  let slides = wrapper.querySelectorAll(".for-slide");
  let forPagination = containerForSwiper.querySelector(".for-pagination");

  containerForSwiper.classList.remove("swiper");
  wrapper.classList.remove("swiper-wrapper");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("swiper-slide");
  }
  forPagination.classList.remove("swiper-pagination");
  forPagination.classList.remove("swiper-pagination-clickable");
  forPagination.classList.remove("swiper-pagination-bullets");
  forPagination.classList.remove("swiper-pagination-horizontal");
  wrapper.classList.add("brand__list--show-part");
};
