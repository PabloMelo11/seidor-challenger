import { v4 } from 'uuid';

class Car {
  id: string;

  color: string;

  board: string;

  brand: string;

  constructor({ color, board, brand }: Omit<Car, 'id'>) {
    this.id = v4();
    this.color = color;
    this.board = board;
    this.brand = brand;
  }
}

export default Car;
