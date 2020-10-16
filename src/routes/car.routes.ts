import { Router } from 'express';

import CarsController from '../controllers/CarsController';

const carsRouter = Router();
const carsController = new CarsController();

carsRouter.get('/', carsController.index);

carsRouter.get('/:id', carsController.show);

carsRouter.post('/', carsController.create);

carsRouter.put('/:id', carsController.update);

carsRouter.delete('/:id', carsController.delete);

export default carsRouter;
