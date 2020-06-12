
var mapFilter = document.querySelector('.map');
mapFilter.classList.remove('map--faded');

var avatarArr ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png'];
var titleArr ['Уютная квартира', 'Хорошая квартира недорого', 'Квартира в центре', 'Отличный вид из окна', 'Квартира в новом доме', 'Элитное жильё', 'Квартира после капитального ремонта', 'Отличная квартира для ценителей комфорта'];
var adressArr ['600, 350', '400, 350', '200, 350', '800, 350', '400, 700', '200, 7000', '100, 700', '200, 900'];
var priceArr [1200, 3000, 800, 2700, 8000, 1500, 2000, 1800];
var typeArr ['flat', 'flat', 'palace', 'house', 'palace', 'bungalo', 'flat', 'bungalo'];
var roomsArr [2, 3, 1, 8, 12, 4, 5, 2];
var guestsArr [2, 4, 2, 10, 6, 4, 4, 3];
var checkinArr ['14:00', '14:00', '14:00', '14:00', '14:00', '14:00', '14:00', '14:00'];
var checkoutArr ['12:00', '12:00', '12:00', '12:00', '12:00', '12:00', '12:00', '12:00'];
var featuresArr ['wifi parking', 'washer', 'elevator wifi', 'conditioner dishwasher', 'wifi', 'parking wifi washer', 'parking dishwasher conditioner', 'washer wifi parking elevator'];
var descriptionArr ['срочно', 'семейной паре', 'не курящим', 'на длительный срок', 'предоплата за 3 месяца', 'срочно', 'c документами', 'оплата наличными']
var photosArr ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg', 'http://o0.github.io/assets/images/tokyo/hotel4.jpg', 'http://o0.github.io/assets/images/tokyo/hotel5.jpg', 'http://o0.github.io/assets/images/tokyo/hotel6.jpg', 'http://o0.github.io/assets/images/tokyo/hotel7.jpg', 'http://o0.github.io/assets/images/tokyo/hotel8.jpg'];
var location_xArr [150, 450, 300, 270, 620, 200, 590, 440];
var location_yArr [210, 170, 230, 520, 220, 460, 270, 540];

var bookingAdArr [];

for (var i = 0; i < 8; i++) {
  bookingAdArr[i] = {
    author: {
      avatar: avatarArr[i]
    },

    offer: {
      title: titleArr[i],
      address: adressArr[i],
      price: priceArr[i],
      type: typeArr[i],
      rooms: roomsArr[i],
      guests: guestsArr[i],
      checkin: checkinArr[i],
      checkout: checkoutArr[i]
      features: featuresArr[i],
      description: descriptionArr[i],
      photos: photosArr[i]
    },

    location: {
          x: location_xArr[i],
          y: location_yArr[i]
    }
  }
}

var pins = document.querySelectorAll('.map-pins');
var template = document.querySelector('#pin').content.querySelector('button');
var fragment = document.createDocumentFragment();

for (var i = 0; i < 8; i++) {
  var element = template.cloneNode(true);
  element.children[0].style.left = bookingAdArr[i].location.x;
  element.children[0].style.top = bookingAdArr[i].location.y;
  element.children[0].img.src = 'bookingAdArr[i].author.avatar';
  element.children[0].img.alt = 'bookingAdArr[i].offer.title';
  fragment.appendChild(element);
}

pins.appendChild(fragment);

