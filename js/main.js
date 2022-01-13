// skills card Animation ======================
VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 400,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  perspective: 1000,
  translateZ: 20,
  transition: true
});
// toggle menu ======================
$(".menu-btn").click(function () {
  $(".menu-btn").toggleClass("active");
  $(".overlay").toggleClass("active");
  $(".menu-container").toggleClass("active");
  $("body").toggleClass("stop-scroll");
});
$(".menu-wrapper>li>a").click(function () {
  $(".menu-btn").removeClass("active");
  $(".overlay").removeClass("active");
  $(".menu-container").removeClass("active");
  $("body").removeClass("stop-scroll");
})


// prices slider ======================
const slides = document.querySelectorAll('.slide');
for (const slide of slides) {
  slide.addEventListener('click', () => {
    removeActiveSlideClass()
    slide.classList.add('activeslide');
  })
};

function removeActiveSlideClass() {
  slides.forEach((slide) => {
    slide.classList.remove('activeslide');
  })
};

// works hover shown ======================

const worksImg = document.querySelectorAll('.works__item-img');
console.log(worksImg);