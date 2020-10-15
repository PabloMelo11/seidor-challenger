import { Router, Request, Response } from 'express';

import CreateMotoristService from '../services/CreateMotoristService';
import UpdateMotoristService from '../services/UpdateMotoristService';
import MotoristRepository from '../repositories/MotoristRepository';

const motoristRouter = Router();

const motoristRepository = new MotoristRepository();

motoristRouter.get('/', (request: Request, response: Response) => {
  const motorists = motoristRepository.all();

  return response.json(motorists);
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

export default motoristRouter;
