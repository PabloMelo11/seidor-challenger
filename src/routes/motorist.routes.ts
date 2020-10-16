import { Router, Request, Response } from 'express';

import CreateMotoristService from '../services/CreateMotoristService';
import UpdateMotoristService from '../services/UpdateMotoristService';
import DeleteMotoristService from '../services/DeleteMotoristService';
import FindOneMotoristService from '../services/FindOneMotoristService';
import FindMotoristsService from '../services/FindMotoristsService';

const motoristRouter = Router();

motoristRouter.get('/', async (request: Request, response: Response) => {
  const name: string = request.query.name as string;

  const findMotorists = new FindMotoristsService();

  const motorists = await findMotorists.execute({ name });

  return response.json(motorists);
});

motoristRouter.get('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;

  const findOneMotorist = new FindOneMotoristService();

  const motorist = await findOneMotorist.execute({ id });

  return response.json(motorist);
});

motoristRouter.post('/', async (request: Request, response: Response) => {
  const { name } = request.body;

  const createMotorist = new CreateMotoristService();

  const motorist = await createMotorist.execute({ name });

  return response.json(motorist);
});

motoristRouter.put('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;
  const { name } = request.body;

  const updateMotorist = new UpdateMotoristService();

  const motorist = await updateMotorist.execute({ id, name });

  return response.json(motorist);
});

motoristRouter.delete('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;

  const deleteMotorist = new DeleteMotoristService();

  await deleteMotorist.execute({ id });

  return response.status(200).send();
});

export default motoristRouter;
