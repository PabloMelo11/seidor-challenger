import Car from '../models/Car';
import CarRepository from '../repositories/CarsRepository';

interface Request {
  color: string;
  brand: string;
}

class FindCarService {
  private carRepository: CarRepository;

  constructor(carRepository: CarRepository) {
    this.carRepository = carRepository;
  }

  public execute({ color, brand }: Request): Car[] | null {
    if (!color && !brand) {
      return this.carRepository.all();
    }

    const cars = this.carRepository.findCarsByColorAndBrand({ color, brand });

    return cars || null;
  }
}

export default FindCarService;
