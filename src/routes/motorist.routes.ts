import { Router, Request, Response } from 'express';

import CreateMotoristService from '../services/CreateMotoristService';
import MotoristRepository from '../repositories/MotoristRepository';

const motoristRouter = Router();

const motoristRepository = new MotoristRepository();

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

export default motoristRouter;
