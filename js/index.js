document.addEventListener("DOMContentLoaded", function(){
	const showEventsBtn = document.querySelector('.events__button')
	const eventsItems = document.querySelectorAll('.events-item');

	(function () {
		showEventsBtn.addEventListener('click', function () {
			this.classList.add("pressed")
			eventsItems.forEach((el) => {
					el.classList.add("active")
				}
			)
		})
	})();

	(function () {
		document.querySelector('.header__burger-icon').addEventListener('click', (function() {
			document.querySelector('.header__burger-icon').classList.toggle('active-one');
		}))
	})();

	// (function () {
	// 	if (window.innerWidth <= 320) {
	// 		document.querySelector('.editions-swiper__container').classList.remove('swiper-container')
	// 	}
	// })();

})

// (function() {
// 	document.querySelector('.header__burger-icon').click(function() {
// 		document.querySelector('.header__burger-icon').classList.toggle('active-one');
// 	});
// })