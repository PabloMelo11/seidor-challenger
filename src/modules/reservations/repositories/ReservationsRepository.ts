import { EntityRepository, Repository } from 'typeorm';
import Reservation from '../entities/Reservation';

interface CreateReservationDTO {
  id: string;
  motorist_id: string;
  initial_date: Date;
  finish_date: Date | null;
  car: string;
  reason: string;
}

@EntityRepository(Reservation)
class ReservationsRepository extends Repository<Reservation> {
  public async findReservationById(id: string): Promise<Reservation | null> {
    const findReservation = await this.findOne({
      where: { id },
    });

    return findReservation || null;
  }

  public async findReservationsByCarId(
    car_id: string,
  ): Promise<Reservation[] | null> {
    const findReservationByCarId = await this.find({
      where: { car_id },
    });

    return findReservationByCarId || null;
  }

  public async findReservationsByMotoristId(
    motorist_id: string,
  ): Promise<Reservation[] | null> {
    const findReservationsByMotoristId = await this.find({
      where: { motorist_id },
    });

    return findReservationsByMotoristId || null;
  }

  public async updateReservation(
    reservation: Reservation,
  ): Promise<Reservation> {
    return await this.save(reservation);
  }
}

export default ReservationsRepository;
