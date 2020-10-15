import Motorist from '../models/Motorist';
import MotoristRepository from '../repositories/MotoristRepository';

interface Request {
  id: string;
  name: string;
}

class UpdateMotoristService {
  private motoristRepository: MotoristRepository;

  constructor(motoristRepository: MotoristRepository) {
    this.motoristRepository = motoristRepository;
  }

  public execute({ id, name }: Request): Motorist {
    const findMotorist = this.motoristRepository.findById(id);

    if (!findMotorist) {
      throw Error('Motorist not found.');
    }

    const allMotorists = this.motoristRepository.all();

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

    const car = this.motoristRepository.update(findMotorist);

    return car;
  }
}

export default UpdateMotoristService;
