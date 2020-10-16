import { Router } from 'express';

import ReservationsController from '../controllers/ReservationsController';

const reservationsRouter = Router();
const reservationsController = new ReservationsController();

reservationsRouter.get('/', reservationsController.index);

reservationsRouter.post('/', reservationsController.create);

reservationsRouter.patch('/:reservationId', reservationsController.update);

export default reservationsRouter;
