import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
} from 'typeorm';

import Reservation from '../../reservations/entities/Reservation';

@Entity('cars')
class Car {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  color: string;

  @Column()
  board: string;

  @Column()
  brand: string;

  @OneToOne(() => Reservation, reservation => reservation.car)
  reservation: Reservation;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Car;
