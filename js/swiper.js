document.addEventListener('DOMContentLoaded', function () {
	const gallerySwiper = new Swiper('.gallery-swiper__container', {

		loop: false,
		spaceBetween: 30,
		autoHeight: false,
		slidesPerView: 1,
		slidesPerColumn: 1,
		slidesPerGroup: 1,


		// If we need pagination
		pagination: {
			el: '.gallery-swiper__pagination',
			type: 'fraction',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.gallery-swiper__btn-next',
			prevEl: '.gallery-swiper__btn-prev',
		},

		breakpoints: {
			// 0: {
			// 	slidesPerView: 1,
			// 	slidesPerGroup: 1,
			// 	spaceBetween: 0,
			// 	slidesPerColumn: 1,
			// },
			550: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 34,
				slidesPerColumn: 2,
			},
			1230: {
				spaceBetween: 50,
				slidesPerView: 3,
				slidesPerColumn: 2,
				slidesPerGroup: 3,
			}
		}
	});

	const editionsSwiper = new Swiper('.editions-swiper__container', {
		loop: false,
		autoHeight: false,
		// spaceBetween: 30,
		// slidesPerView: 2,
		// slidesPerGroup: 0,
		// slidesPerColumn: 3,

		watchOverflow: false,
		spaceBetween: 30,
		slidesPerView: 2,
		// slidesPerGroup: 0,
		slidesPerColumn: 4,

		pagination: {
			el: '.editions-swiper__pagination',
			type: 'fraction',
		},

		navigation: {
			nextEl: '.editions-swiper__btn-next',
			prevEl: '.editions-swiper__btn-prev',
		},

		breakpoints: {
			320: {
				spaceBetween: 34,
				slidesPerView: 2,
				slidesPerGroup: 2,
				slidesPerColumn: 1,
			},
			1024: {
				spaceBetween: 50,
				slidesPerView: 3,
				slidesPerGroup: 2,
				slidesPerColumn: 1,
			}
		}
	});

	const partnersSwiper = new Swiper('.partners-swiper__container', {
		loop: false,
		spaceBetween: 50,
		slidesPerView: 1,
		slidesPerGroup: 1,
		autoHeight: true,

		// Navigation arrows
		navigation: {
			nextEl: '.partners-swiper__btn-next',
			prevEl: '.partners-swiper__btn-prev',
		},

		breakpoints: {
			700: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 34,
			},
			1300: {
				spaceBetween: 50,
				slidesPerView: 3,
				slidesPerGroup: 3,
			}
		}
	});

})
