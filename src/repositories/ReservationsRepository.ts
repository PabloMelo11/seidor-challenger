import Reservation from '../models/Reservation';

interface CreateReservationDTO {
  id: string;
  motorist_id: string;
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

  public findReservationsByMotoristId(
    motorist_id: string,
  ): Reservation[] | null {
    const findReservationsByMotoristId = this.reservations.filter(
      reservation => reservation.motorist_id === motorist_id,
    );

    return findReservationsByMotoristId || null;
  }

  public create({
    motorist_id,
    initial_date,
    finish_date,
    car,
    reason,
  }: Omit<CreateReservationDTO, 'id'>): Reservation {
    const reservation = new Reservation({
      motorist_id,
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
