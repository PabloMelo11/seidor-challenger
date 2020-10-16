import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
} from 'typeorm';

import Motorist from '../../motorists/entities/Motorist';
import Car from '../../cars/entities/Car';

@Entity('reservations')
class Reservation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  motorist_id: string;

  @OneToOne(() => Motorist, motorist => motorist.reservation, { eager: true })
  @JoinColumn({ name: 'motorist_id' })
  motorist: Motorist;

  @Column()
  car_id: string;

  @OneToOne(() => Car, car => car.reservation, { eager: true })
  @JoinColumn({ name: 'car_id' })
  car: Car;

  @Column('time with time zone')
  initial_date: Date;

  @Column('time with time zone')
  finish_date: Date | null;

  @Column()
  reason: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Reservation;
