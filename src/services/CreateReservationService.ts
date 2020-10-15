import Reservation from '../models/Reservation';

import ReservationsRepository from '../repositories/ReservationsRepository';
import MotoristsRepository from '../repositories/MotoristsRepository';

interface Request {
  motorist_id: string;
  initial_date: Date;
  finish_date: Date | null;
  car: string;
  reason: string;
}

class CreateReservationService {
  private reservationsRepository: ReservationsRepository;
  private motoristsRepository: MotoristsRepository;

  constructor(reservationsRepository: ReservationsRepository) {
    this.reservationsRepository = reservationsRepository;
    this.motoristsRepository = this.motoristsRepository;
  }

  public execute({
    motorist_id,
    initial_date,
    finish_date,
    car,
    reason,
  }: Request): Reservation {
    const findReservationsByCar = this.reservationsRepository.findReservationByCar(
      car,
    );

    const busyCar = findReservationsByCar?.find(
      reservation => reservation.finish_date === null,
    );

    if (busyCar) {
      throw Error('This car is already being used.');
    }

    const findReservationsByMotoristId = this.reservationsRepository.findReservationsByMotoristId(
      motorist_id,
    );

    const busyMotorist = findReservationsByMotoristId?.find(
      reservation => reservation.finish_date === null,
    );

    if (busyMotorist) {
      throw Error('This motorist is already using a car.');
    }

    const reservation = this.reservationsRepository.create({
      motorist_id,
      initial_date,
      finish_date,
      car,
      reason,
    });

    return reservation;
  }
}

export default CreateReservationService;
