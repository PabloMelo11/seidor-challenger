import Car from '../models/Car';
import CarRepository from '../repositories/CarsRepository';

interface Request {
  id: string;
}

class DeleteCarService {
  private carRepository: CarRepository;

  constructor(carRepository: CarRepository) {
    this.carRepository = carRepository;
  }

  public execute({ id }: Request) {
    const findCarByBoard = this.carRepository.findById(id);

    if (!findCarByBoard) {
      throw Error('Car not found.');
    }

    this.carRepository.delete(id);

    return;
  }
}

export default DeleteCarService;
