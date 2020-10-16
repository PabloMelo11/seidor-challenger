import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import CarsController from '../../modules/cars/controllers/CarsController';

const carsRouter = Router();
const carsController = new CarsController();

carsRouter.get('/', carsController.index);

carsRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  carsController.show,
);

carsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      color: Joi.string().required(),
      board: Joi.string().required(),
      brand: Joi.string().required(),
    },
  }),
  carsController.create,
);

carsRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      color: Joi.string(),
      board: Joi.string(),
      brand: Joi.string(),
    },
  }),
  carsController.update,
);

carsRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  carsController.delete,
);

export default carsRouter;
