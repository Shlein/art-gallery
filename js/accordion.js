document.addEventListener("DOMContentLoaded", function(){

	const accs = document.querySelectorAll('.accordion__item');

	for (let i = 0; i < accs.length; i++) {
		accs[i].addEventListener("click", function() {
			this.classList.toggle("selected");
			const accordion__info = this.nextElementSibling;
			if (accordion__info.style.maxHeight) {
				accordion__info.style.maxHeight = null;
			} else {
				accordion__info.style.maxHeight = accordion__info.scrollHeight + "px";
			}
		});
	}
});