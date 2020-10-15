import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

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

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Car;
