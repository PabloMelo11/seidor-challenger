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

  public findById(id: string): Motorist | null {
    const motorist = this.motorists.find(motorist => motorist.id === id);

    return motorist || null;
  }

  public findByName(name: string): Motorist | null {
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

  public update(motorist: MotoristDTO): Motorist {
    const findMotorist = this.motorists.findIndex(
      motorist => motorist.id === motorist.id,
    );

    const updateMotorist = {
      ...motorist,
    };

    this.motorists[findMotorist] = updateMotorist;

    return updateMotorist;
  }

  public delete(id: string) {
    const motoristIndex = this.motorists.findIndex(
      motorist => motorist.id === id,
    );

    this.motorists.splice(motoristIndex, 1);

    return;
  }
}

export default MotoristRepository;
