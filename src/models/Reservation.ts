import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
} from 'typeorm';

import Motorist from './Motorist';
import Car from './Car';

@Entity('reservations')
class Reservation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  motorist_id: string;

  @OneToOne(() => Motorist)
  @JoinColumn({ name: 'motorist_id' })
  motorist: Motorist;

  @Column()
  car_id: string;

  @OneToOne(() => Car)
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
