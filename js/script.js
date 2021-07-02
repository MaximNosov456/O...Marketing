$(function () {
  $(".slider-blog__inner").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".menu__btn, .menu__list-link").on("click", function () {
    $(".menu").toggleClass("menu--active");
    $(".menu__btn").toggleClass("menu__btn--active");
  });

  $(".menu__list-link").on("click", function (event) {
    event.preventDefault();
    const id = $(this).attr("href");
    const top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  const mixer = mixitup(".portfolio__content", {
    animation: {
      easing: "ease-in-out",
    },
  });
});
