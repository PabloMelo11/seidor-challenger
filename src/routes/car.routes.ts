import { Router, Request, Response } from 'express';

import CreateCarService from '../services/CreateCarService';
import FindCarsService from '../services/FindCarsService';
import FindOneCarService from '../services/FindOneCarService';
import UpdateCarService from '../services/UpdateCarService';
import DeleteCarService from '../services/DeleteCarService';

const carsRouter = Router();

carsRouter.get('/', async (request: Request, response: Response) => {
  try {
    const color: string = request.query.color as string;
    const brand: string = request.query.brand as string;

    const findCars = new FindCarsService();

    const cars = await findCars.execute({ color, brand });

    return response.json(cars);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

carsRouter.get('/:id', async (request: Request, response: Response) => {
  try {
    const { id } = request.params;

    const findCar = new FindOneCarService();

    const car = await findCar.execute({ id });

    return response.json(car);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

carsRouter.post('/', async (request: Request, response: Response) => {
  try {
    const { color, board, brand } = request.body;

    const createCar = new CreateCarService();

    const car = await createCar.execute({ color, board, brand });

    return response.json(car);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

carsRouter.put('/:id', async (request: Request, response: Response) => {
  try {
    const { color, board, brand } = request.body;
    const { id } = request.params;

    const updateCar = new UpdateCarService();

    const car = await updateCar.execute({ id, color, board, brand });

    return response.json(car);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

carsRouter.delete('/:id', async (request: Request, response: Response) => {
  try {
    const { id } = request.params;

    const deleteCar = new DeleteCarService();

    await deleteCar.execute({ id });

    return response.status(200).send();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default carsRouter;
