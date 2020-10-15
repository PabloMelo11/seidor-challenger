import Motorist from '../models/Motorist';

interface MotoristDTO {
  id: string;
  name: string;
}

class MotoristRepository {
  private motorists: MotoristDTO[];

  constructor() {
    this.motorists = [];
  }

  public all() {
    return this.motorists;
  }

  public findById(name: string): Motorist | null {
    const motorist = this.motorists.find(motorist => motorist.name === name);

    return motorist || null;
  }

  public create({ name }: Omit<MotoristDTO, 'id'>): Motorist {
    const motorist = new Motorist({
      name,
    });

    this.motorists.push(motorist);

    return motorist;
  }
}

export default MotoristRepository;
