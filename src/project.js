class Project {
  constructor(sprites, stage, options) {
    // create a canvas element
    this.canvas = document.createElement("canvas");
  }
  attach(selector) {
    document.querySelector(selector)?.appendChild?.(this.canvas);
  }
}
