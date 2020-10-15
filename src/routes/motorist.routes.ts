import { Router, Request, Response } from 'express';

import CreateMotoristService from '../services/CreateMotoristService';
import UpdateMotoristService from '../services/UpdateMotoristService';
import DeleteMotoristService from '../services/DeleteMotoristService';
import FindOneMotoristService from '../services/FindOneMotoristService';

import MotoristRepository from '../repositories/MotoristsRepository';

const motoristRouter = Router();

const motoristRepository = new MotoristRepository();

motoristRouter.get('/', (request: Request, response: Response) => {
  const motorists = motoristRepository.all();

  return response.json(motorists);
});

motoristRouter.get('/:id', (request: Request, response: Response) => {
  try {
    const { id } = request.params;

    const findMotorist = new FindOneMotoristService(motoristRepository);

    const motorist = findMotorist.execute({ id });

    return response.json(motorist);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

motoristRouter.post('/', (request: Request, response: Response) => {
  try {
    const { name } = request.body;

    const createMotorist = new CreateMotoristService(motoristRepository);

    const motorist = createMotorist.execute({ name });

    return response.json(motorist);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

motoristRouter.put('/:id', (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const { name } = request.body;

    const updateMotorist = new UpdateMotoristService(motoristRepository);

    const motorist = updateMotorist.execute({ id, name });

    return response.json(motorist);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

motoristRouter.delete('/:id', (request: Request, response: Response) => {
  try {
    const { id } = request.params;

    const deleteMotorist = new DeleteMotoristService(motoristRepository);

    deleteMotorist.execute({ id });

    return response.status(200).send();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default motoristRouter;
