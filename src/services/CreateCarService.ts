import Car from '../models/Car';
import CarRepository from '../repositories/CarsRepository';

interface Request {
  color: string;
  board: string;
}

class CreateReservationService {
  private carRepository: CarRepository;

  constructor(carRepository: CarRepository) {
    this.carRepository = carRepository;
  }

  public execute({ color, board }: Request): Car {
    const findCarByBoard = this.carRepository.findByBoard(board);

    if (findCarByBoard) {
      throw Error('Car is already exists.');
    }

    const car = this.carRepository.create({
      color,
      board,
    });

    return car;
  }
}

export default CreateReservationService;
