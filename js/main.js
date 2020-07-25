'use strict';

var mapFilter = document.querySelector('.map');
var titleValues = ['Уютная квартира', 'Хорошая квартира недорого', 'Квартира в центре', 'Отличный вид из окна', 'Квартира в новом доме', 'Элитное жильё', 'Квартира после капитального ремонта', 'Отличная квартира для ценителей комфорта'];
var maxPrice = 1000000;
var typeValues = ['flat', 'palace', 'house', 'bungalo'];
var roomsValues = [1, 2, 3, 100];
var guestsValues = ['для 1 гостя', 'для 2 гостей', 'для 3 гостей', 'не для гостей'];
var checkinValues = ['12:00', '13:00', '14:00'];
var checkoutValues = ['12:00', '13:00', '14:00'];
var featuresValues = ['wifi', 'washer', 'elevator', 'conditioner', 'dishwasher', 'parking'];
var descriptionValues = ['срочно', 'семейной паре', 'не курящим', 'на длительный срок', 'предоплата за 3 месяца', 'срочно', 'c документами', 'оплата наличными'];
var photosValues = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var locationYMin = 130;
var locationYMax = 630;

var bookingAds = [];
var adsQuantity = 8;

var pins = document.querySelector('.map__pins');
var adsBtnTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
var fragment = document.createDocumentFragment();

// рандомное число от 0 до заданного
var getRandomNumber = function (number) {
  return Math.floor(Math.random() * number);
};

// рандомное число от min до max
var getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// создание массива рандомной длины из элементов предоставленного массива
var getRandomArray = function (array) {
  var newArray = [];
  for (var i = 0; i <= getRandomNumber(array.length); i++) {
    var arrayItem = array[getRandomNumber(array.length)];
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
  var image = adsElement.querySelector('img');
  adsElement.style.left = ads.location.x + 'px';
  adsElement.style.top = ads.location.y + 'px';
  image.src = ads.author.avatar;
  image.alt = ads.offer.title;
  return adsElement;
};

mapFilter.classList.remove('map--faded');

for (var i = 0; i < adsQuantity; i++) {
  var xCoordinate = getRandomNumber(mapFilter.clientWidth) + 25;
  var yCoordinate = getRandomIntInclusive(locationYMin, locationYMax) - 165;
  bookingAds[i] = {
    author: {
      avatar: 'img/avatars/user0' + (i + 1) + '.png'
    },

    offer: {
      title: titleValues[getRandomNumber(titleValues.length)],
      address: xCoordinate + ', ' + yCoordinate,
      price: getRandomNumber(maxPrice),
      type: typeValues[getRandomNumber(typeValues.length)],
      rooms: roomsValues[getRandomNumber(roomsValues.length)],
      guests: guestsValues[getRandomNumber(guestsValues.length)],
      checkin: checkinValues[getRandomNumber(checkinValues.length)],
      checkout: checkoutValues[getRandomNumber(checkoutValues.length)],
      features: getRandomArray(featuresValues),
      description: descriptionValues[getRandomNumber(descriptionValues.length)],
      photos: getRandomArray(photosValues)
    },

    location: {
      x: xCoordinate - 25,
      y: yCoordinate + 165
    }
  };
}

for (var j = 0; j < bookingAds.length; j++) {
  fragment.appendChild(renderBtn(bookingAds[j]));
}

pins.appendChild(fragment);

