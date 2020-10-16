import { getCustomRepository } from 'typeorm';

import AppError from '../../../shared/errors/AppError';

import MotoristsRepository from '../repositories/MotoristsRepository';

interface Request {
  id: string;
}

class DeleteCarService {
  public async execute({ id }: Request) {
    const motoristsRepository = getCustomRepository(MotoristsRepository);

    const findMotorist = await motoristsRepository.findById(id);

    if (!findMotorist) {
      throw new AppError('Motorist not found.');
    }

    motoristsRepository.delete(id);

    return;
  }
}

export default DeleteCarService;
