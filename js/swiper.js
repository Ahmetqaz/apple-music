const settings =  {
  artists: {
    slidesPerView: "auto",
    spaceBetween: 50,
  }
};
document.querySelectorAll(".swiper").forEach((swiperSlider) => {
  const settingsKey = swiperSlider.getAttribute("data-swiper");
  // const prev = parentElement.querySelector(".swiper-arrow-prev");
  // const next = parentElement.querySelector(".swiper-arrow-next");
  new Swiper(swiperSlider, {
    ...settings[settingsKey],
    // // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination",
    // },

    // // Navigation arrows
    // navigation:
    //   next && prev
    //     ? {
    //         nextEl: next,
    //         prevEl: prev,
    //       }
    //     : {},
  });
});
