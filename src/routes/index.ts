import { Router } from 'express';

import reservationsRouter from './reservation.routes';

const routes = Router();

routes.use('/reservations', reservationsRouter);

export default routes;
