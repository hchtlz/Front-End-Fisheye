import { Media } from '../models/media.js';

export function mediaFactory (data) {
  const mediaObject = new Media(data);
}