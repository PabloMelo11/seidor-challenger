import { v4 } from 'uuid';

class Car {
  id: string;

  color: string;

  board: string;

  constructor({ color, board }: Omit<Car, 'id'>) {
    (this.id = v4()), (this.color = color);
    this.board = board;
  }
}

export default Car;
