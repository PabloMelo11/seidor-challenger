import { getCustomRepository } from 'typeorm';

import Motorist from '../models/Motorist';
import MotoristsRepository from '../repositories/MotoristsRepository';

interface Request {
  id: string;
  name: string;
}

class UpdateMotoristService {
  public async execute({ id, name }: Request): Promise<Motorist> {
    const motoristsRepository = getCustomRepository(MotoristsRepository);

    const findMotorist = await motoristsRepository.findById(id);

    if (!findMotorist) {
      throw Error('Motorist not found.');
    }

    const allMotorists = await motoristsRepository.find();

    const findMotoristInSameName = allMotorists.find(
      motorist => motorist.name === name,
    );

    if (
      findMotoristInSameName &&
      findMotoristInSameName.name !== findMotorist.name
    ) {
      throw Error('This motorist already exists.');
    }

    findMotorist.name = name;

    const car = await motoristsRepository.updateMotorist(findMotorist);

    return car;
  }
}

export default UpdateMotoristService;
