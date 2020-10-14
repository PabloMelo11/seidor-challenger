import { Router, Request, Response } from 'express';
import { parseISO } from 'date-fns';

import ReservationsRepository from '../repositories/ReservationsRepository';
import CreateReservationService from '../services/CreateReservationService';

const reservationsRouter = Router();

const reservationsRepository = new ReservationsRepository();

reservationsRouter.get('/', (request: Request, response: Response) => {
  const reservations = reservationsRepository.all();

  return response.json(reservations);
});

reservationsRouter.post('/', (request: Request, response: Response) => {
  try {
    const { client, initial_date, finish_date, car, reason } = request.body;

    const parsedInitialDate = parseISO(initial_date);
    const parsedFinishDate = finish_date ? parseISO(finish_date) : null;

    const createReservation = new CreateReservationService(
      reservationsRepository,
    );

    const reservation = createReservation.execute({
      client,
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

export default reservationsRouter;
