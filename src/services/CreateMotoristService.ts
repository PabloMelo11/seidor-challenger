import Motorist from '../models/Motorist';
import MotoristRepository from '../repositories/MotoristRepository';

interface Request {
  name: string;
}

class CreateReservationService {
  private motoristRepository: MotoristRepository;

  constructor(motoristRepository: MotoristRepository) {
    this.motoristRepository = motoristRepository;
  }

  public execute({ name }: Request): Motorist {
    const findMotorist = this.motoristRepository.findByName(name);

    if (findMotorist) {
      throw Error('Motorist is already exists.');
    }

    const car = this.motoristRepository.create({ name });

    return car;
  }
}

export default CreateReservationService;
