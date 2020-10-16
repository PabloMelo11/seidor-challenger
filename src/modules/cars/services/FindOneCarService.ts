import { getCustomRepository } from 'typeorm';

import AppError from '../../../shared/errors/AppError';

import Car from '../entities/Car';
import CarsRepository from '../repositories/CarsRepository';

interface Request {
  id: string;
}

class FindOneCarService {
  public async execute({ id }: Request): Promise<Car | null> {
    const carsRepository = getCustomRepository(CarsRepository);

    const car = await carsRepository.findById(id);

    if (!car) {
      throw new AppError('Car not found.');
    }

    return car || null;
  }
}

export default FindOneCarService;
