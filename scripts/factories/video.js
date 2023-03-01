import { Video } from '../models/video'

export class VideoFactory {
  createHTML(data) {
    const video = new Video(data)
    let element = document.createElement('video')
    element.setAttribute('controls', '')
    element.setAttribute('src', video.src)
    element.setAttribute('data-name', video.title)
    element.className = 'media'

    return element
  }
}