import { Router, Request, Response } from 'express';
import { uuid } from 'uuidv4';
import { parseISO } from 'date-fns';

const reservationsRouter = Router();

interface IReservation {
  id: string;
  client: string;
  initial_date: Date;
  finish_date?: Date | null;
  car: string;
  reason: string;
}

const reservations: IReservation[] = [];

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

  const reservation = {
    id: uuid(),
    client,
    initial_date: parsedInitialDate,
    finish_date: parsedFinishDate,
    car,
    reason,
  };

  reservations.push(reservation);

  return response.json(reservation);
});

export default reservationsRouter;
