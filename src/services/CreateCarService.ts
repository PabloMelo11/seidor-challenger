import Car from '../models/Car';
import CarRepository from '../repositories/CarsRepository';

interface Request {
  color: string;
  board: string;
  brand: string;
}

class CreateReservationService {
  private carRepository: CarRepository;

  constructor(carRepository: CarRepository) {
    this.carRepository = carRepository;
  }

  public execute({ color, board, brand }: Request): Car {
    const findCarByBoard = this.carRepository.findByBoard(board);

    if (findCarByBoard) {
      throw Error('This car with board is already exists.');
    }

    const car = this.carRepository.create({
      color,
      board,
      brand,
    });

    return car;
  }
}

export default CreateReservationService;
