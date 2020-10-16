import { getCustomRepository } from 'typeorm';

import AppError from '../../../shared/errors/AppError';

import Car from '../entities/Car';
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
      throw new AppError('This car with board is already exists.');
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
