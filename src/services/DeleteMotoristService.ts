import Motorist from '../models/Motorist';
import MotoristRepository from '../repositories/MotoristRepository';

interface Request {
  id: string;
}

class DeleteCarService {
  private motoristRepository: MotoristRepository;

  constructor(motoristRepository: MotoristRepository) {
    this.motoristRepository = motoristRepository;
  }

  public execute({ id }: Request) {
    const findMotorist = this.motoristRepository.findById(id);

    if (!findMotorist) {
      throw Error('Motorist not found.');
    }

    this.motoristRepository.delete(id);

    return;
  }
}

export default DeleteCarService;
