import { galleryItems } from './gallery-items.js';
// Change code below this line

// Створення розмітки галереї

// Створюємо елементи

const galleryBox = document.querySelector('.gallery');
const galleryCards = createCards(galleryItems);

// Створюємо розмітку

function createCards(galleryItems) {
	return galleryItems
		.map(({ original, preview, description }) => {
		return `<li class="gallery__item">
  		 	<a class="gallery__link" href="${original}">
      		 <img class="gallery__image" src="${preview}" alt="${description}"/>
         </a>
      </li>`;
	})
	 .join('');
}

// Приклад нової розмітки

// <li class="gallery__item">
//    <a class="gallery__link" href="large-image.jpg">
//       <img class="gallery__image" src="small-image.jpg" alt="Image description" />
//    </a>
// </li>

// Додавання розмітки в список

galleryBox.insertAdjacentHTML('beforeend', galleryCards);

// Додавання модалки


const lightbox = new SimpleLightbox('.gallery a', { 
	
	captionsData: 'alt',
	captionDelay: 250

});