import Reservation from '../models/Reservation';

interface CreateReservationDTO {
  id: string;
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

  public findReservationById(id: string): Reservation | null {
    const findReservation = this.reservations.find(
      reservation => reservation.id === id,
    );

    return findReservation || null;
  }

  public findReservationByCar(car: string): Reservation[] | null {
    const findReservationByCar = this.reservations.filter(
      reservation => reservation.car === car,
    );

    return findReservationByCar || null;
  }

  public findReservationsByClient(client: string): Reservation[] | null {
    const findReservationsByClient = this.reservations.filter(
      reservation => reservation.client === client,
    );

    return findReservationsByClient || null;
  }

  public create({
    client,
    initial_date,
    finish_date,
    car,
    reason,
  }: Omit<CreateReservationDTO, 'id'>): Reservation {
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

  public update(reservation: CreateReservationDTO) {
    const findReservation = this.reservations.findIndex(
      reservation => reservation.id === reservation.id,
    );

    const updatedReservation = {
      ...reservation,
    };

    this.reservations[findReservation] = updatedReservation;

    return updatedReservation;
  }
}

export default ReservationsRepository;
