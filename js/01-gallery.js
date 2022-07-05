import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);


galleryContainer.addEventListener('click', onGalleryCardsClick);

function createGalleryCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
    <a class="gallery__link" href"${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
        </div>
        `;
    })
    .join('');
}
// console.log(createGalleryCardsMarkup(galleryItems));

function onGalleryCardsClick(evt) {
    const isCardSwatch = evt.target.classList.contains('gallery__image');
    if (!isCardSwatch) {
        return;
    }
    
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
    `,
        {
    onShow: () => { document.addEventListener("keydown", onPushEsc); },
    onClose: () => { document.removeEventListener("keydown", onPushEsc); },
    }
    );

    function onPushEsc(evt) {
        if (evt.code === "Escape") {
            instance.close()
        }
    }
    instance.show()
    console.log(evt.target.alt);
}
galleryContainer.addEventListener('click', onGalleryCardsClick);