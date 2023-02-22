import { ImageFactory } from '../factories/image'
import { VideoFactory } from '../factories/video'

export class MediaFactory {
    renderMedia(data) {
        let factory = null
        if (Object.prototype.hasOwnProperty.call(data, 'image') || Object.prototype.hasOwnProperty.call(data, 'portrait')) {
            factory = new ImageFactory()
        } else if (Object.prototype.hasOwnProperty.call(data, 'video')) {
            factory = new VideoFactory()
        } else {
            throw new Error('Type must be either "image" or "video"')
        }
        return factory.createHTML(data)
    }
}
