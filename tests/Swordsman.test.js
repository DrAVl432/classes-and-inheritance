import Swordsman from '../src/models/Swordsman';

test('Создание Swordsman с корректными параметрами', () => {
  const character = new Swordsman('Warrior');
  expect(character.name).toBe('Warrior');
  expect(character.type).toBe('Swordsman');
  expect(character.attack).toBe(40);
  expect(character.defence).toBe(10);
});