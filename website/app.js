
document.getElementById('icon').addEventListener('click', function() {
  console.log('Icon clicked!'); // Check if this logs in the console
  document.querySelector('.nav-links').classList.toggle('show');
});


// ---------------------------swiper------------------------------
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    // grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //Responsive breakpoints
    breakpoints:{
        
        0:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        },
    }
  });

// --------------------- slider
// var swiper1 = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     grabCursor:true,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });


// Initialize Swiper
// const swiper3 = new Swiper('.mySwiper', {
//   loop: true, // Infinite loop
//   slidesPerView: 1, // Show one slide at a time
//   spaceBetween: 20, // Space between slides
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true, // Allow clicking on pagination bullets
//     type: 'bullets', // Pagination style: bullets
//   },
  // navigation: {
  //   nextEl: '.swiper-button-next', // Next button
  //   prevEl: '.swiper-button-prev', // Previous button
  // },
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1, // One slide per view for small screens
  //   },
  //   768: {
  //     slidesPerView: 1, // One slide per view for medium screens
  //   },
  //   1024: {
  //     slidesPerView: 1, // One slide per view for larger screens as well
  //   },
  // },
// });


// review slider//
const swiper3 = new Swiper(".slide-content-reviews", {
  slidesPerView: 1,
  loop: true,
  speed: 800,
  // Autoplay settings
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

