import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class Product {
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsPositive()
  price: number; 
  constructor(t: string, pr: number) {
    this.title = t;
    this.price = pr;
  }

  getInformation() {
    return [this.title, `$${this.price}`];
  }
}
