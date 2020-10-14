import Reservation from '../models/Reservation';
import ReservationsRepository from '../repositories/ReservationsRepository';

interface Request {
  finish_date: Date;
  reservationId: string;
}

class UpdateReservationService {
  private reservationsRepository: ReservationsRepository;

  constructor(reservationsRepository: ReservationsRepository) {
    this.reservationsRepository = reservationsRepository;
  }

  public execute({ reservationId, finish_date }: Request) {
    const findReservation = this.reservationsRepository.findReservationById(
      reservationId,
    );

    if (!findReservation) {
      throw Error('Reservation not found.');
    }

    findReservation.finish_date = finish_date;

    const updatedReservation = this.reservationsRepository.update(
      findReservation,
    );

    return updatedReservation;
  }
}

export default UpdateReservationService;
