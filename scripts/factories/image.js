import { Image } from '../models/image';

export class ImageFactory {
    createHTML(data) {
        const image = new Image(data);
        let element = document.createElement('img');
        element.setAttribute('src', image.src);
        element.setAttribute('alt', image.title);
        element.setAttribute('data-name', image.title);
        element.className = 'media';

        return element;
    }
}