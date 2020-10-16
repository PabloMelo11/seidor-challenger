import Reservation from '../../models/Reservation';

class ReservationsRepository {
  private reservations: Reservation[] = [];

  public findReservationById(id: string): Reservation | null {
    const findReservation = this.reservations.find(
      reservation => reservation.id === id,
    );

    return findReservation || null;
  }

  public findReservationsByCarId(car_id: string): Reservation[] | null {
    const findReservation = this.reservations.filter(
      reservation => reservation.car_id === car_id,
    );

    return findReservation || null;
  }

  public findReservationsByMotoristId(
    motorist_id: string,
  ): Reservation[] | null {
    const findReservation = this.reservations.filter(
      reservation => reservation.motorist_id === motorist_id,
    );

    return findReservation || null;
  }

  public updateReservation(reservation: Reservation): Reservation {
    const findReservation = this.reservations.findIndex(
      reservation => reservation.id === reservation.id,
    );

    const updateReservation = {
      ...reservation,
    };

    this.reservations[findReservation] = updateReservation;

    return reservation;
  }
}

export default ReservationsRepository;
