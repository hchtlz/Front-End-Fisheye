import { Image } from '../models/image'

export class ImageFactory {
  createHTML(data) {
    const image = new Image(data)
    let element = document.createElement('img')
    element.setAttribute('src', image.src)
    element.setAttribute('alt', image.title)
    element.setAttribute('data-name', image.title)
    element.className = 'media'
    if (image.isPortrait) {
      element.className += ' portrait'
      element.setAttribute('alt', image.name)
      element.setAttribute('data-name', image.name)
    }
    return element
  }
}