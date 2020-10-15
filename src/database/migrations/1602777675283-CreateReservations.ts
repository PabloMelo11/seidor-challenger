import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateReservation1602777675283
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'reservations',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'motorist_id',
            type: 'uuid',
          },
          {
            name: 'car_id',
            type: 'uuid',
          },
          {
            name: 'initial_date',
            type: 'timestamp with time zone',
          },
          {
            name: 'finish_date',
            type: 'timestamp with time zone',
            isNullable: true,
          },
          {
            name: 'reason',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'reservations',
      new TableForeignKey({
        name: 'ReservationMotorist',
        columnNames: ['motorist_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'motorists',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'reservations',
      new TableForeignKey({
        name: 'ReservationCar',
        columnNames: ['car_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'cars',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('reservations', 'ReservationCar');

    await queryRunner.dropForeignKey('reservations', 'ReservationMotorist');

    await queryRunner.dropTable('motorists');
  }
}
