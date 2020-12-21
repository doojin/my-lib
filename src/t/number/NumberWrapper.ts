export = class NumberWrapper {
  private readonly number: number;

  constructor(number: number) {
    this.number = number;
  }

  print() {
    console.log(this.number)
  }
}
