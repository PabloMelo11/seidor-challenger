import { getCustomRepository } from 'typeorm';

import AppError from '../../../shared/errors/AppError';

import Car from '../entities/Car';
import CarsRepository from '../repositories/CarsRepository';

interface Request {
  id: string;
  color: string;
  board: string;
  brand: string;
}

class UpdateCarService {
  public async execute({ id, color, board, brand }: Request): Promise<Car> {
    const carsRepository = getCustomRepository(CarsRepository);

    const findCar = await carsRepository.findById(id);

    if (!findCar) {
      throw new AppError('Car not found.');
    }

    const allCars = await carsRepository.find();

    const findCarInSameBoard = allCars.find(car => car.board === board);

    if (findCarInSameBoard && findCarInSameBoard.board !== findCar.board) {
      throw new AppError('This car already exists.');
    }

    const updateCar = {
      id,
      color: color ? color : findCar.color,
      board: board ? board : findCar.board,
      brand: brand ? brand : findCar.brand,
    };

    const car = await carsRepository.updateCar(updateCar);

    return car;
  }
}

export default UpdateCarService;
