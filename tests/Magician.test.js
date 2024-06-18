import Magician from '../src/models/Magician';

test('Создание Magician с корректными параметрами', () => {
  const character = new Magician('Mage');
  expect(character.name).toBe('Mage');
  expect(character.type).toBe('Magician');
  expect(character.attack).toBe(10);
  expect(character.defence).toBe(40);
});