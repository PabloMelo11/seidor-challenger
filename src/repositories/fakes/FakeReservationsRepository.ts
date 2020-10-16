import { uuid } from 'uuidv4';

interface Reservation {
  id: string;
  motorist_id: string;
  initial_date: Date;
  finish_date?: Date;
  car_id: string;
  reason: string;
}

class ReservationsRepository {
  private reservations: Reservation[] = [];

  public async findReservationById(id: string): Promise<Reservation | null> {
    const findReservation = this.reservations.find(
      reservation => reservation.id === id,
    );

    return findReservation || null;
  }

  public async findReservationsByCarId(
    car_id: string,
  ): Promise<Reservation[] | null> {
    const findReservation = this.reservations.filter(
      reservation => reservation.car_id === car_id,
    );

    return findReservation || null;
  }

  public async findReservationsByMotoristId(
    motorist_id: string,
  ): Promise<Reservation[] | null> {
    const findReservation = this.reservations.filter(
      reservation => reservation.motorist_id === motorist_id,
    );

    return findReservation || null;
  }

  public async updateReservation(
    reservation: Reservation,
  ): Promise<Reservation> {
    const findReservation = this.reservations.findIndex(
      reservation => reservation.id === reservation.id,
    );

    const updateReservation = {
      ...reservation,
    };

    this.reservations[findReservation] = updateReservation;

    return reservation;
  }

  public async create({
    motorist_id,
    initial_date,
    car_id,
    reason,
  }: Reservation): Promise<Reservation> {
    const reservation = {
      id: uuid(),
      motorist_id,
      initial_date,
      car_id,
      reason,
    };

    this.reservations.push(reservation);

    return reservation;
  }
}

export default ReservationsRepository;
