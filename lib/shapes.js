class Triangle {
  constructor() {
    this.color = '';
    this.points = "75, 150 225, 150 150, 25";
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<polygon points="${this.points}" fill="${this.color}" />`;
  }
}

class Circle {
  constructor() {
    this.color = '';
    // default cx, cy, and r for the circle
    this.cx = 150;
    this.cy = 100;
    this.r = 80;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.color}" />`;
  }
}

class Square {
  constructor() {
    this.color = '';
    this.x = 75;
    this.y = 25;
    this.width = 150;
    this.height = 150;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };