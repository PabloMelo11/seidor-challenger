import { Request, Response } from 'express';
import { parseISO } from 'date-fns';

import { getCustomRepository } from 'typeorm';

import CreateReservationService from '../services/CreateReservationService';

import ReservationsRepository from '../repositories/ReservationsRepository';
import UpdateReservationService from '../services/UpdateReservationService';

class ReservationsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const reservationsRepository = getCustomRepository(ReservationsRepository);

    const reservations = await reservationsRepository.find();

    return response.json(reservations);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { motorist_id, initial_date, car_id, reason } = request.body;

    const parsedInitialDate = parseISO(initial_date);

    const createReservation = new CreateReservationService();

    const reservation = await createReservation.execute({
      motorist_id,
      initial_date: parsedInitialDate,
      car_id,
      reason,
    });

    return response.json(reservation);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { reservationId } = request.params;
    const { finish_date } = request.body;

    const updateReservation = new UpdateReservationService();

    const parsedFinishDate = parseISO(finish_date);

    const reservation = await updateReservation.execute({
      reservationId,
      finish_date: parsedFinishDate,
    });

    return response.json(reservation);
  }
}

export default ReservationsController;
