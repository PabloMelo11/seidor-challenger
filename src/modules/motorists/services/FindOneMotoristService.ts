import { getCustomRepository } from 'typeorm';

import AppError from '../../../shared/errors/AppError';

import Motorist from '../entities/Motorist';
import MotoristsRepository from '../repositories/MotoristsRepository';

interface Request {
  id: string;
}

class FindOneCarService {
  public async execute({ id }: Request): Promise<Motorist | null> {
    const motoristsRepository = getCustomRepository(MotoristsRepository);

    const motorist = await motoristsRepository.findById(id);

    if (!motorist) {
      throw new AppError('Motorist not found.');
    }

    return motorist || null;
  }
}

export default FindOneCarService;
