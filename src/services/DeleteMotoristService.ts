import { getCustomRepository } from 'typeorm';
import MotoristsRepository from '../repositories/MotoristsRepository';

interface Request {
  id: string;
}

class DeleteCarService {
  public async execute({ id }: Request) {
    const motoristsRepository = getCustomRepository(MotoristsRepository);

    const findMotorist = await motoristsRepository.findById(id);

    if (!findMotorist) {
      throw Error('Motorist not found.');
    }

    motoristsRepository.delete(id);

    return;
  }
}

export default DeleteCarService;
