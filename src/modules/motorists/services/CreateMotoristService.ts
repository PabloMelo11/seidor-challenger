import { getCustomRepository } from 'typeorm';

import AppError from '../../../shared/errors/AppError';

import Motorist from '../entities/Motorist';
import MotoristsRepository from '../repositories/MotoristsRepository';

interface Request {
  name: string;
}

class CreateReservationService {
  public async execute({ name }: Request): Promise<Motorist> {
    const motoristsRepository = getCustomRepository(MotoristsRepository);

    const findMotorist = await motoristsRepository.findByName(name);

    if (findMotorist) {
      throw new AppError('Motorist is already exists.');
    }

    const car = motoristsRepository.create({ name });

    await motoristsRepository.save(car);

    return car;
  }
}

export default CreateReservationService;
