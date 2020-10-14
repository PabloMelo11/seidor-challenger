import { Router, Request, Response } from 'express';
import { parseISO } from 'date-fns';

import ReservationsRepository from '../repositories/ReservationsRepository';

const reservationsRouter = Router();

const reservationsRepository = new ReservationsRepository();

reservationsRouter.get('/', (request: Request, response: Response) => {
  const reservations = reservationsRepository.all();

  return response.json(reservations);
});

reservationsRouter.post('/', (request: Request, response: Response) => {
  const { client, initial_date, finish_date, car, reason } = request.body;

  const parsedInitialDate = parseISO(initial_date);
  const parsedFinishDate = finish_date ? parseISO(finish_date) : null;

  const findCar = reservationsRepository.findReservationByCar(car);

  if (findCar && findCar.finish_date === null) {
    return response
      .status(400)
      .json({ error: 'this car is already being used.' });
  }

  const reservation = reservationsRepository.create({
    client,
    initial_date: parsedInitialDate,
    finish_date: parsedFinishDate,
    car,
    reason,
  });

  return response.json(reservation);
});

export default reservationsRouter;
