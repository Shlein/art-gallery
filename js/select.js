document.addEventListener("DOMContentLoaded", () => {
	const selects = document.querySelectorAll('.select-box')
	const headers = document.querySelectorAll('.select-box__header')
	// const options = document.querySelectorAll('.select-box__option')
	const lists = document.querySelectorAll('.select-box__list')

	for (let i = 0; i < selects.length; i++) {
		headers[i].addEventListener('click', () => {
			lists[i].classList.toggle('active')
			selects[i].classList.toggle('open')
			headers[i].classList.toggle('open')
		})
	}
})

// document.addEventListener("DOMContentLoaded", () => {
// 	const selects = document.querySelectorAll('.select-box')
// 	const headers = document.querySelectorAll('.select-box__header')
// 	// const options = document.querySelectorAll('.select-box__option')
// 	const lists = document.querySelector('.select-box__list')
//
// 	for (let i = 0; i < selects.length; i++) {
// 		headers[i].addEventListener('click', (e) => {
// 			lists[i].classList.toggle('active')
// 			selects[i].classList.toggle('open')
// 			headers[i].classList.toggle('open')
// 		})
// 	}
// })