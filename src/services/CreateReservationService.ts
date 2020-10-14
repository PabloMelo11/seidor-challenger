import Reservation from '../models/Reservation';
import ReservationsRepository from '../repositories/ReservationsRepository';

interface Request {
  client: string;
  initial_date: Date;
  finish_date: Date | null;
  car: string;
  reason: string;
}

class CreateReservationService {
  private reservationsRepository: ReservationsRepository;

  constructor(reservationsRepository: ReservationsRepository) {
    this.reservationsRepository = reservationsRepository;
  }

  public execute({
    client,
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

    const findReservationsByClient = this.reservationsRepository.findReservationsByClient(
      client,
    );

    const busyClient = findReservationsByClient?.find(
      reservation => reservation.finish_date === null,
    );

    if (busyClient) {
      throw Error('This customer is already using a car.');
    }

    const reservation = this.reservationsRepository.create({
      client,
      initial_date,
      finish_date,
      car,
      reason,
    });

    return reservation;
  }
}

export default CreateReservationService;
