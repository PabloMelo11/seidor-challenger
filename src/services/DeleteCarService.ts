import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import CarsRepository from '../repositories/CarsRepository';

interface Request {
  id: string;
}

class DeleteCarService {
  public async execute({ id }: Request) {
    const carsRepository = getCustomRepository(CarsRepository);

    const findCar = await carsRepository.findById(id);

    if (!findCar) {
      throw new AppError('Car not found.');
    }

    await carsRepository.delete(id);

    return;
  }
}

export default DeleteCarService;
