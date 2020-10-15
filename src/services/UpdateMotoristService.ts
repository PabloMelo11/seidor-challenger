import Motorist from '../models/Motorist';
import MotoristsRepository from '../repositories/MotoristsRepository';

interface Request {
  id: string;
  name: string;
}

class UpdateMotoristService {
  private motoristsRepository: MotoristsRepository;

  constructor(motoristsRepository: MotoristsRepository) {
    this.motoristsRepository = motoristsRepository;
  }

  public execute({ id, name }: Request): Motorist {
    const findMotorist = this.motoristsRepository.findById(id);

    if (!findMotorist) {
      throw Error('Motorist not found.');
    }

    const allMotorists = this.motoristsRepository.all();

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

    const car = this.motoristsRepository.update(findMotorist);

    return car;
  }
}

export default UpdateMotoristService;
