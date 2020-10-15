import { Router, Request, Response } from 'express';

import CreateCarService from '../services/CreateCarService';
import FindCarService from '../services/FindCarsService';
import FindOneCarService from '../services/FindOneCardService';
import UpdateCarService from '../services/UpdateCarService';
import DeleteCarService from '../services/DeleteCarService';

import CarsRepository from '../repositories/CarsRepository';

const carsRouter = Router();

const carsRepository = new CarsRepository();

carsRouter.get('/', (request: Request, response: Response) => {
  try {
    const color: string = request.query.color as string;
    const brand: string = request.query.brand as string;

    const findCars = new FindCarService(carsRepository);

    const cars = findCars.execute({ color, brand });

    return response.json(cars);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

carsRouter.get('/:id', (request: Request, response: Response) => {
  try {
    const { id } = request.params;

    const findCar = new FindOneCarService(carsRepository);

    const car = findCar.execute({ id });

    return response.json(car);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

carsRouter.post('/', (request: Request, response: Response) => {
  try {
    const { color, board, brand } = request.body;

    const createCar = new CreateCarService(carsRepository);

    const car = createCar.execute({ color, board, brand });

    return response.json(car);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

carsRouter.put('/:id', (request: Request, response: Response) => {
  try {
    const { color, board, brand } = request.body;
    const { id } = request.params;

    const updateCar = new UpdateCarService(carsRepository);

    const car = updateCar.execute({ id, color, board, brand });

    return response.json(car);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

carsRouter.delete('/:id', (request: Request, response: Response) => {
  try {
    const { id } = request.params;

    const deleteCar = new DeleteCarService(carsRepository);

    deleteCar.execute({ id });

    return response.status(200).send();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default carsRouter;
