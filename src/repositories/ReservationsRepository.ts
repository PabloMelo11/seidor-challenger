import Reservation from '../models/Reservation';

interface CreateReservationDTO {
  client: string;
  initial_date: Date;
  finish_date: Date | null;
  car: string;
  reason: string;
}

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

  public findReservationByClient(client: string): Reservation | null {
    const findReservationByClient = this.reservations.find(
      reservation => reservation.client === client,
    );

    return findReservationByClient || null;
  }

  public create({
    client,
    initial_date,
    finish_date,
    car,
    reason,
  }: CreateReservationDTO): Reservation {
    const reservation = new Reservation({
      client,
      initial_date,
      finish_date,
      car,
      reason,
    });

    this.reservations.push(reservation);

    return reservation;
  }
}

export default ReservationsRepository;
