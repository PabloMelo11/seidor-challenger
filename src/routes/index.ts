import { Router } from 'express';

import reservationsRouter from './reservation.routes';
import carsRouter from './car.routes';

const routes = Router();

routes.use('/reservations', reservationsRouter);
routes.use('/cars', carsRouter);

export default routes;
