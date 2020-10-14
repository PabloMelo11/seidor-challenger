import { Router, Request, Response } from 'express';

import CreateCarService from '../services/CreateCarService';
import CarsRepository from '../repositories/CarsRepository';

const carsRouter = Router();

const carsRepository = new CarsRepository();

carsRouter.post('/', (request: Request, response: Response) => {
  try {
    const { color, board } = request.body;

    const createCar = new CreateCarService(carsRepository);

    const car = createCar.execute({ color, board });

    return response.json(car);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default carsRouter;
