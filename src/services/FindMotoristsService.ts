import { getCustomRepository } from 'typeorm';
import Motorist from '../models/Motorist';

import MotoristsRepository from '../repositories/MotoristsRepository';

interface Request {
  name: string;
}

class FindCarService {
  public async execute({ name }: Request): Promise<Motorist[] | null> {
    const motoristsRepository = getCustomRepository(MotoristsRepository);

    if (!name) {
      return await motoristsRepository.find();
    }

    const cars = await motoristsRepository.findMotoristsByName(name);

    return cars || null;
  }
}

export default FindCarService;
