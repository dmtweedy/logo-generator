class Triangle {
  constructor() {
    this.color = '';
    // default points for the triangle
    this.points = "150,18 244,182 56,182";
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
    // default x, y, width, and height for the square
    this.x = 100;
    this.y = 50;
    this.width = 100;
    this.height = 100;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };