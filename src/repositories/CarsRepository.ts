import { EntityRepository, Repository, Like } from 'typeorm';

import Car from '../models/Car';

interface CarDTO {
  id: string;
  color: string;
  board: string;
  brand: string;
}

interface FindCarsByColorAndBrand {
  color: string;
  brand: string;
}

@EntityRepository(Car)
class CarsRepository extends Repository<Car> {
  public async findByBoard(board: string): Promise<Car | null> {
    const findCar = await this.findOne({
      where: { board },
    });

    return findCar || null;
  }

  public async findById(id: string): Promise<Car | null> {
    const findCar = await this.findOne({
      where: { id },
    });

    return findCar || null;
  }

  public async findCarsByColorAndBrand({
    color,
    brand,
  }: FindCarsByColorAndBrand): Promise<Car[] | null> {
    const cars = this.find({
      where: [
        {
          color: Like(`%${color}%`),
        },
        {
          brand: Like(`%${brand}%`),
        },
      ],
    });

    return cars || null;
  }

  public async updateCar(car: CarDTO): Promise<Car> {
    return await this.save(car);
  }
}

export default CarsRepository;
