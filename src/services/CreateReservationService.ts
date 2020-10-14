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

  constructor(reservationsRespository: ReservationsRepository) {
    this.reservationsRepository = reservationsRespository;
  }

  public execute({
    client,
    initial_date,
    finish_date,
    car,
    reason,
  }: Request): Reservation {
    const findReservation = this.reservationsRepository.findReservationByCar(
      car,
    );

    if (findReservation && findReservation.finish_date === null) {
      throw Error('this car is already being used.');
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
