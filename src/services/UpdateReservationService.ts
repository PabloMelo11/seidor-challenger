import { getCustomRepository } from 'typeorm';

import Reservation from '../models/Reservation';
import ReservationsRepository from '../repositories/ReservationsRepository';

interface Request {
  finish_date: Date;
  reservationId: string;
}

class UpdateReservationService {
  public async execute({
    reservationId,
    finish_date,
  }: Request): Promise<Reservation> {
    const reservationsRepository = getCustomRepository(ReservationsRepository);

    const findReservation = await reservationsRepository.findReservationById(
      reservationId,
    );

    if (!findReservation) {
      throw Error('Reservation not found.');
    }

    findReservation.finish_date = finish_date;

    const updatedReservation = await reservationsRepository.updateReservation(
      findReservation,
    );

    return updatedReservation;
  }
}

export default UpdateReservationService;
