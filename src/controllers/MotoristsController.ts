import { Request, Response } from 'express';

import CreateMotoristService from '../services/CreateMotoristService';
import UpdateMotoristService from '../services/UpdateMotoristService';
import DeleteMotoristService from '../services/DeleteMotoristService';
import FindOneMotoristService from '../services/FindOneMotoristService';
import FindMotoristsService from '../services/FindMotoristsService';

class MotoristsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const name: string = request.query.name as string;

    const findMotorists = new FindMotoristsService();

    const motorists = await findMotorists.execute({ name });

    return response.json(motorists);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findOneMotorist = new FindOneMotoristService();

    const motorist = await findOneMotorist.execute({ id });

    return response.json(motorist);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createMotorist = new CreateMotoristService();

    const motorist = await createMotorist.execute({ name });

    return response.json(motorist);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;

    const updateMotorist = new UpdateMotoristService();

    const motorist = await updateMotorist.execute({ id, name });

    return response.json(motorist);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteMotorist = new DeleteMotoristService();

    await deleteMotorist.execute({ id });

    return response.status(200).send();
  }
}

export default MotoristsController;
