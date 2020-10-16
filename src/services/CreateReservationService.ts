import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

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
    const motorsistsRepository = getCustomRepository(MotoristsRepository);

    const findMotorist = await motorsistsRepository.findById(motorist_id);

    if (!findMotorist) {
      throw new AppError('Motorist not found.');
    }

    const findReservationsByCar = await reservationsRepository.findReservationsByCarId(
      car_id,
    );

    const busyCar = findReservationsByCar?.find(
      reservation => reservation.finish_date === null,
    );

    if (busyCar) {
      throw new AppError('This car is already being used.');
    }

    const findReservationsByMotoristId = await reservationsRepository.findReservationsByMotoristId(
      motorist_id,
    );

    const busyMotorist = findReservationsByMotoristId?.find(
      reservation => reservation.finish_date === null,
    );

    if (busyMotorist) {
      throw new AppError('This motorist is already using a car.');
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
