import Daemon from '../src/models/Daemon';

test('Создание Daemon с корректными параметрами', () => {
  const character = new Daemon('Evil');
  expect(character.name).toBe('Evil');
  expect(character.type).toBe('Daemon');
  expect(character.attack).toBe(10);
  expect(character.defence).toBe(40);
});