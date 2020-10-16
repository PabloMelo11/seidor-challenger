import Reservation from '../../models/Reservation';

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
    const reservation = new Reservation();

    reservation.motorist_id = motorist_id;
    reservation.initial_date = initial_date;
    reservation.car_id = car_id;
    reservation.reason = reason;

    this.reservations.push(reservation);

    return reservation;
  }
}

export default ReservationsRepository;
