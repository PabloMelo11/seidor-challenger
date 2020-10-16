import { Router, Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import ReservationsRepository from '../repositories/ReservationsRepository';

import CreateReservationService from '../services/CreateReservationService';
import UpdateReservationService from '../services/UpdateReservationService';

const reservationsRouter = Router();

reservationsRouter.get('/', async (request: Request, response: Response) => {
  const reservationsRepository = getCustomRepository(ReservationsRepository);

  const reservations = await reservationsRepository.find();

  return response.json(reservations);
});

reservationsRouter.post('/', async (request: Request, response: Response) => {
  try {
    const {
      motorist_id,
      initial_date,
      finish_date,
      car_id,
      reason,
    } = request.body;

    const parsedInitialDate = parseISO(initial_date);
    const parsedFinishDate = finish_date ? parseISO(finish_date) : null;

    const createReservation = new CreateReservationService();

    const reservation = await createReservation.execute({
      motorist_id,
      initial_date: parsedInitialDate,
      finish_date: parsedFinishDate,
      car_id,
      reason,
    });

    return response.json(reservation);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

reservationsRouter.patch(
  '/:reservationId',
  async (request: Request, response: Response) => {
    try {
      const { reservationId } = request.params;
      const { finish_date } = request.body;

      const updateReservation = new UpdateReservationService();

      const parsedFinishDate = parseISO(finish_date);

      const reservation = await updateReservation.execute({
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
