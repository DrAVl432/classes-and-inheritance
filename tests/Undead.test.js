import Undead from '../src/models/Undead';

test('Создание Undead с корректными параметрами', () => {
  const character = new Undead('Ghoul');
  expect(character.name).toBe('Ghoul');
  expect(character.type).toBe('Undead');
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
});