import Suffix from "./t/Suffix";

export default class StringWrapper {
  private readonly string;

  constructor(string: string) {
    this.string = string;
  }

  print(suffix: Suffix): void {
    console.log(`${this.string}${suffix.s}`)
  }
}
