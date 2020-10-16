import { uuid } from 'uuidv4';

import Car from '../../models/Car';

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
  private cars: Car[] = [];

  public async findByBoard(board: string): Promise<Car | null> {
    const findCar = this.cars.find(car => car.board === board);

    return findCar || null;
  }

  public async findById(id: string): Promise<Car | null> {
    const findCar = this.cars.find(car => car.id === id);

    return findCar || null;
  }

  public async findCarsByColorAndBrand({
    color,
    brand,
  }: FindCarsByColorAndBrand): Promise<Car[] | null> {
    const cars = this.cars.filter(
      car => car.color === color || car.brand === brand,
    );

    return cars || null;
  }

  public async create({ color, board, brand }: Car): Promise<Car> {
    const car = new Car();

    car.id = uuid();
    car.color = color;
    car.board = board;
    car.brand = brand;

    this.cars.push(car);

    return car;
  }

  public async updateCar(car: Car): Promise<Car> {
    const findCar = this.cars.findIndex(car => car.id === car.id);

    const updateCar = {
      ...car,
    };

    this.cars[findCar] = updateCar;

    return updateCar;
  }
}

export default CarsRepository;
