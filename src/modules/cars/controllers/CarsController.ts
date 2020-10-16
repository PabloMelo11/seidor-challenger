import { Request, Response } from 'express';

import CreateCarService from '../services/CreateCarService';
import FindCarsService from '../services/FindCarsService';
import FindOneCarService from '../services/FindOneCarService';
import UpdateCarService from '../services/UpdateCarService';
import DeleteCarService from '../services/DeleteCarService';

class CarsContrller {
  public async index(request: Request, response: Response): Promise<Response> {
    const color: string = request.query.color as string;
    const brand: string = request.query.brand as string;

    const findCars = new FindCarsService();

    const cars = await findCars.execute({ color, brand });

    return response.json(cars);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findCar = new FindOneCarService();

    const car = await findCar.execute({ id });

    return response.json(car);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { color, board, brand } = request.body;

    const createCar = new CreateCarService();

    const car = await createCar.execute({ color, board, brand });

    return response.json(car);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { color, board, brand } = request.body;
    const { id } = request.params;

    const updateCar = new UpdateCarService();

    const car = await updateCar.execute({ id, color, board, brand });

    return response.json(car);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCar = new DeleteCarService();

    await deleteCar.execute({ id });

    return response.status(200).send();
  }
}

export default CarsContrller;
