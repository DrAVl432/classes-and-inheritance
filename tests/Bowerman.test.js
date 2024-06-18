import Bowerman from '../src/models/Bowerman';

test('Создание Bowerman с корректными параметрами', () => {
  const character = new Bowerman('Archer');
  expect(character.name).toBe('Archer');
  expect(character.type).toBe('Bowerman');
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
});