import FakeReservationsRepository from '../repositories/fakes/FakeReservationsRepository';

describe('CreateReservation', () => {
  it('should be able to create a new reservation', async () => {
    const fakeReservationsRepository = new FakeReservationsRepository();

    const reservation = await fakeReservationsRepository.create({
      id: '23245454',
      motorist_id: '321231321',
      initial_date: new Date(),
      car_id: '62232132',
      reason: 'Teste',
    });

    expect(reservation).toHaveProperty('id');
    expect(reservation.motorist_id).toBe('321231321');
    expect(reservation.car_id).toBe('62232132');
  });
});
