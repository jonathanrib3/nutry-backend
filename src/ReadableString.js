import { Readable } from "stream"

export class ReadableString extends Readable {
  sent = false

  constructor(str) {
    super()
  }

  _read() {
    if(!this.sent) {
      this.push(Buffer.from(this.str))
    }
    else {
      this.push(null)
      this.sent = true
    }
  }
}