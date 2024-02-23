window.onload = function () {
  //   // 모달 열기
  // function openModal() {
  //   document.getElementById('popup').style.display = 'block';
  //   document.body.style.overflow = 'hidden';
  // }
  // // 모달 닫기
  // function closeModal() {
  //   document.getElementById('popup').style.display = 'none';
  //   document.body.style.overflow = 'auto';
  // }
  // 닫기 버튼을 클릭하면 모달을 닫는 함수
  document.getElementById("close").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
  });

  // top 버튼
  document.getElementById("scroll-to-top").addEventListener("click", function() {
    if (window.scrollY == 0) {
      window.scrollTo({
        top: 5000,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
  window.addEventListener("scroll", function () {
    var scrollButton = document.getElementById("scroll-to-top-btn");
    if (window.scrollY > 300) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  });

  // 화살표 이미지 회전
  const topBtnImg = document.getElementById("scroll-to-top");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      topBtnImg.classList.add("up");
    } else {
      topBtnImg.classList.remove("up");
    }
  });
  // swiper
  var swiper = new Swiper(".sw-banner", {
    cssMode: true,
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
  });
  var swiper = new Swiper(".sw-sale", {
    cssMode: true,
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sale-left .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".sale-left .swiper-button-next",
      prevEl: ".sale-left .swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });
};
