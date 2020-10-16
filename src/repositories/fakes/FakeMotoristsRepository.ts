import { uuid } from 'uuidv4';

import Motorist from '../../models/Motorist';

class MotoristRepository {
  private motorists: Motorist[] = [];

  public async findById(id: string): Promise<Motorist | null> {
    const findMotorist = this.motorists.find(motorist => motorist.id === id);

    return findMotorist || null;
  }

  public async findMotoristsByName(name: string): Promise<Motorist[] | null> {
    const findMotorists = this.motorists.filter(
      motorist => motorist.name === name,
    );

    return findMotorists || null;
  }

  public async findByName(name: string): Promise<Motorist | undefined> {
    const findMotorist = this.motorists.find(
      motorist => motorist.name === name,
    );

    return findMotorist || undefined;
  }

  public async updateMotorist(motorist: Motorist): Promise<Motorist> {
    const findCar = this.motorists.findIndex(
      motorist => motorist.id === motorist.id,
    );

    const updateCar = {
      ...motorist,
    };

    this.motorists[findCar] = updateCar;

    return updateCar;
  }

  public async create({ name }: Motorist): Promise<Motorist> {
    const motorist = new Motorist();

    Object.assign(motorist, { id: uuid(), name });

    this.motorists.push(motorist);

    return motorist;
  }
}

export default MotoristRepository;
