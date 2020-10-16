import {
  Entity,
  Column,
  OneToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

import Reservation from '../../reservations/entities/Reservation';

@Entity('motorists')
class Motorist {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToOne(() => Reservation, reservation => reservation.motorist)
  reservation: Reservation;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Motorist;
