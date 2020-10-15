import { Router, Request, Response } from 'express';
import { parseISO } from 'date-fns';

import ReservationsRepository from '../repositories/ReservationsRepository';

import CreateReservationService from '../services/CreateReservationService';
import UpdateReservationService from '../services/UpdateReservationService';

const reservationsRouter = Router();

const reservationsRepository = new ReservationsRepository();

reservationsRouter.get('/', (request: Request, response: Response) => {
  const reservations = reservationsRepository.all();

  return response.json(reservations);
});

reservationsRouter.post('/', (request: Request, response: Response) => {
  try {
    const {
      motorist_id,
      initial_date,
      finish_date,
      car,
      reason,
    } = request.body;

    const parsedInitialDate = parseISO(initial_date);
    const parsedFinishDate = finish_date ? parseISO(finish_date) : null;

    const createReservation = new CreateReservationService(
      reservationsRepository,
    );

    const reservation = createReservation.execute({
      motorist_id,
      initial_date: parsedInitialDate,
      finish_date: parsedFinishDate,
      car,
      reason,
    });

    return response.json(reservation);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

reservationsRouter.patch(
  '/:reservationId',
  (request: Request, response: Response) => {
    try {
      const { reservationId } = request.params;
      const { finish_date } = request.body;

      const updateReservation = new UpdateReservationService(
        reservationsRepository,
      );

      const parsedFinishDate = parseISO(finish_date);

      const reservation = updateReservation.execute({
        reservationId,
        finish_date: parsedFinishDate,
      });

      return response.json(reservation);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  },
);

export default reservationsRouter;
