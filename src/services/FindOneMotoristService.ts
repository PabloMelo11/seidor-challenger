import { getCustomRepository } from 'typeorm';

import Motorist from '../models/Motorist';
import MotoristsRepository from '../repositories/MotoristsRepository';

interface Request {
  id: string;
}

class FindOneCarService {
  public async execute({ id }: Request): Promise<Motorist | null> {
    const motoristsRepository = getCustomRepository(MotoristsRepository);

    const motorist = await motoristsRepository.findById(id);

    if (!motorist) {
      throw Error('Motorist not found.');
    }

    return motorist || null;
  }
}

export default FindOneCarService;
