import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ReservationsController from '../../modules/reservations/controllers/ReservationsController';

const reservationsRouter = Router();
const reservationsController = new ReservationsController();

reservationsRouter.get('/', reservationsController.index);

reservationsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      motorist_id: Joi.string().uuid().required(),
      initial_date: Joi.date().required(),
      car_id: Joi.string().uuid().required(),
      reason: Joi.string().required(),
    },
  }),
  reservationsController.create,
);

reservationsRouter.patch(
  '/:reservationId',
  celebrate({
    [Segments.PARAMS]: {
      reservationId: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      finish_date: Joi.date().required(),
    },
  }),
  reservationsController.update,
);

export default reservationsRouter;
