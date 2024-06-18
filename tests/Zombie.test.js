import Zombie from '../src/models/Zombie';

test('Создание Zombie с корректными параметрами', () => {
  const character = new Zombie('Walker');
  expect(character.name).toBe('Walker');
  expect(character.type).toBe('Zombie');
  expect(character.attack).toBe(40);
  expect(character.defence).toBe(10);
});