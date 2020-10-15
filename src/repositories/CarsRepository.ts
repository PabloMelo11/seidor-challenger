import Car from '../models/Car';

interface CarDTO {
  id: string;
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

  public findById(id: string): Car | null {
    const findCar = this.cars.find(car => car.id === id);

    return findCar || null;
  }

  public findCarsByColorAndBrand({
    color,
    brand,
  }: FindCarsByColorAndBrand): Car[] | null {
    const cars = this.cars.filter(
      car =>
        (color &&
          car.color.toLocaleLowerCase().search(color.toLocaleLowerCase()) !==
            -1) ||
        (brand &&
          car.brand.toLocaleLowerCase().search(brand.toLocaleLowerCase()) !==
            -1),
    );

    return cars || null;
  }

  public create({ color, board, brand }: Omit<CarDTO, 'id'>): Car {
    const car = new Car({
      color,
      board,
      brand,
    });

    this.cars.push(car);

    return car;
  }

  public update(car: CarDTO): Car {
    const findCar = this.cars.findIndex(car => car.id === car.id);

    const updateCar = {
      ...car,
    };

    this.cars[findCar] = updateCar;

    return updateCar;
  }

  public delete(id: string) {
    const carIndex = this.cars.findIndex(car => car.id === id);

    this.cars.splice(carIndex, 1);

    return;
  }
}

export default CarsRepository;
