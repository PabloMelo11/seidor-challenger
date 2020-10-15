import Car from '../models/Car';
import CarRepository from '../repositories/CarsRepository';

interface Request {
  id: string;
}

class FindOneCarService {
  private carRepository: CarRepository;

  constructor(carRepository: CarRepository) {
    this.carRepository = carRepository;
  }

  public execute({ id }: Request): Car | null {
    const car = this.carRepository.findById(id);

    if (!car) {
      throw Error('Car not found.');
    }

    return car || null;
  }
}

export default FindOneCarService;
