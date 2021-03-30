	// Функция ymaps.ready() будет вызвана, когда
	// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
	// Создание карты.
	var myMap = new ymaps.Map("contacts-map", {
		center: [55.758463, 37.601079],
		zoom: 14,
	});
	// myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
	// 	hintContent: 'Собственный значок метки',
	// 	balloonContent: 'Это красивая метка'
	// }, {
	// 	// Опции.
	// 	// Необходимо указать данный тип макета.
	// 	iconLayout: 'default#image',
	// 	// Своё изображение иконки метки.
	// 	iconImageHref: 'img/placemark1.svg',
	// 	// Размеры метки.
	// 	iconImageSize: [30, 42],
	// 	// Смещение левого верхнего угла иконки относительно
	// 	// её "ножки" (точки привязки).
	// 	iconImageOffset: [-5, -38]
	// })

	// myMap.geoObjects
	// 	.add(myPlacemark)
	var myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {}, {
		iconLayout: 'default#imageWithContent',
		iconImageHref: 'img/placemark1.svg',
		iconImageSize: [20, 20],
		iconImageOffset: [-3, -42]
	});

	myMap.geoObjects.add(myPlacemark);
}