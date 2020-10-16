import FakeMotoristssRepository from '../repositories/fakes/FakeMotoristsRepository';

describe('CreateMotorist', () => {
  it('should be able to create a new motorist', async () => {
    const fakeMotoristssRepository = new FakeMotoristssRepository();

    const motorist = await fakeMotoristssRepository.create({
      id: '23245454',
      name: 'Pablo',
    });

    expect(motorist).toHaveProperty('id');
  });
});
