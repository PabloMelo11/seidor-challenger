import { v4 } from 'uuid';

class Motorist {
  id: string;

  name: string;

  constructor({ name }: Omit<Motorist, 'id'>) {
    this.id = v4();
    this.name = name;
  }
}

export default Motorist;
