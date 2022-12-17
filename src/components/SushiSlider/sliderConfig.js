export var settings = {
  // Настройка слайдера.
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1480,
      settings: {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1250,
      settings: {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
      },
    },
    {
      breakpoint: 840,
      settings: {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        centerMode: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
      },
    },
  ],
};
