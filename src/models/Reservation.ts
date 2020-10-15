import { v4 } from 'uuid';

class Reservation {
  id: string;

  motorist_id: string;

  initial_date: Date;

  finish_date: Date | null;

  car: string;

  reason: string;

  constructor({
    motorist_id,
    initial_date,
    finish_date,
    car,
    reason,
  }: Omit<Reservation, 'id'>) {
    (this.id = v4()), (this.motorist_id = motorist_id);
    this.initial_date = initial_date;
    this.finish_date = finish_date;
    this.car = car;
    this.reason = reason;
  }
}

export default Reservation;
