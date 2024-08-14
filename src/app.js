document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", (e) => {
    const rect = btn.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    const span = btn.querySelector("span");
    if (span) {
      span.style.top = `${relY}px`;
      span.style.left = `${relX}px`;
    }
  });

  btn.addEventListener("mouseout", (e) => {
    const rect = btn.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    const span = btn.querySelector("span");
    if (span) {
      span.style.top = `${relY}px`;
      span.style.left = `${relX}px`;
    }
  });
});

// Menu Start //
function menuOpen() {
  $("body").addClass("menu-open");
  $(".hamburger").addClass("active");
  $(".navbar-nav").addClass("menuhide");
}

function menuClose() {
  $("body").removeClass("menu-open");
  $(".hamburger").removeClass("active");
}

// Function to add classes when the menu is opened
function menuOpen() {
  document.body.classList.add("menu-open");
  document.querySelector(".hamburger").classList.add("active");
  document.querySelector(".navbar-nav").classList.add("menuhide");
}

// Function to remove classes when the menu is closed
function menuClose() {
  document.body.classList.remove("menu-open");
  document.querySelector(".hamburger").classList.remove("active");
}

// GSAP timeline setup
let t1 = gsap.timeline({
  paused: true,
  onStart: menuOpen,
  onReverseComplete: menuClose,
});

// Animation configuration
t1.fromTo(
  ".nav-container",
  {
    height: 0,
  },
  {
    height: "auto",
    duration: 2.5,
    ease: "elastic.out(1,0.3)",
  }
);
t1.fromTo(
  ".line-1",
  {
    rotate: 0,
  },
  {
    rotate: 45,
    y: 5,
    duration: 2.5,
    ease: "elastic.out(1,0.3)",
  },
  0
);
t1.to(
  ".line-2",
  {
    opacity: 0,
    duration: 0.5,
    ease: "elastic.out(1,0.3)",
  },
  0
);

t1.fromTo(
  ".line-3",
  {
    rotate: 0,
  },
  {
    rotate: -45,
    y: -3,
    width: "20px",
    duration: 0.5,
    ease: "elastic.out(1,0.3)",
  },
  0
);
t1.fromTo(
  ".nav-menu-mobile li",
  {
    opacity: 0,
    y: 20,
  },
  {
    stagger: 0.1,
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "elastic.out(1,0.8)",
  },
  0
);
t1.reverse();

// Event listener for menu icon
document.querySelector(".nav-bar-icon").addEventListener("click", function () {
  t1.reversed(!t1.reversed());
});

// Text Animation
const animFadeInUp = gsap.utils.toArray(".anim_fadeinup");
animFadeInUp.forEach((box, i) => {
  const anim = gsap.fromTo(
    box.children,
    { autoAlpha: 0, y: 50, opacity: 0 },
    { delay: 0.2, duration: 1, autoAlpha: 1, y: 0, opacity: 1, stagger: 0.25 }
  );
  ScrollTrigger.create({
    trigger: box,
    ease: "power2.inOut",
    animation: anim,
    toggleActions: "play none none none",
    once: false,
  });
});

// Team Group
document.querySelectorAll(".team-inner").forEach((block) => {
  const hoverImage = block.querySelector(".hover-image");
  const hoverDetail = block.querySelector(".hover-detail");
  const leftLogo = hoverImage.querySelector(".left-logo");
  const rightLogo = hoverImage.querySelector(".right-logo");
  const detailText = block.querySelector(".detail");

  gsap.set(leftLogo, { x: "-100%", opacity: 0 });
  gsap.set(rightLogo, { x: "100%", opacity: 0 });
  gsap.set(detailText, { opacity: 0 });
  gsap.set(hoverImage, {
    y: 0,
    scale: 1,
    duration: 0.5,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    ease: "power2.inOut",
  });

  const timeline = gsap.timeline({ paused: true });

  timeline

    .to(hoverImage, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.5,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      ease: "power2.inOut",
    })
    .to(leftLogo, { x: "0%", opacity: 1, duration: 0.5, ease: "power2.out" })
    .to(
      rightLogo,
      { x: "0%", opacity: 1, duration: 0.5, ease: "power2.out" },
      "-=0.5"
    )
    .to(hoverImage, {
      scale: 0.3,
      duration: 0.5,
      position: "absolute",
      top: 0,
      left: 0,
      transform: "translate(0,0)",
      ease: "power2.inOut",
    })

    .fromTo(
      detailText,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );

  block.addEventListener("mouseenter", () => {
    gsap.set(detailText, { display: "block" });
    timeline.restart();
  });

  block.addEventListener("mouseleave", () => {
    gsap.to(hoverImage, {
      opacity: 0,
      y: 50,
      duration: 0.7,
      ease: "power2.inOut",
    });
    gsap.to([leftLogo, rightLogo], {
      x: ["-100%", "100%"],
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
    });
    gsap.fromTo(
      detailText,
      { opacity: 1, y: 0 },
      { opacity: 0, y: 50, display: "none", duration: 0.5, ease: "power2.out" }
    );
  });
});

const t2 = gsap.timeline();
const scrollTop = document.querySelector(".scroll-to-top");

t2.fromTo(
  ".scroll-img-1",
  {
    y: 0,
  },
  {
    y: -30,
    duration: 0.6,
    ease: "elastic.out(1,0.8)",
  }
);
t2.fromTo(
  ".scroll-img-2",
  {
    top: "120%",
  },
  {
    top: "50%",
    duration: 0.6,
    ease: "elastic.out(1,0.8)",
  },
  "-=0.5"
);
scrollTop.addEventListener("mouseenter", () => {
  t2.restart();
});

scrollTop.addEventListener("mouseleave", () => {
  t2.reverse();
});

window.addEventListener("scroll", () => {
  const scrollToTopButton = document.querySelector(".scroll-to-top");

  if (
    window.pageYOffset > 600 &&
    scrollToTopButton.style.position !== "fixed"
  ) {
    gsap.fromTo(
      scrollToTopButton,
      {
        position: "absolute",
        bottom: 0,
      },
      {
        position: "fixed",
        bottom: 30,
        duration: 0.6,
        ease: "elastic.out(1, 0.8)",
      }
    );
  } else if (
    window.pageYOffset <= 600 &&
    scrollToTopButton.style.position === "fixed"
  ) {
    // Optionally reset the button to its original state when scrolling back up
    gsap.to(scrollToTopButton, {
      position: "absolute",
      bottom: 30,
      duration: 0.6,
      ease: "elastic.out(1, 0.8)",
    });
  }
});

// Team Slider 
if (document.querySelectorAll(".team-slider").length) {
  var swiper = new Swiper(".teamSwiper", {
    slidesPerView: 2,
    speed: 1000,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      }
    },
    navigation: {
      nextEl: ".teamSwiper-next",
      prevEl: ".teamSwiper-prev",
    },
  });
}
