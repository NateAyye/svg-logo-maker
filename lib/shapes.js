class Shape {
  color;
  constructor(color) {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    throw new Error(
      '\x1B[31m✘\x1B[0m \x1B[31m\x1B[7m ERROR \x1B[0m: Shape should implement its own render function',
    );
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.color}"/>`;
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    return `<polygon points="150 05, 260 170, 40 170, 150" fill="${this.color}"/>`;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    return `<rect x="50" y="0" width="200" height="200" fill="${this.color}"/>`;
  }
}

module.exports = { Circle, Square, Triangle };
