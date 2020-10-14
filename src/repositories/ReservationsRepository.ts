import Reservation from '../models/Reservation';

class ReservationsRepository {
  private reservations: Reservation[];

  constructor() {
    this.reservations = [];
  }

  public all(): Reservation[] {
    return this.reservations;
  }

  public findReservationByCar(car: string): Reservation | null {
    const findReservationByCar = this.reservations.find(
      reservation => reservation.car === car,
    );

    return findReservationByCar || null;
  }

  public create(
    client: string,
    initial_date: Date,
    finish_date: Date | null,
    car: string,
    reason: string,
  ): Reservation {
    const reservation = new Reservation(
      client,
      initial_date,
      finish_date,
      car,
      reason,
    );

    this.reservations.push(reservation);

    return reservation;
  }
}

export default ReservationsRepository;
