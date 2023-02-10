import { ImageFactory } from '../factories/image';
import { VideoFactory } from '../factories/video';

export class MediaFactory {
  renderMedia(data) {
    let factory = null;
    if (data.hasOwnProperty('image') || data.hasOwnProperty('portrait')) {
      factory = new ImageFactory();
    } else if (data.hasOwnProperty('video')) {
      factory = new VideoFactory();
    } else {
      throw new Error('Type must be either "image" or "video"');
    }
    console.log(data)
    return factory.createHTML(data);
  }
}
