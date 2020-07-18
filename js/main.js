'use strict';

var mapFilter = document.querySelector('.map');
mapFilter.classList.remove('map--faded');

var avatar_Values = ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png'];
var title_Values = ['Уютная квартира', 'Хорошая квартира недорого', 'Квартира в центре', 'Отличный вид из окна', 'Квартира в новом доме', 'Элитное жильё', 'Квартира после капитального ремонта', 'Отличная квартира для ценителей комфорта'];
var adress_Values = ['600, 350', '400, 350', '200, 350', '800, 350', '400, 700', '200, 7000', '100, 700', '200, 900'];
var price_Values = [1200, 3000, 800, 2700, 8000, 1500, 2000, 1800];
var type_Values = ['flat', 'flat', 'palace', 'house', 'palace', 'bungalo', 'flat', 'bungalo'];
var rooms_Values = [2, 3, 1, 8, 12, 4, 5, 2];
var guests_Values = [2, 4, 2, 10, 6, 4, 4, 3];
var checkin_Values = ['14:00', '14:00', '14:00', '14:00', '14:00', '14:00', '14:00', '14:00'];
var checkout_Values = ['12:00', '12:00', '12:00', '12:00', '12:00', '12:00', '12:00', '12:00'];
var features_Values = ['wifi parking', 'washer', 'elevator wifi', 'conditioner dishwasher', 'wifi', 'parking wifi washer', 'parking dishwasher conditioner', 'washer wifi parking elevator'];
var description_Values = ['срочно', 'семейной паре', 'не курящим', 'на длительный срок', 'предоплата за 3 месяца', 'срочно', 'c документами', 'оплата наличными'];
var photos_Values = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg', 'http://o0.github.io/assets/images/tokyo/hotel4.jpg', 'http://o0.github.io/assets/images/tokyo/hotel5.jpg', 'http://o0.github.io/assets/images/tokyo/hotel6.jpg', 'http://o0.github.io/assets/images/tokyo/hotel7.jpg', 'http://o0.github.io/assets/images/tokyo/hotel8.jpg'];
var locationХ_Values = [150, 450, 300, 270, 620, 200, 590, 440];
var locationY_Values = [210, 170, 230, 520, 220, 460, 270, 540];

var bookingAds = [];

var adsQuantity = 8;

for (var i = 0; i < adsQuantity; i++) {
  bookingAds[i] = {
    author: {
      avatar: avatar_Values[i]
    },

    offer: {
      title: title_Values[i],
      address: adress_Values[i],
      price: price_Values[i],
      type: type_Values[i],
      rooms: rooms_Values[i],
      guests: guests_Values[i],
      checkin: checkin_Values[i],
      checkout: checkout_Values[i],
      features: features_Values[i],
      description: description_Values[i],
      photos: photos_Values[i]
    },

    location: {
      x: locationХ_Values[i],
      y: locationY_Values[i]
    }
  };
}

var pins = document.querySelectorAll('.map-pins');
var adsBtnTemplate = document.querySelector('#pin').content.querySelector('button');
var fragment = document.createDocumentFragment();

var renderBtn = function (bookingAds) {
  var adsElement = adsBtnTemplate.cloneNode(true);
  adsElement.style.left = bookingAds.location.x;
  adsElement.style.top = bookingAds.location.y;
  adsElement.img.src = bookingAds.author.avatar;
  adsElement.img.alt = bookingAds.offer.title;
}

for (var i = 0; i < bookingAds.length; i++) {
  fragment.appendChild(renderBtn(bookingAds[i]));
}

pins.appendChild(fragment);

