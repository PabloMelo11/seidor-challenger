import Motorist from '../models/Motorist';
import MotoristsRepository from '../repositories/MotoristsRepository';

interface Request {
  name: string;
}

class CreateReservationService {
  private motoristsRepository: MotoristsRepository;

  constructor(motoristsRepository: MotoristsRepository) {
    this.motoristsRepository = motoristsRepository;
  }

  public execute({ name }: Request): Motorist {
    const findMotorist = this.motoristsRepository.findByName(name);

    if (findMotorist) {
      throw Error('Motorist is already exists.');
    }

    const car = this.motoristsRepository.create({ name });

    return car;
  }
}

export default CreateReservationService;
