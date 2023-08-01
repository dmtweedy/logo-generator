class Triangle {
  constructor() {
    this.shapeColor = '';
    this.textColor = ''; // store the text color separately
    this.logoText = ''; // store the logo text
  }

  setShapeColor(color) {
    this.shapeColor = color;
  }

  setTextColor(color) {
    this.textColor = color; // set the text color separately
  }

  setLogoText(logoText) {
    this.logoText = logoText;
  }

  render() {
    const points = "75,150 225,150 150,25";
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="${points}" fill="${this.shapeColor}" /><text x="150" y="135" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text></svg>`;
  }
}

class Circle {
  constructor() {
    this.shapeColor = '';
    this.textColor = '';
    this.logoText = '';
  }

  setShapeColor(color) {
    this.shapeColor = color;
  }

  setTextColor(color) {
    this.textColor = color;
  }

  setLogoText(logoText) {
    this.logoText = logoText;
  }

  render() {
    const cx = 150;
    const cy = 100;
    const r = 80;
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="${cx}" cy="${cy}" r="${r}" fill="${this.shapeColor}" /><text x="150" y="135" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text></svg>`;
  }
}

class Square {
  constructor() {
    this.shapeColor = '';
    this.textColor = '';
    this.logoText = '';
  }

  setShapeColor(color) {
    this.shapeColor = color;
  }

  setTextColor(color) {
    this.textColor = color;
  }

  setLogoText(logoText) {
    this.logoText = logoText;
  }

  render() {
    const x = 75;
    const y = 50;
    const width = 150;
    const height = 150;
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${this.shapeColor}" /><text x="150" y="135" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text></svg>`;
  }
}

module.exports = { Triangle, Circle, Square };