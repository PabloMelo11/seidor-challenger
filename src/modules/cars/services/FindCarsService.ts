import { getCustomRepository } from 'typeorm';

import Car from '../models/Car';
import CarsRepository from '../repositories/CarsRepository';

interface Request {
  color: string;
  brand: string;
}

class FindCarService {
  public async execute({ color, brand }: Request): Promise<Car[] | null> {
    const carsRepository = getCustomRepository(CarsRepository);

    if (!color && !brand) {
      return await carsRepository.find();
    }

    const cars = carsRepository.findCarsByColorAndBrand({ color, brand });

    return cars || null;
  }
}

export default FindCarService;
