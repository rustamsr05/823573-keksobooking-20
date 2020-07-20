'use strict';

var mapFilter = document.querySelector('.map');

var avatarValues = ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png'];
var titleValues = ['Уютная квартира', 'Хорошая квартира недорого', 'Квартира в центре', 'Отличный вид из окна', 'Квартира в новом доме', 'Элитное жильё', 'Квартира после капитального ремонта', 'Отличная квартира для ценителей комфорта'];
var adressValues = ['600, 350', '400, 350', '200, 350', '800, 350', '400, 700', '200, 7000', '100, 700', '200, 900'];
var priceValues = [1200, 3000, 800, 2700, 8000, 1500, 2000, 1800];
var typeValues = ['flat', 'palace', 'house', 'bungalo'];
var roomsValues = [2, 3, 1, 8, 12, 4, 5, 2];
var guestsValues = [2, 4, 2, 10, 6, 4, 4, 3];
var checkinValues = ['12:00', '13:00', '14:00'];
var checkoutValues = ['12:00', '13:00', '14:00'];
var featuresValues = ['wifi', 'washer', 'elevator', 'conditioner', 'dishwasher', 'parking'];
var descriptionValues = ['срочно', 'семейной паре', 'не курящим', 'на длительный срок', 'предоплата за 3 месяца', 'срочно', 'c документами', 'оплата наличными'];
var photosValues = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var locationХValues = [150, 450, 300, 270, 620, 200, 590, 440];
var locationYValues = [210, 170, 230, 520, 220, 460, 270, 540];

var bookingAds = [];
var adsQuantity = 8;

var pins = document.querySelectorAll('.map-pins');
var adsBtnTemplate = document.querySelector('#pin').content.querySelector('button');
var fragment = document.createDocumentFragment();

// рандомное число от 1 до заданного
var randomNumber = function (number) {
  return Math.floor(Math.random() * number) + 1;
};

// создание массива рандомной длины из элементов предоставленного массива
var randomArray = function (array) {
  var newArray = [];
  for (var i = 0; i < randomNumber(array.length); i++) {
    var arrayItem = array[randomNumber(array.length) - 1];
    if (newArray.indexOf(arrayItem) !== -1) {
      i += 1;
    } else {
      newArray.push(arrayItem);
    }
  }
  return newArray;
};

var renderBtn = function (ads) {
  var adsElement = adsBtnTemplate.cloneNode(true);
  adsElement.style.left = ads.location.x;
  adsElement.style.top = ads.location.y;
  adsElement.img.src = ads.author.avatar;
  adsElement.img.alt = ads.offer.title;
};

mapFilter.classList.remove('map--faded');

for (var i = 0; i < adsQuantity; i++) {
  bookingAds[i] = {
    author: {
      avatar: avatarValues[i]
    },

    offer: {
      title: titleValues[i],
      address: adressValues[i],
      price: priceValues[i],
      type: typeValues[randomNumber(typeValues.length)],
      rooms: roomsValues[i],
      guests: guestsValues[i],
      checkin: checkinValues[randomNumber(checkinValues.length)],
      checkout: checkoutValues[randomNumber(checkoutValues.length)],
      features: randomArray(featuresValues),
      description: descriptionValues[i],
      photos: photosValues[i]
    },

    location: {
      x: locationХValues[i],
      y: locationYValues[i]
    }
  };
}

for (var i = 0; i < bookingAds.length; i++) {
  fragment.appendChild(renderBtn(bookingAds[i]));
}

pins.appendChild(fragment);

