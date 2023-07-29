import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector('.gallery');
const galleryCards = createCards(galleryItems);

// Створення розмітки галереї

function createCards(galleryItems) {
	return galleryItems
		.map(({ original, preview, description }) => {
		return `<li class="gallery__item">
  		 	<a class="gallery__link" href="${original}">
      		 <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
         </a>
      </li>`;
	})
	 .join('');
}

// Додавання розмітки в список

galleryBox.insertAdjacentHTML('beforeend', galleryCards);

// Додавання слухача подій на список

galleryBox.addEventListener('click', onImage);

// Модалка з бібліотеки

const instance = basicLightbox.create(
  `
<img width="1280" height="auto" src="">`,
  {
    onShow: (instance) => {
      window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener('keydown', onEscKeyPress);
    },
  }
);

// Функція передачі шляху до зображеня модалці

function onImage(event) {
  event.preventDefault();
  const datasetSource = event.target.dataset.source;
  if (!datasetSource) return;
  instance.element().querySelector('img').src = datasetSource;
  instance.show();
}

// Функція закриття модалки виключно по ескейпу

function onEscKeyPress(event) {
  if (event.code !== 'Escape') return;
  instance.close();
}