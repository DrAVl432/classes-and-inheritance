import Character from './src/Character';

test('Создание персонажа с корректными параметрами', () => {
  const character = new Character('John', 'Bowerman');
  expect(character.name).toBe('John');
  expect(character.type).toBe('Bowerman');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
});

test('Ошибка при некорректном имени персонажа', () => {
  expect(() => new Character('J', 'Bowerman')).toThrow('Имя персонажа должно быть от 2 до 10 символов');
});

test('Ошибка при некорректном типе персонажа', () => {
  expect(() => new Character('John', 'Superman')).toThrow('Некорректный тип персонажа');
});