import { getCustomRepository } from 'typeorm';

import Reservation from '../models/Reservation';

import ReservationsRepository from '../repositories/ReservationsRepository';
import MotoristsRepository from '../repositories/MotoristsRepository';

interface Request {
  motorist_id: string;
  initial_date: Date;
  finish_date: Date | null;
  car_id: string;
  reason: string;
}

class CreateReservationService {
  public async execute({
    motorist_id,
    initial_date,
    finish_date,
    car_id,
    reason,
  }: Request): Promise<Reservation> {
    const reservationsRepository = getCustomRepository(ReservationsRepository);

    const findReservationsByCar = await reservationsRepository.findReservationsByCarId(
      car_id,
    );

    const busyCar = findReservationsByCar?.find(
      reservation => reservation.finish_date === null,
    );

    if (busyCar) {
      throw Error('This car is already being used.');
    }

    const findReservationsByMotoristId = await reservationsRepository.findReservationsByMotoristId(
      motorist_id,
    );

    const busyMotorist = findReservationsByMotoristId?.find(
      reservation => reservation.finish_date === null,
    );

    if (busyMotorist) {
      throw Error('This motorist is already using a car.');
    }

    const reservation = reservationsRepository.create({
      motorist_id,
      initial_date,
      finish_date,
      car_id,
      reason,
    });

    await reservationsRepository.save(reservation);

    return reservation;
  }
}

export default CreateReservationService;
