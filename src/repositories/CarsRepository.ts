import Car from '../models/Car';

interface CreateCarDTO {
  color: string;
  board: string;
  brand: string;
}

interface FindCarsByColorAndBrand {
  color: string;
  brand: string;
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

  public findCarsByColorAndBrand({
    color,
    brand,
  }: FindCarsByColorAndBrand): Car[] | null {
    const cars = this.cars.filter(
      car => (color && car.color === color) || (brand && car.brand === brand),
    );

    return cars || null;
  }

  public create({ color, board, brand }: CreateCarDTO): Car {
    const car = new Car({
      color,
      board,
      brand,
    });

    this.cars.push(car);

    return car;
  }
}

export default CarsRepository;
