import { v4 } from 'uuid';

class Reservation {
  id: string;

  client: string;

  initial_date: Date;

  finish_date: Date | null;

  car: string;

  reason: string;

  constructor(
    client: string,
    initial_date: Date,
    finish_date: Date | null,
    car: string,
    reason: string,
  ) {
    (this.id = v4()), (this.client = client);
    this.initial_date = initial_date;
    this.finish_date = finish_date;
    this.car = car;
    this.reason = reason;
  }
}

export default Reservation;
