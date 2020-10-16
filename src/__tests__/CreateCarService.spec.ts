import FakeCarsRepository from '../repositories/fakes/FakeCarsRespository';

describe('CreateCar', () => {
  it('should be able to create a new car', async () => {
    const fakeCarsRepository = new FakeCarsRepository();

    const car = await fakeCarsRepository.create({
      id: '23245454',
      color: 'preto',
      board: 'PNG-126',
      brand: 'chevrolet',
    });

    expect(car).toHaveProperty('id');
  });
});
