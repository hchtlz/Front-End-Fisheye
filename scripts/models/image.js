export class Image {
  constructor (data) {
    this._id = data.id
    this._photographerId = data.photographerId
    this._title = data.title
    if (Object.prototype.hasOwnProperty.call(data, 'portrait')) {
      this._src = 'assets/portraits/' + data.portrait
      this._isPortrait = true
    } else if (Object.prototype.hasOwnProperty.call(data, 'image')) {
      this._src = 'assets/media/' + data.image
      this._isPortrait = false
    }
    this._likes = data.likes
    this._date = data.date
    this._price = data.price
    this._name = data.name
  }

  get id() {
    return this._id
  }

  get photographerId() {
    return this._photographerId
  }

  get title() {
    return this._title
  }

  get src() {
    return this._src
  }

  get likes() {
    return this._likes
  }

  get date() {
    return this._date
  }

  get price() {
    return this._price
  }

  get isPortrait() {
    return this._isPortrait
  }

  get name() {
    return this._name
  }
}