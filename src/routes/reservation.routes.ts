import { Router, Request, Response } from 'express';
import { parseISO } from 'date-fns';

import Reservation from '../models/Reservation';

const reservationsRouter = Router();

const reservations: Reservation[] = [];

reservationsRouter.post('/', (request: Request, response: Response) => {
  const { client, initial_date, finish_date, car, reason } = request.body;

  const parsedInitialDate = parseISO(initial_date);
  const parsedFinishDate = finish_date ? parseISO(finish_date) : null;

  const findCar = reservations.find(reservation => reservation.car === car);

  if (findCar && findCar.finish_date === null) {
    return response
      .status(400)
      .json({ error: 'this car is already being used.' });
  }

  const reservation = new Reservation(
    client,
    parsedInitialDate,
    parsedFinishDate,
    car,
    reason,
  );

  reservations.push(reservation);

  return response.json(reservation);
});

export default reservationsRouter;
