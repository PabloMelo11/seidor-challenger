import { getCustomRepository } from 'typeorm';

import Car from '../models/Car';
import CarRepository from '../repositories/CarsRepository';

interface Request {
  color: string;
  board: string;
  brand: string;
}

class CreateReservationService {
  public async execute({ color, board, brand }: Request): Promise<Car> {
    const carsRepository = getCustomRepository(CarRepository);

    const findCarByBoard = await carsRepository.findByBoard(board);

    if (findCarByBoard) {
      throw Error('This car with board is already exists.');
    }

    const car = carsRepository.create({
      color,
      board,
      brand,
    });

    await carsRepository.save(car);

    return car;
  }
}

export default CreateReservationService;
