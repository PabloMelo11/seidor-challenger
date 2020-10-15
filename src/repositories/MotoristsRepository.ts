import { EntityRepository, Repository } from 'typeorm';

import Motorist from '../models/Motorist';

@EntityRepository(Motorist)
class MotoristRepository extends Repository<Motorist> {
  public async updateMotorist(motorist: Motorist): Promise<Motorist> {
    return this.save(motorist);
  }

  public async findById(id: string): Promise<Motorist | null> {
    const findMotorist = await this.findOne({
      where: { id },
    });

    return findMotorist || null;
  }

  public async findMotoristsByName(name: string): Promise<Motorist[] | null> {
    const findMotorists = await this.find({
      where: { name },
    });

    return findMotorists || null;
  }

  public async findByName(name: string): Promise<Motorist | undefined> {
    const findMotorist = await this.findOne({
      where: { name },
    });

    return findMotorist || undefined;
  }
}

export default MotoristRepository;
