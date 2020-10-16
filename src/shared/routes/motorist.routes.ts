import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import MotoristsController from '../../modules/motorists/controllers/MotoristsController';

const motoristRouter = Router();
const motoristsController = new MotoristsController();

motoristRouter.get('/', motoristsController.index);

motoristRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  motoristsController.show,
);

motoristRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  motoristsController.create,
);

motoristRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  motoristsController.update,
);

motoristRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  motoristsController.delete,
);

export default motoristRouter;
