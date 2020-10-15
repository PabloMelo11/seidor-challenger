import Car from '../models/Car';
import CarRepository from '../repositories/CarsRepository';

interface Request {
  id: string;
  color: string;
  board: string;
  brand: string;
}

class UpdateCarService {
  private carRepository: CarRepository;

  constructor(carRepository: CarRepository) {
    this.carRepository = carRepository;
  }

  public execute({ id, color, board, brand }: Request): Car {
    const findCar = this.carRepository.findById(id);

    if (!findCar) {
      throw Error('Car not found.');
    }

    const allCars = this.carRepository.all();

    const findCarInSameBoard = allCars.find(car => car.board === board);

    if (findCarInSameBoard && findCarInSameBoard.board !== findCar.board) {
      throw Error('This car already exists.');
    }

    const updateCar = {
      id,
      color: color ? color : findCar.color,
      board: board ? board : findCar.board,
      brand: brand ? brand : findCar.brand,
    };

    const car = this.carRepository.update(updateCar);

    return car;
  }
}

export default UpdateCarService;
