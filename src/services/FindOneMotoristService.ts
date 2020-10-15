import Motorist from '../models/Motorist';
import MotoristsRepository from '../repositories/MotoristsRepository';

interface Request {
  id: string;
}

class FindOneCarService {
  private motoristsRepository: MotoristsRepository;

  constructor(motoristsRepository: MotoristsRepository) {
    this.motoristsRepository = motoristsRepository;
  }

  public execute({ id }: Request): Motorist | null {
    const motorist = this.motoristsRepository.findById(id);

    if (!motorist) {
      throw Error('Motorist not found.');
    }

    return motorist || null;
  }
}

export default FindOneCarService;
