import MotoristsRepository from '../repositories/MotoristsRepository';

interface Request {
  id: string;
}

class DeleteCarService {
  private motoristsRepository: MotoristsRepository;

  constructor(motoristsRepository: MotoristsRepository) {
    this.motoristsRepository = motoristsRepository;
  }

  public execute({ id }: Request) {
    const findMotorist = this.motoristsRepository.findById(id);

    if (!findMotorist) {
      throw Error('Motorist not found.');
    }

    this.motoristsRepository.delete(id);

    return;
  }
}

export default DeleteCarService;