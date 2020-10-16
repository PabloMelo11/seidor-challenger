import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

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
      throw new AppError('Motorist not found.');
    }

    const allMotorists = await motoristsRepository.find();

    const findMotoristInSameName = allMotorists.find(
      motorist => motorist.name === name,
    );

    if (
      findMotoristInSameName &&
      findMotoristInSameName.name !== findMotorist.name
    ) {
      throw new AppError('This motorist already exists.');
    }

    findMotorist.name = name;

    const car = await motoristsRepository.updateMotorist(findMotorist);

    return car;
  }
}

export default UpdateMotoristService;
