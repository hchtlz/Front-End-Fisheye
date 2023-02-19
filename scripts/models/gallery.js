export class Gallery {
  constructor (data) {
    this._medias = data;
    this._title = data.title;
  }

  get medias() {
    return this._medias;
  }

  get title() {
    return this._title;
  }
}