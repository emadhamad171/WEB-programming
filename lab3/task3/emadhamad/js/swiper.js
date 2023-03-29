const swiper = new Swiper(".swiper", {
	loop: true,
	slidesPerView: 3,
	initialSlide: 2,
	grabCursor: true,
	loopAdditionalSlides: 2,
	effect: "coverflow",
	pagination: {
		el: ".swiper-pagination",
	},
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	scrollbar: {
		el: ".swiper-scrollbar",
	},
});

swiper.on("slideChange", function () {
	console.log("slide changed");
});
