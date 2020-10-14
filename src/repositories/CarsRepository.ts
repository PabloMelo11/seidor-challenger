import Car from '../models/Car';

interface CreateCarDTO {
  color: string;
  board: string;
}

class CarsRepository {
  private cars: Car[];

  constructor() {
    this.cars = [];
  }

  public all(): Car[] {
    return this.cars;
  }

  public findByBoard(board: string): Car | null {
    const findCar = this.cars.find(car => car.board === board);

    return findCar || null;
  }

  public create({ color, board }: CreateCarDTO): Car {
    const car = new Car({
      color,
      board,
    });

    this.cars.push(car);

    return car;
  }
}

export default CarsRepository;
