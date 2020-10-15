import Motorist from '../models/Motorist';
import MotoristsRepository from '../repositories/MotoristsRepository';

interface Request {
  name: string;
}

class FindCarService {
  private motoristsRepository: MotoristsRepository;

  constructor(motoristsRepository: MotoristsRepository) {
    this.motoristsRepository = motoristsRepository;
  }

  public execute({ name }: Request): Motorist[] | null {
    if (!name) {
      return this.motoristsRepository.all();
    }

    const cars = this.motoristsRepository.findMotoristsByName(name);

    return cars || null;
  }
}

export default FindCarService;
