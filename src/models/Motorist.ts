import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('motorists')
class Motorist {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}

export default Motorist;
