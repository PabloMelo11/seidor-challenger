import { Router } from 'express';

import reservationsRouter from './reservation.routes';
import carsRouter from './car.routes';
import motoristRouter from './motorist.routes';

const routes = Router();

routes.use('/reservations', reservationsRouter);
routes.use('/cars', carsRouter);
routes.use('/motorists', motoristRouter);

export default routes;
