import { Router } from 'express';

import MotoristsController from '../controllers/MotoristsController';

const motoristRouter = Router();
const motoristsController = new MotoristsController();

motoristRouter.get('/', motoristsController.index);

motoristRouter.get('/:id', motoristsController.show);

motoristRouter.post('/', motoristsController.create);

motoristRouter.put('/:id', motoristsController.update);

motoristRouter.delete('/:id', motoristsController.delete);

export default motoristRouter;
