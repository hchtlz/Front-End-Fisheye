export class Gallery {
  constructor (data) {
    this._medias = data;
  }

  get medias() {
    return this._medias;
  }
}